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
  // if(!dataSchema) {
  //   dataSchema?.
  // }
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
        {/* <script
          dangerouslySetInnerHTML={{
            __html: {
              "@context": "http://schema.org",
              "@type": "NewsArticle",
              mainEntityOfPage:
                "https://dantri.com.vn/xa-hoi/da-tim-ra-nguyen-nhan-vu-ngo-doc-banh-mi-o-dong-nai-20240504184156255.htm#WebPage",
              "@id":
                "https://dantri.com.vn/xa-hoi/da-tim-ra-nguyen-nhan-vu-ngo-doc-banh-mi-o-dong-nai-20240504184156255.htm#NewsArticle",
              headline: "Đã tìm ra nguyên nhân vụ ngộ độc bánh mì ở Đồng Nai",
              name: "Đã tìm ra nguyên nhân vụ ngộ độc bánh mì ở Đồng Nai",
              description:
                "(Dân trí) - Kết quả xét nghiệm các mẫu phẩm vụ ngộ độc sau khi ăn bánh mì ở TP Long Khánh cho kết quả nhiễm vi khuẩn Salmonella và E.coli.",
              articleSection: "Xã hội",
              inLanguage: "vi,en",
              url: "https://dantri.com.vn/xa-hoi/da-tim-ra-nguyen-nhan-vu-ngo-doc-banh-mi-o-dong-nai-20240504184156255.htm",
              image: {
                "@context": "http://schema.org",
                "@type": "ImageObject",
                url: "https://cdnphoto.dantri.com.vn/voU9-9_k8kEB-3NsdDusSBMxaaU=/zoom/1200_630/2024/05/07/banhmi1-edited-1715072633927.jpeg",
                caption: "Đã tìm ra nguyên nhân vụ ngộ độc bánh mì ở Đồng Nai",
                width: "1200",
                height: "630",
              },
              isPartOf: {
                "@type": "CollectionPage",
                "@id": "https://dantri.com.vn/xa-hoi.htm",
                name: "Xã hội",
                abstract:
                  "Tin tức, hình ảnh, video, sự kiện Xã hội mới nhất cập nhật liên tục trong ngày",
                publisher: { "@id": "https://dantri.com.vn/#Organization" },
              },
              author: {
                "@context": "http://schema.org",
                "@type": "Person",
                "@id":
                  "https://dantri.com.vn/tac-gia/hoang-binh-3205.htm#Person",
                name: "Hoàng Bình",
                url: "https://dantri.com.vn/tac-gia/hoang-binh-3205.htm",
                worksFor: { "@id": "https://dantri.com.vn/#Organization" },
              },
              datePublished: "2024-05-07T16:22:58+07:00",
              dateModified: "2024-05-07T16:22:58+07:00",
              publisher: { "@id": "https://dantri.com.vn/#Organization" },
              keywords: [
                "Xã hội",
                "Tin nóng",
                "ngộ độc",
                "long khánh",
                "bánh mỳ",
              ],
            },
          }}
        /> */}
      </Head>
    </>
  );
}
