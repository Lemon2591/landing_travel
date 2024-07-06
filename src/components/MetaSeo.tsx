import Head from "next/head";
export default function MetaSeo(props: any) {
  const urlSeo = "https://culturalvn.com";
  let {
    url,
    type,
    title,
    description,
    image,
    domain,
    card,
    keywords,
    dataSchema,
  } = props;
  if (!url) {
    url = urlSeo;
  }
  if (!type) {
    type = "website";
  }
  if (!title) {
    title = "Visit Vietnam: The Official Tourism Website of Vietnam";
  }
  if (!description) {
    description =
      "Discover the highlights of Vietnam through the country's official tourism website. Plan your trip with advice on Vietnam's best destinations, what to do in Vietnam, visas for Vietnam, where to go in Vietnam, and much more.";
  }
  if (!image) {
    image = `${urlSeo}/assets/img/static/image_a.jpg`;
  }
  if (!domain) {
    domain = "https://culturalvn.com";
  }
  if (!card) {
    card = "summary_large_image";
  }
  if (!keywords) {
    keywords = "vietnam tourism, vietnam travel, vietnam website";
  }
  if (!dataSchema) {
    const data = {
      mainEntityOfPage: "https://culturalvn.com",
      idUrl: "https://culturalvn.com",
      articleSection: "Travel", // Thể loại
      datePublished: "",
      dateModified: "",
    };
    dataSchema = data;
  }

  const schema = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: `${dataSchema.mainEntityOfPage}/#WebPage`,
    "@id": `${dataSchema.idUrl}/#NewsArticle`,
    headline: title,
    name: title,
    description: description,
    articleSection: dataSchema.articleSection,
    inLanguage: "vi,en",
    url: url,
    image: {
      "@context": "http://schema.org",
      "@type": "ImageObject",
      url: image,
      caption: title,
      width: "1200",
      height: "630",
    },
    isPartOf: {
      "@type": "CollectionPage",
      "@id": dataSchema.idUrl,
      name: dataSchema.articleSection,
      abstract: title,
      publisher: { "@id": `${urlSeo}/#Organization` },
    },
    author: {
      "@context": "http://schema.org",
      "@type": "Person",
      "@id": `${urlSeo}#Person`,
      name: "Cultural Viet Nam",
      url: urlSeo,
      worksFor: { "@id": `${urlSeo}/#Organization` },
    },
    datePublished: dataSchema?.datePublished,
    dateModified: dataSchema?.dateModified,
    publisher: { "@id": `${urlSeo}/#Organization` },
    keywords: keywords?.split(","),
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="news_keywords" content={keywords} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="keywords" content={keywords} />
        <meta name="twitter:card" content={card} />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </Head>
    </>
  );
}
