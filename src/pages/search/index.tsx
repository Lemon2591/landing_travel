import dynamic from "next/dynamic";
const Search: any = dynamic(() => import("@/components/Search"));
import Layout from "@/components/Layout";
import { KEY } from "../../util/keyInstance";

Search.getLayout = function getLayout(page: any) {
  return (
    <Layout webViewMobile={true} web="search">
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
    const res = await fetch(`${process.env.API_SERVER_URL}/api/get-all-post`, {
      headers: {
        "Content-Type": "application/json",
        key: KEY,
        location: context?.query?.location || "all",
        page: context?.query?.page || 1,
        limit: context?.query?.limit || 10,
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

export default Search;
