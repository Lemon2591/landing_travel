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
  const schema_v1 = {
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

  const dataSchema_v2 = {
    "@context": "http://schema.org",
    "@type": ["Organization", "NewsMediaOrganization"],
    name: title,
    url: urlSeo,
    "@id": `${urlSeo}/#Organization`,
    slogan: title,
    image: image,
    logo: `${urlSeo}/assets/img/favicon/favicon.ico`,
    email: "",
    telephone: "",
    additionalType: "",
    sameAs: ["https://www.facebook.com/profile.php?id=61561475609297"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "",
      addressRegion: "Hà Nội",
      addressCountry: "VN",
      postalCode: "100000",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "",
        contactOption: "TollFree",
        contactType: "customer service",
        areaServed: "",
      },
    ],
  };

  const dataSchema_v3 = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: urlSeo,
        },
      ],
      [
        {
          "@type": "ListItem",
          position: 2,
          name: "Travel",
          item: `${urlSeo}/travel`,
        },
      ],
      [
        {
          "@type": "ListItem",
          position: 3,
          name: "Food",
          item: `${urlSeo}/food`,
        },
      ],
    ],
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
        <link rel="canonical" href={url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema_v1),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dataSchema_v2),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dataSchema_v3),
          }}
        />
      </Head>
    </>
  );
}
