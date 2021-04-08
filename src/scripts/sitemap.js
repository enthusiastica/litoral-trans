const sitemap = require("nextjs-sitemap-generator")

const config = require("../next.config")

const targetDirectory = "out/"

sitemap({
  baseUrl: config.env.domain,
  ignoreIndexFiles: true,
  ignoredPaths: '404',
  pagesDirectory: `${__dirname}/../pages`,
  targetDirectory: targetDirectory,
  sitemapFilename: "sitemap.xml",
})

console.log(`Sitemap generated in ${targetDirectory}`)
