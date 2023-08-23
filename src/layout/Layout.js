import Head from 'next/head';
import { Fragment } from 'react';
import ImageView from '../components/ImageView';
import VideoPopup from '../components/VideoPopup';
import Footer from './Footer';
import Header from './Header';
import ScrollTop from './ScrollTop';
const Layout = ({ children, headerExtraClass, noHeaderBg, blackLogo, pageName, layout = false }) => {
  return (
    <Fragment>
      {!layout ? (
        <>
          <Head>
            <title>Idealite | {pageName}</title>
          </Head>
          <VideoPopup />
          <ImageView />
          <Header headerExtraClass={headerExtraClass} noHeaderBg={noHeaderBg} blackLogo={blackLogo} />
          {children}
          <Footer />
          <ScrollTop />
        </>
      ) : (
        <>{children}</>
      )}
    </Fragment>
  );
};
export default Layout;
