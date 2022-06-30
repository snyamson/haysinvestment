import { AppStore } from '../utils/store';

function ProjectItem({ item, index }) {
  const handleClick = (item, index) => {
    AppStore.update((s) => {
      (s.currentIndex = index),
        (s.clickedImage = {
          category: item.category,
          url: item.imageUrl,
          name: item.name,
        });
    });
    //  setCurrentIndex(index);
    //  setClickedImg(item.link);
  };

  return (
    <>
      <div
        className={item?.className ? item?.className : null}
        onClick={() => handleClick(item, index)}
      >
        <a className="portfolio ftco-animate">
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
