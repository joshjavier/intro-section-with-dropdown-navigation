module.exports = function(eleventyConfig) {
  // Copy images and css files to the output folder
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/css')

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
