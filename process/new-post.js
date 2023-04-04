const fs = require("fs");
const path = require("path");
const slug = require("../node_modules/@11ty/eleventy/src/Filters/Slug");
const title = process.argv[2];
const fileName = slug(title);
const filePath = path.join("./src/posts/", fileName + ".md");
const { formatDateLocal } = require("../config/utils/format-date");
const data = `---
title: ${title}
description: ""
date: ${formatDateLocal("YYYY-MM-DD")}
lang: en
published: false
series: ""
toc: false
og_image: ""
og_image_alt: ""
og_image_width: ""
og_image_height: ""
tags: ""
---
<auto-toc></auto-toc>

`;

try {
  fs.accessSync(filePath);
} catch(error) {
  fs.writeFileSync(filePath, data);
  console.log(`Created ${fileName} post!`);
  return; 
};

console.log(`${filePath} already exist.`);