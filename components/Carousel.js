import dynamic from 'next/dynamic';
const CarouselItem = dynamic(() => import('./CarouselItem'));

const carouselItems = [
  {
    label: '#01 Exterior Building',
    imageUrl: 'bg_1',
  },
  {
    label: '#02 American Building',
    imageUrl: 'bg_2',
  },
  {
    label: '#03 Louies Residences',
    imageUrl: 'bg_3',
  },
  {
    label: '#04 Business Building',
    imageUrl: 'bg_4',
  },
];

const Carousel = () => {
  return (
    <section className="home-slider owl-carousel">
      {carouselItems.map((item, index) => (
        <CarouselItem key={index} label={item.label} imageUrl={item.imageUrl} />
      ))}
    </section>
  );
};

export default Carousel;
