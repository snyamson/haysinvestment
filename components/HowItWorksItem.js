const HowItWorksItem = ({ item }) => {
  return (
    <div className="col-md-4 ftco-animate">
      <div className="services">
        <h3>
          <span>{item.number}</span> {item.title}
        </h3>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default HowItWorksItem;
