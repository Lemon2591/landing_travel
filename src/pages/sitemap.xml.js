import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "https://culturalvn.com",
    production: "https://culturalvn.com",
  }[process.env.NODE_ENV];

  fs.readdir(__dirname, function (err, files) {
    // handling error
    if (err) {
      return err;
    }
    // listing all files using forEach
    files.forEach(function (file) {
      // Do whatever you want to do with the file
    });
  });

  let staticPages = ["travel", "food", "culture"].map((staticPagePath) => {
    return `${baseUrl}/${staticPagePath}`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${(url || "").replace(".html", "")}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
