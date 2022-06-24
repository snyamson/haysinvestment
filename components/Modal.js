import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import Fade from 'react-reveal/Fade';
import useModal from '../utils/useModal';
import { requestQuoteValidationScheme } from '../utils/validationSchema';
const FormField = dynamic(() => import('./FormField'));

const Modal = () => {
  const [isModalOpen, toggleModal] = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (document.body.classList.contains('modal-open')) {
      document.body.classList.remove('modal-open');
    } else document.body.classList.add('modal-open');
  }, [isModalOpen]);

  // Submitting the form here!
  const onSubmit = (values) => {
    setIsSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <>
      <div className={isModalOpen ? 'modal-backdrop show' : null}></div>
      <Fade top>
        <div
          style={{
            opacity: isModalOpen ? 1 : 0,
            display: isModalOpen ? 'block' : 'none',
            overflowY: isModalOpen ? 'scroll' : null,
          }}
          className="modal "
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalRequestLabel">
                  Request a Quote
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => toggleModal()}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Formik
                  initialValues={{ fullName: '', email: '', message: '' }}
                  validationSchema={requestQuoteValidationScheme}
                  onSubmit={async (values, { resetForm }) => {
                    await onSubmit(values);
                    resetForm();
                  }}
                >
                  {() => (
                    <Form>
                      <FormField
                        label="Full Name"
                        name="fullName"
                        type="text"
                      />
                      <FormField label="Email" name="email" type="text" />
                      <FormField
                        label="Message"
                        name="message"
                        as="textarea"
                        cols="30"
                        rows="7"
                      />
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                          {isSubmitting ? 'Sending' : 'Send Message'}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Modal;
