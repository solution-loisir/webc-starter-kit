const fs = require("fs");
const path = require("path");
const slug = require("../node_modules/@11ty/eleventy/src/Filters/Slug");
const title = process.argv[2];
const fileName = slug(title);
const filePath = path.join("./src/posts/", fileName + ".md");
const { numericDate } = require("../config/utils/numeric-date");
const data = `---
title: ${title}
description: ""
date: ${numericDate()}
lang: en
published: false
series: false
og_image: ""
og_image_alt: ""
og_image_width: ""
og_image_height: ""
tags: ""
---`;

try {
  fs.accessSync(filePath);
} catch(error) {
  fs.writeFileSync(filePath, data);
  console.log(`Created ${fileName} post!`);
  return; 
};

console.log(`${filePath} already exist.`);