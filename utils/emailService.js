import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { AppStore } from './store';

const initilizeEmailService = () => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
};

const isSubmitting = () => {
  AppStore.update((s) => {
    s.isFormSubmitting = true;
  });
};

const formSubmitted = () => {
  AppStore.update((s) => {
    s.isFormSubmitting = false;
  });
};

const sendEmail = (
  subject,
  fullName,
  message,
  email,
  resetForm,
  quote = false,
  toggleModal
) => {
  emailjs
    .send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      quote
        ? process.env.NEXT_PUBLIC_QUOTE_TEMPLATE_ID
        : process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID,
      {
        subject,
        fullName,
        message,
        email,
      }
    )
    .then(
      (result) => {
        if (result.status === 200) {
          toast.success(
            `${quote ? 'Sucessfully Sent Quote' : 'Sucessfully Sent'} `,
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );

          formSubmitted();
          resetForm();
          quote && toggleModal();
        } else {
          toast.error('Sorry Error Occurred', {
            position: toast.POSITION.TOP_CENTER,
          });

          formSubmitted();
        }
      },
      (eer) => {
        toast.error(
          `${quote ? 'Error Submitting Quote' : 'Error Submitting Form'} `,
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );

        formSubmitted();
        console.log(eer);
      }
    );
};

export { initilizeEmailService, sendEmail, isSubmitting };
