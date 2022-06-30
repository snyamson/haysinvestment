import Head from 'next/head';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/shared/Layout';
import { initilizeEmailService } from '../utils/emailService';

// Root StyleSheet
import '../public/css/open-iconic-bootstrap.min.css';
import '../public/css/animate.css';
import '../public/css/owl.carousel.min.css';
import '../public/css/owl.theme.default.min.css';
import '../public/css/magnific-popup.css';
import '../public/css/aos.css';
import '../public/css/ionicons.min.css';
import '../public/css/bootstrap-datepicker.css';
import '../public/css/jquery.timepicker.css';
import '../public/css/flaticon.css';
import '../public/css/icomoon.css';
import '../public/css/style.css';
import '../styles/nprogress.css';
import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
//import('../public/js/owl.carousel.min.js');

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //Initialize EmailJS
    initilizeEmailService();

    import('../public/js/jquery.min.js');
    //import('../public/js/jquery-migrate-3.0.1.min.js');
    import('../public/js/popper.min.js');
    //import('../public/js/bootstrap.min.js');
    import('../public/js/jquery.easing.1.3.js');
    import('../public/js/jquery.waypoints.min.js');
    //import('../public/js/jquery.stellar.min.js');
    import('../public/js/owl.carousel.min.js');
    //import('../public/js/jquery.magnific-popup.min.js');
    import('../public/js/jquery.animateNumber.min.js');
    import('../public/js/scrollax.min.js');
    import('../public/js/bootstrap-datepicker.js');
    import('../public/js/jquery.timepicker.min.js');
    import('../public/js/main.js');
  }, []);

  return (
    <>
      <Head>
        <title> Hays Investment Limited</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="hays investment company limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </>
  );
}

export default MyApp;
