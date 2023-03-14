require("dotenv").config();
// Filesystem
const fs = require('node:fs/promises');
const { Configuration, OpenAIApi } = require("openai");

const prompt =
  "Sympaattinen kuva, Koirametsä Rallatus - Turvallinen koirametsä tarjoaa 2 hehtaarin verran aidattua metsää koirien ulkoilutukseen erilaisilla leikkialueilla, kirkkaat ja lämpimät värit.";
const imageTitle = "Koirametsä rallatus";
const folderPath = "./public/images/koirametsat/";

// Go recursively thru each subfolder inside ./content, read each .md file and return an array of objects with the file path and content

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

const run = async () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  // Create the image
  /* const response = await openai.createImage({
    prompt,
    n: 1,
    size: "512x512",
  });
  image_url = response.data.data[0].url; */
  const image_url =
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-EgrIWCsgn3HVtpijwicEevle/user-nAZvcFikwK47h4vIDFRjUewe/img-3mRAw1TtV4Hn8w4JoYjiGB2A.png?st=2023-03-10T16%3A35%3A49Z&se=2023-03-10T18%3A35%3A49Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-09T23%3A18%3A25Z&ske=2023-03-10T23%3A18%3A25Z&sks=b&skv=2021-08-06&sig=XAYu55fDEU8dhK7GlR3Kn/SSizHss2XtL3JWmZUn3OA%3D";

  const imagePath = `${__dirname}/${folderPath}${slugify(imageTitle)}.png`;

  const response = await fetch(image_url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(imagePath, buffer);
  // Download the image
};

// run();
