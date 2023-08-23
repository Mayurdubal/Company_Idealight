import Layout from '@/src/layout/Layout';
import dynamic from 'next/dynamic';
const PortfolioGridIsotope = dynamic(() => import('@/src/components/PortfolioGridIsotope'), {
  ssr: false,
});
const PortfolioGrid = ({ hideLayout = false }) => {
  return (
    <Layout noHeaderBg pageName={'Portfolio'} layout={hideLayout}>
      <section className="projects mt-5">
        <div className="container">
          <h2 className="page-title">Featured Projects</h2>
        </div>
      </section>
      <PortfolioGridIsotope />
    </Layout>
  );
};
export default PortfolioGrid;
