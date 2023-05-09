# webc-starter-kit
A starter project for [Eleventy](https://www.11ty.dev/) (11ty) using [WebC](https://www.11ty.dev/docs/languages/webc/) as a main template langage. Also includes opiniated assets processing and a few more bells and whistles.

This is really a blog stater project, but can be adapted to other means. I entend to use this as a base for my futur projects.

## How to use
Webc starter kit is a template repository. The "Use this template" button can be used to create a new repo with the same structure (recommended). [More details](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template). When this is done:

1. Clone the newly created repo.
2. Navigate to the directory.
3. Install dependencies.
4. Run one of these command.
    * Local developpment: `npm start`.
    * [Netlify cli](https://www.netlify.com/products/cli/): `npm run dev`.
    * Build for production: `npm run build`.
    * Remove *_site* and start fresh: `npm run clean`.
    * Debug: `npm run debug`.
    * Generate favicons from an image: `npm run generate-favicons`.
    * Create a new post template: `npm run new-post "My Title"`.

## Features
* RSS feed through Atom.
* Sitemap with *robot.txt* pointing to it.
* Site manifest.
* Tags pages.
* Series for posts.
* Table of contents for posts.
* Back to top button.
* UNSTABLE: draft feature for posts. This feature prevents production build to complete. See [#59](https://github.com/11ty/eleventy-plugin-webc/issues/59).
* JS pipeline with [esbuild](https://esbuild.github.io/).
* CSS pipeline with [Lightning CSS](https://lightningcss.dev/).
* Image optimization with [eleventy-img](https://www.11ty.dev/docs/plugins/image/).
* [Serverless](https://www.11ty.dev/docs/plugins/serverless/): uncomment in config file to use.
* Custom 404 page at the root. May require specific integration depending on your hosting setup/platform.
* Already setup for [Netlify dev](https://www.netlify.com/products/cli/) and specific configuration through *netlify.toml*.
* Automation for favicons and new post generation.
* Minifying HTML, CSS and JavaScript in production.
* Comprehensive meta data file to configure site's parameters in one place.

## Site's meta data
Located in *src/_data/meta.js*. Exports an object used to set defaults and configure functional templates (sitemap, RSS, etc.).

## Components
Most components live in the *src/_components* directory. These are authored components and are globally available. There are a few external components as well which are also made globally available through *eleventy.config.js*.
### author-picture.webc
* Output: `<picture>` or `<img>`
* Attributes: any compatible with `<img>` (public)
* Details: uses <[eleventy-image](https://github.com/11ty/eleventy-img/blob/main/eleventy-image.webc)> to process `src`. Any public attributes will be added to the output. `width`, `sizes`, `class="image"` and `decoding="async"` are preset. Outputs `avif`, `webp` and `jpeg` formats to *_site/images*. Used in article.
* Usage: 
```html
<author-picture 
  :src="$data.author_image" 
  :alt="$data.author_image_alt"
  loading="lazy"
>
</author-picture>
```

### image-md.webc
* Output: `<picture>` or `<img>`
* Attributes: any compatible with `<img>` (public)
* Details: same as *author-picture.webc*, but with different configuration `width` and `sizes`. Generally used troughout the site.
* Usage:
```html
<image-md src="https://apod.nasa.gov/apod/image/2208/StargateMilkyWay_Oudoux_1800.jpg" alt="Spectacular night sky from the Nasa showing the milkyway" loading="lazy"></image-md>
```
### auto-toc.webc
* ouput:
```html
<details class="contents">
  <summary class="bold">Contents</summary>
  <nav class="auto-toc">
    <ul>
      <li><a href="#my-title">My Title</a>
        <ul>
          <li><a href="#my-other-title">My Other Title</a></li>
        </ul>
      </li>
      ...
    </ul>
  </nav>
</details>
```
* Attributes:
    * `open`: used with a thruty value, it will set the boolean `open` attribute on the `details` element. [Read more about the open attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#attributes).
* Details: uses [markdown-it-toc-done-right](https://github.com/nagaozen/markdown-it-toc-done-right#readme) under the hood. Works only in markdown files.
* Usage:
```html
<auto-toc open="true"></auto-toc>
```
### copy-right.webc


## Pages
Pages are located in the *pages* directory. Excepting the "Home" page, all pages are remapped to project's root and inherit from the *page.webc* layout. The *home.webc* page is remapped to project's root index. The following properties may be defined in front matter:
* `title` -> document title and first heading (`<h1>`).
* `description` -> document description.
* `lang` -> `<html>`'s `lang` attribute value.
* `navigation` -> Object. Takes an `order` (number) and a `label` (string) properties which defines ordering and text display in site's main navigation. 

## Config: `eleventy.config.js`
The *eleventy.config.js* config file is located at the project's root. The config file uses the `addPlugin` method to import the different parts of configuration which all lives in the *config* folder (except for external plugins). Here's a sample of the config object.
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
Contains every `.md` files living in the *posts* directory. Reversed order. Intended for blog posts.
### `pages` collection
Contains every `.webc` files living in the *pages* directory. Ordered ascending by the `navigation.order` property. These represents the pages of the site.
### `series` collection
Consist of an object containing all series grouped by name. Only markdown file inside of the *posts* directory and containig a `series` property with a string value (the name of the series). Falsy values will be exluded.
### `tags` collection
A deduplicated list of all posts tags. Used to generate tags pages.
## Generator scripts
Located in the *process* directory. These are utility node scripts

Work in progress...