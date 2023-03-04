// modules/module.mjs
import consola from "consola";
import algoliasearch from "algoliasearch";

import { content } from "@nuxt/content";
import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    // Usually  npm package name of your module
    name: "nuxt-3-content-algolia",
    // The key in `nuxt.config` that holds your module options
    configKey: "nuxt3ContentAlgolia",
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: "^3.0.0",
    },
  },
  // Default configuration options for your module
  defaults: {
    appId: process.env.ALGOLIA_APPLICATION_ID || "",
    apiKey: process.env.ALGOLIA_API_KEY || "",
    paths: [
      {
        name: "/tampere",
        index: process.env.ALGOLIA_INDEX || "",
        fields: ["title", "description", "tags", "bodyPlainText"],
      },
    ],
  },
  hooks: {},
  async setup(moduleOptions, nuxt) {
    // -- Add your module logic here --
    const config = {
      hook: "generate:done",
      ...moduleOptions,
    };

    if (!config.appId || !config.apiKey) {
      consola.error(
        new Error(
          "appId and apiKey are required for nuxt-3-content-algolia module"
        )
      );
      return;
    }

    nuxt.hook(config.hook, async (nuxt) => {
      for (let i = 0; i < config.paths.length; i++) {
        const path = config.paths[i];
        const indexName = path.index || path.name;
        const deep = path.deep;
        let docs = await content(path.name, { deep }).fetch();
        if (docs.length === 0) {
          docs = docs.map((doc) => {
            const newDoc = {};
            path.fields.forEach((field) => (newDoc[field] = doc[field]));
            newDoc.objectID = doc.slug;
            return newDoc;
          });

          const client = algoliasearch(config.appId, config.apiKey);
          const index = client.initIndex(indexName);

          // clear the index in case any documents were removed
          await index.clearObjects();

          const { objectIDs } = await index.saveObjects(docs);
          consola.success(
            `Indexed ${objectIDs.length} records in Algolia for: ${indexName}`
          );
        } else {
          consola.error(`No records found in Nuxt Content for: ${indexName}`);
        }
      }
    });
  },
});
