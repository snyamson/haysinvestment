import { useState } from 'react';
import ServiceItem from './ServiceItem';

const serviceCategories = [
  { name: 'Interior', icon: 'flaticon-house-plans' },
  { name: 'Concept', icon: 'flaticon-ideas' },
  { name: 'Residential', icon: 'flaticon-modern-house' },
  { name: 'Hospitality', icon: 'flaticon-skyline' },
];

const categoryContents = [
  {
    name: 'Interior Design',
    description:
      'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
    category: 'Interior',
    icon: 'flaticon-house-plans',
  },
  {
    name: 'Concept Design',
    description:
      'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
    category: 'Concept',
    icon: 'flaticon-ideas',
  },
  {
    name: 'Residential Design',
    description:
      'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
    category: 'Residential',
    icon: 'flaticon-modern-house',
  },
  {
    name: 'Hospitality Design',
    description:
      'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
    category: 'Hospitality',
    icon: 'flaticon-skyline',
  },
];

const Service = () => {
  const [selected, setSelected] = useState('Interior');

  const selectedContent = categoryContents.filter((item) =>
    item.category.includes(selected)
  );

  return (
    <section className="ftco-services">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-5 ftco-animate py-5 nav-link-wrap aside-stretch">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <h3 className="ml-3">Services</h3>
              {serviceCategories.map((category, index) => (
                <a
                  key={index}
                  className={`nav-link px-4 ${
                    selected === category.name ? 'active' : null
                  } `}
                  onClick={() => setSelected(category.name)}
                >
                  <span className={`mr-3 ${category.icon}`} />
                  {category.name}
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-7 ftco-animate p-4 p-md-5 d-flex align-items-center">
            <div className="tab-content pl-md-5" id="v-pills-tabContent">
              {selectedContent.map((item, index) => (
                <ServiceItem key={index} content={item} selected={selected} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
