import React from 'react';

const ServiceItem = ({ content, selected }) => {
  return (
    <div
      className={`tab-pane fade show py-5 ${
        selected === content.category ? 'active' : null
      }`}
      id="v-pills-master"
      role="tabpanel"
    >
      <span className={`icon mb-3 d-block ${content.icon}`} />
      <h2 className="mb-4">{content.name}</h2>
      <p>{content.description}</p>
      <p>
        <a href="#" className="btn btn-primary px-4 py-3">
          Learn More
        </a>
      </p>
    </div>
  );
};

export default ServiceItem;
