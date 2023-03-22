const { favicons } = require("favicons");
const fs = require("fs/promises");
const path = require("path");
const meta = require("../src/_data/meta");

const source = meta.favicon.source;

const configuration = {
  path: meta.favicon.temp
};

(async function generateFavicons() {
  const response = await favicons(source, configuration);
  await fs.mkdir(configuration.path, { recursive: true });

  await Promise.all(
    response.images.map(async (image) => {
      switch(image.name) {
        case "favicon.ico":
        case "favicon-32x32.png":
        case "android-chrome-192x192.png":
        case "android-chrome-512x512.png":
        case "apple-touch-icon-180x180.png":
          await fs.writeFile(path.join(configuration.path, image.name), image.contents);
      }
    })
  );
  console.log(`Favicons have been generated to ${configuration.path}!`);
})();