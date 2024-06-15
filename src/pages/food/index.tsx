import dynamic from "next/dynamic";
const AllPost: any = dynamic(() => import("@/components/PostCategory"));
import Layout from "@/components/Layout";

AllPost.getLayout = function getLayout(page: any) {
  return (
    <Layout webViewMobile={true} web="all-post">
      {page}
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  if (
    context &&
    context.query &&
    Object.keys(context.query).includes("_escaped_fragment_") &&
    context.query._escaped_fragment_.length > 1
  ) {
    context.res.statusCode = 302;
    context.res.setHeader("Location", `/`);
    return {
      notFound: true,
    };
  }

  try {
    const res = await fetch(
      `${process.env.API_SERVER_URL}/api/get-feature-post`,
      {
        headers: {
          "Content-Type": "application/json",
          key_w: `${process.env.NEXT_PUBLIC_API_KEY_WEB}`,
          location: context?.query?.location || "all",
          category: context?.resolvedUrl?.replace("/", ""),
        },
      }
    );
    const obj = await res.json();
    if (!obj || obj.statusCode !== 200) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data: obj?.data,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
export default AllPost;
