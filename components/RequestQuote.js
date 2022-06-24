import useModal from '../utils/useModal';

const RequestQuote = () => {
  const [isModalOpen, toggleModal] = useModal();
  return (
    <section className="ftco-quote ftco-animate">
      <div className="container">
        <div className="row d-flex justify-content-end">
          <div
            className="col-md-7 req-quote d-md-flex py-5 align-items-center img"
            style={{
              backgroundImage: 'url(/images/bg_1.jpg)',
            }}
          >
            <h3 className=" ml-md-3">Get started</h3>
            <p>
              <a
                className="btn btn-white py-4 px-4"
                data-toggle="modal"
                data-target="#modalRequest"
                onClick={() => toggleModal()}
              >
                Request a quote
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;
