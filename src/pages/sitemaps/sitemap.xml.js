import { KEY } from "../../util/keyInstance";
const Sitemap = () => {};

export const getServerSideProps = async ({ query, res, resolvedUrl }) => {
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

  let staticPages = obj.data.data.map((item) => {
    return item?.url;
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
