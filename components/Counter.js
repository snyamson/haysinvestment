const Counter = () => {
  return (
    <section className="ftco-counter" id="section-counter">
      <div class="container">
        <div className="row py-5">
          <div className="col-md-4 d-flex align-items-center justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number="800">
                  0
                </strong>
                <span>Finished Projects</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number="795">
                  0
                </strong>
                <span>Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center align-item-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number="1200">
                  0
                </strong>
                <span>On Going Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
