import Head from 'next/head';
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('../components/shared/Banner'));
const HowItWorksItem = dynamic(() => import('../components/HowItWorksItem'));
const Service = dynamic(() => import('../components/Service'));

const howItWorksItems = [
  {
    number: '01.',
    title: 'Analyzing',
    desc: ' Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
  },
  {
    number: '02.',
    title: 'Planning',
    desc: ' Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
  },
  {
    number: '03.',
    title: 'Developing',
    desc: ' Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title> Services | Hays Investment Limited</title>
      </Head>

      {/* Banner */}
      <Banner currentPage="Services" title="Services" />
      {/* How It Works */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-4">How it works</h2>
            </div>
          </div>
          <div className="row">
            {howItWorksItems.map((item, index) => (
              <HowItWorksItem item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
      <Service />
    </>
  );
};

export default Services;
