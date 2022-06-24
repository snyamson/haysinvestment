const About = () => {
  return (
    <section className="ftco-counter" id="section-counter">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-7 py-sm-3 py-md-5">
            <div className="row py-5">
              <h1
                className="text-uppercase font-weight-bold"
                style={{
                  color: '#8bc53f',
                }}
              >
                About hays investment
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eveniet itaque dolores, reiciendis mollitia corrupti
                ea enim officia, inventore neque, quo blanditiis quia nemo
                laudantium. Magnam quasi quos tenetur ratione. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Explicabo eveniet
                itaque dolores, reiciendis mollitia corrupti ea enim officia,
                inventore neque, quo blanditiis quia nemo laudantium. Magnam
                quasi quos tenetur ratione.
              </p>
              {/* <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="800">
                      0
                    </strong>
                    <span>Finished Projects</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="795">
                      0
                    </strong>
                    <span>happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="1200">
                      0
                    </strong>
                    <span>Working Hours</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="850">
                      0
                    </strong>
                    <span>Cups of coffee</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div
            className="col-md-5 d-flex justify-content-center align-items-center img exp"
            style={{
              backgroundImage: 'url(/images/image_1.jpg)',
            }}
          >
            <p>
              <a href="#" className="btn btn-white px-5 py-4">
                Explore Further
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
