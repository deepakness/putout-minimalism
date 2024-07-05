module.exports = {
    eleventyComputed: {
      // This ensures that changes to site.json are immediately reflected
      site: data => data.site
    }
  };