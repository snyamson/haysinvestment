const ProjectItem = ({ item }) => {
  return (
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
  );
};

export default ProjectItem;
