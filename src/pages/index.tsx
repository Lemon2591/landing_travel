import dynamic from "next/dynamic";
const Home: any = dynamic(() => import("@/components/Home/Home"));
import Layout from "@/components/Layout";


Home.getLayout = function getLayout(page: any) {
  return (
    <Layout webViewMobile={true} web="home">
      {page}
    </Layout>
  );
};

export default Home;
