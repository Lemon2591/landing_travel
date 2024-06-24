import Head from "next/head";
export default function MetaSeo(props: any) {
  const urlSeo = "https://culturalvn.com";
  let { url, type, title, description, image, domain, card, keywords } = props;
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
      </Head>
    </>
  );
}
