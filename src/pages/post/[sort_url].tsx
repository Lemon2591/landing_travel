import dynamic from "next/dynamic";
const Post: any = dynamic(() => import("@/components/PostCategory/Post"));
import Layout from "@/components/Layout";

Post.getLayout = function getLayout(page: any) {
  return (
    <Layout webViewMobile={true} web="post">
      {page}
    </Layout>
  );
};

export default Post;

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
    const res = await fetch(`${process.env.API_SERVER_URL}/api/get-post`, {
      headers: {
        "Content-Type": "application/json",
        slug: context.params.sort_url,
        category_id: context?.query?.category,
        key_w: `${process.env.NEXT_PUBLIC_API_KEY_WEB}`,
      },
    });
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
