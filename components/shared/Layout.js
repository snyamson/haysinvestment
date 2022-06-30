import dynamic from 'next/dynamic';
import { AppStore } from '../../utils/store';
import Modal from '../Modal';

const Navigation = dynamic(() => import('./Navigation'));
const Footer = dynamic(() => import('./Footer'));
const Brand = dynamic(() => import('./Brand'));
const Loader = dynamic(() => import('../Loader'));
const LightBox = dynamic(() => import('../LightBox'));

const Layout = ({ children }) => {
  const clickedImage = AppStore.useState((s) => s.clickedImage);
  return (
    <>
      <div className="page">
        {/* Navigation */}
        <Navigation />

        <div id="colorlib-page">
          {/* Brand */}
          <Brand />

          {/* Children */}
          {children}

          {/* Footer */}
          <Footer />
        </div>

        {/* Modal */}
        <Modal />

        {/* LightBox */}
        {clickedImage && <LightBox />}

        {/* Loader */}
        <Loader />
      </div>
    </>
  );
};

export default Layout;
