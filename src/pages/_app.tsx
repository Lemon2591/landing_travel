import "../../assets/css/theme.css";
import "../../assets/css/base.css";
import "../../assets/css/main.css";
import "../../assets/css/responsive.css";
import "../../assets/css/post.css";
import "../../assets/css/tiny.css";
import "../../assets/css/404.css";
import "aos/dist/aos.css";
import Layout from "../components/Layout";
import "lazysizes";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
