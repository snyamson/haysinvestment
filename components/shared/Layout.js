import dynamic from 'next/dynamic';
import Modal from '../Modal';

const Navigation = dynamic(() => import('./Navigation'));
const Footer = dynamic(() => import('./Footer'));
const Brand = dynamic(() => import('./Brand'));
const Loader = dynamic(() => import('../Loader'));

const Layout = ({ children }) => {
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

        {/* Loader */}
        <Loader />
      </div>
    </>
  );
};

export default Layout;
