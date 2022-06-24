const Testimonial = () => {
  return (
    <section className="testimony-section">
      <div className="container">
        <div className="row d-md-flex">
          <div className="col-md-4 last-order d-md-flex align-items-start heading-section aside-stretch ftco-animate">
            <div style={{ background: '#026161', color: '#fff' }}>
              <h2 className="mb-4">Clients Says</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia
              </p>
            </div>
          </div>
          <div className="col-md-8 first-order ftco-animate">
            <div className="carousel-testimony owl-carousel">
              <div className="item">
                <div className="testimony-wrap text-center">
                  <div
                    className="user-img mb-5"
                    style={{
                      backgroundImage: 'url(/images/person_1.jpg)',
                    }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Architect</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center">
                  <div
                    className="user-img mb-5"
                    style={{
                      backgroundImage: 'url(/images/person_2.jpg)',
                    }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Architect</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center">
                  <div
                    className="user-img mb-5"
                    style={{
                      backgroundImage: 'url(/images/person_3.jpg)',
                    }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Architect</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center">
                  <div
                    className="user-img mb-5"
                    style={{
                      backgroundImage: 'url(/images/person_4.jpg)',
                    }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
