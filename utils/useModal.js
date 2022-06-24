import { AppStore } from './store';

const useModal = () => {
  const isModalOpen = AppStore.useState((s) => s.isModalOpen);
  const toggleModal = () =>
    AppStore.update((s) => {
      s.isModalOpen = !s.isModalOpen;
    });

  return [isModalOpen, toggleModal];
};

export default useModal;
