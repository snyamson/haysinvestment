import dynamic from 'next/dynamic';
const ProjectItem = dynamic(() => import('./ProjectItem'));

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
];

const Project = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12 heading-section ftco-animate mb-3">
                <h2 className="mb-4">Projects</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia
                </p>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
