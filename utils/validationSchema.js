import * as Yup from 'yup';

const requestQuoteValidationScheme = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Full Name must be 5 characters or more')
    .required('Full Name required'),
  email: Yup.string().email('Email is not valid').required('Email required'),
  message: Yup.string('Message cannot be empty')
    .trim()
    .required('Message required'),
});

const contactUsValidationScheme = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Full Name must be 5 characters or more')
    .required('Full Name required'),
  email: Yup.string().email('Email is not valid').required('Email required'),
  subject: Yup.string('Subject cannot be empty')
    .trim()
    .required('Subject required'),
  message: Yup.string('Message cannot be empty')
    .trim()
    .required('Message required'),
});

export { requestQuoteValidationScheme, contactUsValidationScheme };
