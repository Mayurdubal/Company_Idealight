import Preloader from '@/src/layout/Preloader';
import '@/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

import { Fragment, useEffect, useState } from 'react';
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="assets/img/logo-icon.png" />
        {/* CSS only */}
        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
        {/* Font Awesome 6 */}
        <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/swiper.css" />
        {/* style */}
        <link rel="stylesheet" href="assets/css/style.css" />
        {/* responsive */}
        <link rel="stylesheet" href="assets/css/responsive.css" />
        {/* color */}
        <link rel="stylesheet" href="assets/css/color.css" />
        <title>Idealite</title>
      </Head>
      <Preloader />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      {!loader && <Component {...pageProps} />}
    </Fragment>
  );
};
export default App;
