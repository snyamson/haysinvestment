import React from 'react';

const CarouselItem = ({ label, imageUrl }) => {
  return (
    <div
      className="slider-item"
      style={{
        backgroundImage: `url(/images/${imageUrl}.jpg)`,
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row slider-text align-items-end justify-content-center">
          <div
            className="col-md-12 ftco-animate p-4"
            data-scrollax=" properties: { translateY: '70%' }"
          >
            <h1
              className="mb-3"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              {label}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
