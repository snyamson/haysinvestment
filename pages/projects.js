import Head from 'next/head';
import dynamic from 'next/dynamic';
const ProjectItem = dynamic(() => import('../components/ProjectItem'));
const Banner = dynamic(() => import('../components/shared/Banner'));

const projectItems = [
  {
    name: 'Work 01',
    category: 'Residence',
    imageUrl: 'image_3',
    className: null,
    size: 'S',
  },
  {
    name: 'Work 02',
    category: 'Residence',
    imageUrl: 'image_2',
    className: null,
    size: 'S',
  },
  {
    name: 'Work 03',
    category: 'Residence',
    imageUrl: 'image_9',
    className: null,
    size: 'S',
  },
  {
    name: 'Work 04',
    category: 'Residence',
    imageUrl: 'image_1',
    className: null,
    size: 'XL',
  },
  {
    name: 'Work 05',
    category: 'Residence',
    imageUrl: 'image_5',
    className: 'col-md-6',
    size: 'M',
  },
  {
    name: 'Work 06',
    category: 'Residence',
    imageUrl: 'image_6',
    className: 'col-md-6',
    size: 'M',
  },
  {
    name: 'Work 07',
    category: 'Residence',
    imageUrl: 'image_7',
    className: 'col-md-8',
    size: 'L',
  },
  {
    name: 'Work 08',
    category: 'Residence',
    imageUrl: 'image_4',
    className: 'col-md-4',
    size: 'XS',
  },
];

const Projects = () => {
  return (
    <>
      <Head>
        <title> Projects | Hays Investment Limited</title>
      </Head>

      {/* Banner */}
      <Banner currentPage="Project" title="Our Projects" />

      {/* Our Projects */}
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {projectItems
                .filter(({ size }) => size === 'S')
                .map((item, index) => (
                  <ProjectItem key={index} item={item} />
                ))}
            </div>
            <div className="col-md-8">
              {projectItems
                .filter(({ size }) => size === 'XL')
                .map((item, index) => (
                  <ProjectItem key={index} item={item} />
                ))}

              <div className="row">
                {projectItems
                  .filter(({ size }) => size === 'M')
                  .map((item, index) => (
                    <ProjectItem key={index} item={item} />
                  ))}
              </div>
              <div className="row">
                {projectItems
                  .filter(({ size }) => size === 'L')
                  .map((item, index) => (
                    <ProjectItem key={index} item={item} />
                  ))}

                {projectItems
                  .filter(({ size }) => size === 'XS')
                  .map((item, index) => (
                    <ProjectItem key={index} item={item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
