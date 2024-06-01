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


export async function getServerSideProps(context : any) {
  
  
  try {
      return {
        props: {
          data: ""
        }
      }
  } catch (error) {
      
      return {
          notFound: true,
      };
  }

}

export default AllPost;
