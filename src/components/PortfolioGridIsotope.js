import Isotope from 'isotope-layout';
import { useCallback, useEffect, useRef, useState } from 'react';

const data = [
  {
    id: 1,
    title: 'Tamohara',
    category: 'Finance',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Finance',
    caseStuday: 1,
    img: 'assets/img/portfolio-1.jpg',
  },
  {
    id: 2,
    title: 'Designer Watches LLP',
    category: 'Inventory Management',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Systems',
    caseStuday: 2,
    img: 'assets/img/portfolio-1.jpg',
  },
  {
    id: 3,
    title: 'UK Post Office',
    category: 'Govt',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Govt',
    caseStuday: 3,
    img: 'assets/img/portfolio-1.jpg',
  },
  {
    id: 4,
    title: 'Nike',
    category: 'Inventory Management',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Systems',
    caseStuday: 4,
    img: 'assets/img/portfolio-1.jpg',
  },
  {
    id: 5,
    title: 'Bartleby',
    category: 'Education',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Education',
    caseStuday: 5,
    img: 'assets/img/portfolio-1.jpg',
  },
  {
    id: 6,
    title: 'Qritive',
    category: 'Healthcare',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Healthcare',
    caseStuday: 6,
    img: 'assets/img/portfolio-1.jpg',
  },
  {
    id: 7,
    title: 'Optum + UHC',
    category: 'Healthcare',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Healthcare',
    caseStuday: 7,
    img: 'assets/img/portfolio-1.jpg',
  },
  {
    id: 8,
    title: 'LoFoods',
    category: 'Healthcare',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Healthcare',
    caseStuday: 8,
    img: 'assets/img/portfolio-1.jpg',
  },
  {
    id: 9,
    title: 'Alphacoach',
    category: 'Healthcare',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Healthcare',
    caseStuday: 9,
    img: 'assets/img/portfolio-1.jpg',
  },
  {
    id: 10,
    title: 'Bhavyata Foundation',
    category: 'NGO',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'NGO',
    caseStuday: 10,
    img: 'assets/img/portfolio-1.jpg',
  },
  {
    id: 11,
    title: 'LeMark Education',
    category: 'Education',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Education',
    caseStuday: 11,
    img: 'assets/img/portfolio-1.jpg',
  },
];

const PortfolioGridIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState('*');
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope('.grid', {
        itemSelector: '.col-lg-4',
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: '.col-lg-4',
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === '*' ? isotope.current.arrange({ filter: `*` }) : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? 'active-work is-checked' : '');

  return (
    <section className="projects pt-30">
      <div className="container">
        <div className="row">
          <div className="portfolios">
            <div className="filters portfolio-controllers-container">
              <div
                className=" portfolio-controllers wow fadeLeft button-group js-radio-button-group"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                data-filter-group="color"
              >
                <button type="button" className={`c-pointer ${activeBtn('*')}`} onClick={handleFilterKeyChange('*')} data-filter>
                  All (11)
                </button>
                <button type="button" className={`c-pointer ${activeBtn('Education')}`} onClick={handleFilterKeyChange('Education')} data-filter=".Education">
                  Education (2)
                </button>
                <button
                  type="button"
                  className={`c-pointer ${activeBtn('Healthcare')}`}
                  onClick={handleFilterKeyChange('Healthcare')}
                  data-filter=".Healthcare"
                >
                  Healthcare (4)
                </button>
                <button type="button" className={`c-pointer ${activeBtn('Govt')}`} onClick={handleFilterKeyChange('Govt')} data-filter=".Govt">
                  Govt (1)
                </button>
                <button type="button" className={`c-pointer ${activeBtn('Finance')}`} onClick={handleFilterKeyChange('Finance')} data-filter=".Finance">
                  Finance (1)
                </button>
                <button type="button" className={`c-pointer ${activeBtn('Systems')}`} onClick={handleFilterKeyChange('Systems')} data-filter=".Systems">
                  Management Systems (2)
                </button>
                <button type="button" className={`c-pointer ${activeBtn('NGO')}`} onClick={handleFilterKeyChange('NGO')} data-filter=".NGO">
                  NGO (1)
                </button>
              </div>
            </div>
            <div className="grid row align-items-center">
              {data.map((portfolio) => (
                <div className={`col-lg-4 col-md-6 col-sm-6 portfolio-img ${portfolio.filter}`} key={portfolio.id}>
                  <div className="portfolio-detail">
                    <div className="portfolio-img hoverstyle">
                      <figure>
                        <a href="portfolio-single-v2.html">
                          <img className="w-100" alt={portfolio.title} src={portfolio.img} />
                        </a>
                      </figure>
                      <h3>
                        <a href="portfolio-single-v2.html">{portfolio.title}</a>
                      </h3>
                      <span className="txt-green">{portfolio.category}</span>
                      <span>{portfolio.desc}</span>
                      <span className="d-flex align-items-center pt-10">
                        <a href={`portfolio/${portfolio.id}`} className="d-flex font-14" style={{ color: '#25B9BE' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                              d="M3.75 17.5C3.41667 17.5 3.125 17.375 2.875 17.125C2.625 16.875 2.5 16.5833 2.5 16.25V3.75C2.5 3.41667 2.625 3.125 2.875 2.875C3.125 2.625 3.41667 2.5 3.75 2.5H13.375L17.5 6.625V16.25C17.5 16.5833 17.375 16.875 17.125 17.125C16.875 17.375 16.5833 17.5 16.25 17.5H3.75ZM3.75 16.25H16.25V7.32144H12.6875V3.75H3.75V16.25ZM5.8125 13.9375H14.1875V12.6875H5.8125V13.9375ZM5.8125 7.3125H10V6.0625H5.8125V7.3125ZM5.8125 10.625H14.1875V9.375H5.8125V10.625Z"
                              fill="#25B9BE"
                            />
                          </svg>{' '}
                          &nbsp;View Case Study
                        </a>
                        <a href={`portfolio/${portfolio.caseStuday}`} className="font-14 pl-25 txt-green">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                              d="M6.95817 17.5V16.25H8.74984V14.1667H2.9165C2.58317 14.1667 2.2915 14.0417 2.0415 13.7917C1.7915 13.5417 1.6665 13.25 1.6665 12.9167V3.75C1.6665 3.41667 1.7915 3.125 2.0415 2.875C2.2915 2.625 2.58317 2.5 2.9165 2.5H17.0832C17.4165 2.5 17.7082 2.625 17.9582 2.875C18.2082 3.125 18.3332 3.41667 18.3332 3.75V12.9167C18.3332 13.25 18.2082 13.5417 17.9582 13.7917C17.7082 14.0417 17.4165 14.1667 17.0832 14.1667H11.2498V16.25H13.0415V17.5H6.95817ZM2.9165 12.9167H17.0832V3.75H2.9165V12.9167Z"
                              fill="#038956"
                            />
                          </svg>{' '}
                          Visit Website
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioGridIsotope;
