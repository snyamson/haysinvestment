import dynamic from 'next/dynamic';
const About = dynamic(() => import('../components/About'));
const Carousel = dynamic(() => import('../components/Carousel'));
const Project = dynamic(() => import('../components/Project'));
const RequestQuote = dynamic(() => import('../components/RequestQuote'));
const Service = dynamic(() => import('../components/Service'));
const Counter = dynamic(() => import('../components/Counter'));
const Testimonial = dynamic(() => import('../components/Testimonial'));

export default function Home() {
  return (
    <>
      {/* Carousel */}
      <Carousel />
      {/* About */}
      <About />
      {/* Counter */}
      <Counter />
      {/* Services */}
      <Service />
      {/* Request Quote */}
      <RequestQuote />
      {/* Projects */}
      <Project />
      {/* Testimonial */}
      <Testimonial />
    </>
  );
}
