import { AppStore } from '../utils/store';
import Zoom from 'react-reveal/Zoom';

const items = [
  {
    imageUrl: 'image_3',
  },
  {
    imageUrl: 'image_2',
  },

  {
    imageUrl: 'image_1',
  },
];

const LightBox = () => {
  const clickedImage = AppStore.useState((s) => s.clickedImage);

  const handleClick = (e) => {
    if (e.target.classList.contains('lightbox-dismiss')) {
      AppStore.update((s) => {
        s.clickedImage = null;
      });
    }
  };

  return (
    <Zoom>
      <div className="lightbox-overlay lightbox-dismiss" onClick={handleClick}>
        <img src={`/images/${clickedImage?.url}.jpg`} alt="bigger pic" />
        <div className="lightbox-thumbnail-wrapper">
          <h5>
            {clickedImage?.category} - {clickedImage?.name}
          </h5>
          <p>
            This is the description for a particular project. The dexcription
            can be long and long enoght.
          </p>
          <div className="lightbox-thumbnail-img-wrapper">
            {items.map((item) => (
              <img
                src={`/images/${item.imageUrl}.jpg`}
                height={50}
                width={50}
                onClick={() =>
                  AppStore.update((s) => {
                    s.clickedImage = { ...s.clickedImage, url: item.imageUrl };
                  })
                }
              />
            ))}
          </div>
        </div>
        {/* <span className="lightbox-dismiss" onClick={handleClick}>
        X
      </span> */}
        {/* <div className="lightbox-overlay-arrows_left">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div> */}
        {/* <div className="lightbox-overlay-arrows_right">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div> */}
      </div>
    </Zoom>
  );
};

export default LightBox;
