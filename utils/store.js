import { Store } from 'pullstate';

export const AppStore = new Store({
  isModalOpen: false,
  isFormSubmitting: false,
  clickedImage: null,
  currentIndex: null,
});
