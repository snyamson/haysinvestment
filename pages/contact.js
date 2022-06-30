import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Formik, Form } from 'formik';
import { contactUsValidationScheme } from '../utils/validationSchema';
import { AppStore } from '../utils/store';
import { sendEmail, isSubmitting } from '../utils/emailService';

const Banner = dynamic(() => import('../components/shared/Banner'));
const FormField = dynamic(() => import('../components/FormField'));

const Contact = () => {
  const isFormSubmitting = AppStore.useState((s) => s.isFormSubmitting);

  const onSubmit = ({ subject, fullName, message, email }, resetForm) => {
    isSubmitting();
    sendEmail(subject, fullName, message, email, resetForm);
  };

  return (
    <>
      <Head>
        <title> Contact | Hays Investment Limited</title>
      </Head>

      {/* Banner */}
      <Banner currentPage="Contact" title="Contact Us" />

      {/* Our Contact Info */}
      <section className="ftco-section contact-section">
        <div className="container mt-5">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Contact Information</h2>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3">
              <p>
                <span>ADDRESS:</span> 198 West 21th Street, Suite 721 New York
                NY 10016
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>PHONE:</span>
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>EMAIL:</span>
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>DIGITAL ADDRESS:</span>
                <a>Digital addess of the Company</a>
              </p>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 pr-md-5">
              <Formik
                initialValues={{
                  fullName: '',
                  email: '',
                  subject: '',
                  message: '',
                }}
                validationSchema={contactUsValidationScheme}
                onSubmit={async (values, { resetForm }) => {
                  await onSubmit(values, resetForm);
                }}
              >
                {() => (
                  <Form>
                    <FormField
                      name="fullName"
                      type="text"
                      placeholder="Your Name"
                    />
                    <FormField
                      name="email"
                      type="text"
                      placeholder="Your Email"
                    />
                    <FormField
                      name="subject"
                      type="text"
                      placeholder="Your Subject"
                    />
                    <FormField
                      name="message"
                      as="textarea"
                      placeholder="Message"
                      cols="30"
                      rows="7"
                    />
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary py-3 px-5"
                      >
                        {isFormSubmitting ? 'Sending' : 'Send Message'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="col-md-6" id="map"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
