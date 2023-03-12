module.exports = {
  permalink(data) {
    return `blog/${data.pagination.pageNumber ? `page-${data.pagination.pageNumber + 1}/` : ""}`;
  }
};