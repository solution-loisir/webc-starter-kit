module.exports = function() {
  return {
    layout: "article.webc",
    permalink: (data) => process.env.ELEVENTY_RUN_MODE === "build" && !data.published ? false : `posts/${data.page.fileSlug}/`
  };
};