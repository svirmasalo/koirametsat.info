/**
 * Script that reads the content of the `content` folder and indexes it to Algolia
 */

//env vars
require("dotenv").config();

const algoliasearch = require("algoliasearch");
const consola = require("consola");
const fs = require("fs");
const path = require("path");
const { content } = require("@nuxt/content");

const apiKey = process.env.ALGOLIA_API_KEY || "";
const appId = process.env.ALGOLIA_APPLICATION_ID || "";
const indexName = process.env.ALGOLIA_INDEX || "";

const client = algoliasearch(appId, apiKey);
const index = client.initIndex(indexName);

// Read the content of the `content` folder
const contentPath = path.join(__dirname, "./content");
const files = fs.readdirSync(contentPath);

// Array of folders not to read
const exclude = [];

// Filter exluded folders and files that have an extension
const filteredFiles = files.filter(file => {
    return !exclude.includes(file) && !file.includes(".");
});

// Read the content of each folder and find each `.md` file except `index.md`
const contentFiles = filteredFiles.map(folder => {
    const folderPath = path.join(contentPath, folder);
    const folderFiles = fs.readdirSync(folderPath);
    const mdFiles = folderFiles.filter(file => {
        return file.includes(".md") && !file.includes("index.md");
    });
    return mdFiles.map(file => {
        // Hash file name to use as objectID
        const objectID = require("crypto");
        const hash = objectID.createHash("md5");
        hash.update(file);
        return {
            objectID: hash.digest("hex"),
            path: folder.concat("/", encodeURIComponent(file.replace(".md", ""))),
            filePath: path.join(folderPath, file)
        };
    });
});

// Flatten the array
const contentFilesFlat = contentFiles.flat();

// Read the content of each `.md` file parse it and index it to Algolia
const contentObjects = contentFilesFlat.map(file => {
    try {
        const data =  fs.readFileSync(file.filePath, "utf8");

        const matter = require('gray-matter');
        const item = matter(data);

        // only return data that includes a title and does not contain a draft
        if (item.data.title) {
            // console.log(item);
            // Get tite, description, tags and city from the frontmatter. Default to empty string if not found
            const { title, description, tags, city, address} = item.data;
            const object = {
                objectID: file.objectID,
                title : title || "",
                description : description || "",
                path: file.path,
                tags: tags.split(',') || [],
                address: address || "",
                city: city || file.path.split("/")[0],
            };
            return object;
        }
    } catch (error) {
        consola.error(error);
    }
});

// Remove undefined values
const contentObjectsFiltered = contentObjects.filter(item => item);

index
  .saveObjects(contentObjectsFiltered)
  .then(({ objectIDs }) => {
    console.log(objectIDs);
  })
  .catch(err => {
    console.log(err);
  });