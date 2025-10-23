import Head from "next/head";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import Loading from "@/components/Loading";

NProgress.configure({ showSpinner: false });

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setLoading(true);
    };
    const handleStop = () => {
      NProgress.done();
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  const getLayout = Component.getLayout || ((page) => page);
  const page = getLayout(<Component {...pageProps} />);

  return (
    <>
      <Head>
        <title key="title">
          Qatar Visa Status Check Online | Check MOI Qatar Visa Status Online
        </title>
        <meta
          key="description"
          name="description"
          content="Easily check your MOI Qatar visa status online in 2025. Get real-time updates on visa approval, renewal, and cancellation using your passport or visa number. Fast and secure!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Qatar visa status, check Qatar visa, visa tracking Qatar, visa approval Qatar, Qatar visa renewal, Qatar visa cancellation, online visa status Qatar"
        />
        <meta
          key="og-title"
          property="og:title"
          content="Qatar Visa Status Online 2025 - MOI Qatar Visa Status Online"
        />
        <meta
          key="og-desciption"
          property="og:description"
          content="Easily check your Qatar visa status online in 2025. Get real-time updates on visa approval, renewal, and cancellation using your passport or visa number. Fast and secure!"
        />
        <meta
          key="og-img"
          property="og:image"
          content="https://qatarvisastatus.com/qatar-visa-status.png"
        />
        <meta
          key="og-url"
          property="og:url"
          content="https://qatarvisastatus.com"
        />
        <meta key="og-type" property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Qatar Visa Status Online 2025 - MOI Qatar Visa Status Online"
        />
        <meta
          name="twitter:description"
          content="Easily check your Qatar visa status online in 2025. Get real-time updates on visa approval, renewal, and cancellation using your passport or visa number. Fast and secure!"
        />
        <meta name="twitter:url" content="https://qatarvisastatus.com" />
        <meta
          name="twitter:image"
          content="https://qatarvisastatus.com/qatar-visa-status.png"
        />
      </Head>
      {loading && <Loading />}
      <Layout>{page}</Layout>
    </>
  );
}
