import { Store } from 'pullstate';

export const AppStore = new Store({
  isModalOpen: false,
  isFormSubmitting: false,
  isContactFormSubmitting: false,
  isQuoteFormSubmitting: false,
});
