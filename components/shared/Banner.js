import Link from 'next/link';

const Banner = ({ backgroundImage, currentPage, title }) => {
  return (
    <section
      className="hero-wrap"
      style={{
        backgroundImage: 'url(/images/bg_2.jpg)',
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div
          className="row no-gutters text align-items-end justify-content-center"
          data-scrollax-parent="true"
        >
          <div className="col-md-8 ftco-animate text-center">
            <p className="breadcrumbs">
              <span className="mr-2">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </span>
              <span>{currentPage}</span>
            </p>
            <h1 className="mb-5 bread">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
