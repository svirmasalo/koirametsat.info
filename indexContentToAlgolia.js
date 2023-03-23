/**
 * Script that reads the content of the `content` folder and indexes it to Algolia
 */

//env vars
require("dotenv").config();

const algoliasearch = require("algoliasearch");
const consola = require("consola");
const fs = require("fs");
const fsp = require('node:fs/promises');
const path = require("path");

const { Configuration, OpenAIApi } = require("openai");

const apiKey = process.env.ALGOLIA_API_KEY || "";
const appId = process.env.ALGOLIA_APPLICATION_ID || "";
const indexName = process.env.ALGOLIA_INDEX || "";

const client = algoliasearch(appId, apiKey);
const index = client.initIndex(indexName);

// Read the content of the `content` folder
const contentPath = path.join(__dirname, "./content");
const files = fs.readdirSync(contentPath);

// function that slugifies a string
const slugify = (string) => {
    return string
        .toString()
        .normalize("NFD") // split an accented letter in the base letter and the accented letter
        .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
        .toLowerCase()
        .trim() // trim spaces from start and end of string
        .replace(/\s+/g, "-") // replace spaces with -
        .replace(/&/g, "-and-") // replace & with 'and'
        .replace(/[^\w\-]+/g, "") // remove all non-word chars
        .replace(/\-\-+/g, "-") // replace multiple - with single -
        .replace(/^-+/, "") // trim - from start of text
        .replace(/-+$/, ""); // trim - from end of text
};


// Array of folders not to read
const exclude = [];

// Filter exluded folders and files that have an extension
const filteredFiles = files.filter((file) => {
  return !exclude.includes(file) && !file.includes(".");
});

// Read the content of each folder and find each `.md` file except `index.md`
const contentFiles = filteredFiles.map((folder) => {
  const folderPath = path.join(contentPath, folder);
  const folderFiles = fs.readdirSync(folderPath);
  const mdFiles = folderFiles.filter((file) => {
    return file.includes(".md") && !file.includes("index.md");
  });
  return mdFiles.map((file) => {
    // Hash file name to use as objectID
    const objectID = require("crypto");
    const hash = objectID.createHash("md5");
    hash.update(file);
    return {
      objectID: hash.digest("hex"),
      path: slugify(folder).concat("/", slugify(file.replace(".md", ""))),
      filePath: path.join(folderPath, file),
    };
  });
});

// Flatten the array
const contentFilesFlat = contentFiles.flat();

// Read the content of each `.md` file parse it and index it to Algolia
const contentObjects = contentFilesFlat.map((file) => {
  try {
    const data = fs.readFileSync(file.filePath, "utf8");

    const matter = require("gray-matter");
    const item = matter(data);

    // only return data that includes a title and does not contain a draft
    if (item.data.title) {
      // console.log(item);
      // Get tite, description, tags and city from the frontmatter. Default to empty string if not found
      const { title, description, tags, city, address, closeBy } = item.data;
      const object = {
        objectID: file.objectID,
        title: title || "",
        description: description || "",
        path: file.path,
        tags: tags.split(",") || [],
        address: address || "",
        city: city || file.path.split("/")[0],
        closeBy: closeBy || "",
      };
      return object;
    }
  } catch (error) {
    consola.error(error);
  }
});

// Remove undefined values
const contentObjectsFiltered = contentObjects.filter((item) => item);

const saveObjectsToAlgolia = async () => {
  index
    .saveObjects(contentObjectsFiltered)
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createImages = async () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  for (const content of contentObjectsFiltered) {
    const imagePath = `${__dirname}/public/images/${content.path.split('/')[1]}.png`;

    // Check if file exists
    if (fs.existsSync(imagePath)) {
      // file exists - skip iteration
      continue;
    }
    const prompt = `Lämmin, kirkas ja värikäs kuva koirista ympäristössä jota kuvaillaan näin: ${content.title} - ${content.city} - ${content.description}`;
    const responseOAI = await openai.createImage({
      prompt,
      n: 1,
      size: "512x512",
    });
    image_url = responseOAI.data.data[0].url;


    const responseIU = await fetch(image_url);
    const blob = await responseIU.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fsp.writeFile(imagePath, buffer, {flag: 'wx'});
  }
};
if (process.env.STAGE === 'DEV') {
  createImages();
}
saveObjectsToAlgolia();