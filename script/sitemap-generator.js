const fs = require("fs");
const globby = require("globby");

function addPage(page) {
  const path = page
    .replace("src/app", "")
    .replace("page.js", "")
    .replace(".mdx", "")
    .replace("/[apiKey]", "")
    .replace("/[secretKey]", "");
    console.log("page path", path);
  const route = path === "/page" ? "" : path;
  return `  <url>
    <loc>${`https://kashti.com${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    "src/app/**/*{.js,.mdx}",
    "!src/app/_*.js",
    "!src/app/api",
  ]);

  const allPages = [...pages];
  // console.log(pages);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .filter((page) => page !== "src/app/layout.js")
    .map(addPage)
    .join("\n")}
  </urlset>`;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}
generateSitemap();
