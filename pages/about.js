import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const RequestQuote = dynamic(() => import('../components/RequestQuote'));
const Banner = dynamic(() => import('../components/shared/Banner'));

const teamMembers = [
  {
    name: 'Jacob Smith',
    position: 'Architect',
    brief:
      ' A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    imageUrl: 'person_1',
  },
  {
    name: 'Aldin Henderson',
    position: 'Ass. Architect',
    brief:
      ' A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    imageUrl: 'person_2',
  },
  {
    name: 'George Hayford',
    position: 'Engineer - CEO',
    brief:
      ' A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    imageUrl: 'person_3',
  },
];

const About = () => {
  return (
    <>
      <Head>
        <title> About | Hays Investment Limited</title>
      </Head>
      {/* Banner */}
      <Banner currentPage="About" title="About Us" />
      {/* Our Team */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-4">Our Team</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in
              </p>
            </div>
          </div>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4 mb-5 ftco-animate">
                <div className="block-10">
                  <div className="person-info mb-2">
                    <span className="name">{member.name}</span>
                    <span className="position">{member.position}</span>
                  </div>
                  <img
                    src={`/images/${member.imageUrl}.jpg`}
                    alt=""
                    className="img-fluid mb-3"
                  />
                  <p>{member.brief}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RequestQuote />
    </>
  );
};

export default About;
