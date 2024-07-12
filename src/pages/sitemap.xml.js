const Sitemap = () => {};
import { KEY } from "../util/keyInstance";

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "https://culturalvn.com",
    production: "https://culturalvn.com",
  }[process.env.NODE_ENV];

  const res_data = await fetch(
    `${process.env.API_SERVER_URL}/api/get-all-post`,
    {
      headers: {
        "Content-Type": "application/json",
        key: KEY,
        location: "all",
      },
    }
  );
  const obj = await res_data.json();

  if (!obj || obj.statusCode !== 200) {
    return {
      notFound: true,
    };
  }

  let pages = obj.data.data.map((item) => {
    return item?.url;
  });
  let staticHome = ["travel", "food", "culture", "search"].map(
    (staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    }
  );

  let staticPages = [...staticHome, ...pages];
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
