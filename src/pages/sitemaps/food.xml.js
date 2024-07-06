import { KEY } from "../../util/keyInstance";
const Sitemap = () => {};

export const getServerSideProps = async ({ query, res, resolvedUrl }) => {
  const baseUrl = {
    development: "https://culturalvn.com",
    production: "https://culturalvn.com",
  }[process.env.NODE_ENV];

  const res_data = await fetch(
    `${process.env.API_SERVER_URL}/api/get-feature-post`,
    {
      headers: {
        "Content-Type": "application/json",
        key: KEY,
        location: query?.location || "all",
        category: resolvedUrl?.replace("/", ""),
      },
    }
  );
  const obj = await res_data.json();

  if (!obj || obj.code !== 200) {
    return {
      notFound: true,
    };
  }

  let staticPages = data.data.map((item) => {
    return `${baseUrl}/food/${item.slug}`;
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
