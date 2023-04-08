# webc-starter-kit
A starter project for [Eleventy](https://www.11ty.dev/) (11ty) using [WebC](https://www.11ty.dev/docs/languages/webc/) as a main template langage. Also includes opiniated assets processing and a few more bells and whistles.

This is really a blog stater project, but can be adapted to other means. I entend to use this as a base for my futur projects.

## Use as a template
Webc starter kit is a template repository. The "Use this template" button can be used to create a new repo with the same structure (recommended). [More details](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Features
* RSS feed through Atom.
* Sitemap with `robot.txt` pointing to it.
* Site manifest.
* Tags pages
* `no-js` class strategy for progressive enhancement.
* Series for posts.
* Table of contents for posts.
* UNSTABLE: draft feature for posts. This feature prevents production build to complete. See [#59](https://github.com/11ty/eleventy-plugin-webc/issues/59).
* JS pipeline with [esbuild](https://esbuild.github.io/).
* CSS pipeline with [Lightning CSS](https://lightningcss.dev/).
* Image optimization with [eleventy-img](https://www.11ty.dev/docs/plugins/image/).
* [Serverless](https://www.11ty.dev/docs/plugins/serverless/): uncomment in config file to use.
* Custom 404 page at the root. May require specific integration depending on your hosting setup/platform.
* Already setup for [Netlify dev](https://www.netlify.com/products/cli/) and specific configuration through `netlify.toml`.
* Automation for favicons and new post generation.
* Minifying HTML, CSS and JavaScript in production.
* Comprehensive meta data file to configure site's parameters in one place.

## Site's meta data
Located in *src/_data/meta.js*. Exports an object used to set defaults and configure functional templates (sitemap, RSS, etc.).

## Pages
Pages are located in the `pages` directory. Excepting the "Home" page, all pages are remapped to project's root and inherit from the `page` layout. The "Home" page is remapped to project's root index. The following properties may be defined in front matter:
* `title` -> document title and first heading (`<h1>`).
* `description` -> document description.
* `lang` -> `<html>`'s `lang` attribute value.
* `navigation` -> Object. Takes an `order` (number) and a `label` (string) properties which defines ordering and text display in site's main navigation. 

## Config: `eleventy.config.js`
The `eleventy.config.js` config file is located at the project's root. The config file uses the `addPlugin` method to import the different parts of configuration which all lives in the `config` folder (except for external plugins). Here's a sample of the config object.
```js
return {
  dir: {
    input: "src",
    output: "_site",
    includes: "_includes",
    layouts: "_layouts",
    data: "_data"
  },
  pathPrefix: "/",
  htmlTemplateEngine: "webc",
  markdownTemplateEngine: "webc",
  templateFormats: ["njk", "liquid", "html", "md", "11ty.js", "webc"]
};
```
## Plugins
Webc starter kit uses several plugins.
### Official plugins
* [eleventy-plugin-rss](https://www.11ty.dev/docs/plugins/rss/)
* [eleventy-plugin-syntaxhighlight](https://www.11ty.dev/docs/plugins/syntaxhighlight/)
* [eleventy-plugin-webc](https://www.11ty.dev/docs/languages/webc/)
* [eleventy-img](https://www.11ty.dev/docs/plugins/image/)
* [eleventy-serverless](https://www.11ty.dev/docs/plugins/serverless/)
### Markdown plugins
* [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
* [markdown-it-toc-done-right](https://www.npmjs.com/package/markdown-it-toc-done-right)
* [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
* [markdown-it-eleventy-img](https://www.npmjs.com/package/markdown-it-eleventy-img)
## Collections
Collections included in Webc starter kit.
### `posts` collection
Contains every `.md` files living in the `posts` directory. Reversed order. Intended for blog posts.
### `pages` collection
Contains every `.webc` files living in the `pages` directory. Ordered ascending by the `navigation.order` property. These represents the pages of the site.
### `series` collection
Consist of an object containing all series grouped by name. Only markdown file inside of the `posts` directory and containig a `series` property with a string value (the name of the series). Falsy values will be exluded.
### `tags` collection
A deduplicated list of all posts tags. Used to generate tags pages.
## Generator scripts
Located in the `process` directory. These are utility node scripts

Work in progress...