import { useState } from 'react';
import 'react-bnb-gallery/dist/index';
import ReactBnbGallery from 'react-bnb-gallery';
const photos = [
  {
    caption: 'caption 1',
    subcaption: 'subcaption 1',
    photo: '/images/image-1.jpg',
  },
  {
    caption: 'caption 2',
    subcaption: 'subcaption 2',
    photo: '/images/image-2.jpg',
  },
  {
    caption: 'caption 3',
    subcaption: 'subcaption 3',
    photo: '/images/image-3.jpg',
  },
];

function ProjectItem({ item }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  return (
    <>
      <div className={item?.className ? item?.className : null}>
        <a href="" className="portfolio ftco-animate">
          <div className="d-flex icon justify-content-center align-items-center">
            <span className="ion-md-search"></span>
          </div>
          <div className="d-flex heading align-items-end">
            <h3>
              <span>{item?.category}</span>
              <br />
              {item?.name}
            </h3>
          </div>
          <img
            src={`/images/${item?.imageUrl}.jpg`}
            className="img-fluid"
            alt=""
          />
        </a>
      </div>
    </>
  );
}

export default ProjectItem;
