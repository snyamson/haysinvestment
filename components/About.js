const About = () => {
  return (
    <section className="ftco-counter" id="section-counter">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-7 py-sm-3 py-md-5">
            <div className="row py-5 px-3 pr-lg-5 pr-md-3">
              <h1
                className="text-uppercase font-weight-bold text-center text-lg-left"
                style={{
                  color: '#8bc53f',
                }}
              >
                About hays investment
              </h1>
              <p className="text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eveniet itaque dolores, reiciendis mollitia corrupti
                ea enim officia, inventore neque, quo blanditiis quia nemo
                laudantium. Magnam quasi quos tenetur ratione. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Explicabo eveniet
                itaque dolores, reiciendis mollitia corrupti ea enim officia,
                inventore neque, quo blanditiis quia nemo laudantium. Magnam
                quasi quos tenetur ratione.
              </p>
            </div>
          </div>
          <div
            className="col-md-5 d-flex justify-content-center align-items-center img exp"
            style={{
              backgroundImage: 'url(/images/image_1.jpg)',
            }}
          >
            <p>
              <a href="/about" className="btn btn-white px-5 py-4">
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
