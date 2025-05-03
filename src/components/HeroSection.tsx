import ReactPlayer from 'react-player/youtube';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const portraits = [
  'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  'https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg',
  'https://images.pexels.com/photos/1839906/pexels-photo-1839906.jpeg',
];

const HeroSection = () => {

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 3, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 4, spacing: 30 },
      },
    },
    renderMode: 'performance',
    drag: false,
    created: (instance) => {
      setInterval(() => instance.next(), 1000); // Slide every 1 second
    },
  });

  return (
    <div className="flex flex-col">
      {/* Fullscreen Video */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        <ReactPlayer
          url="https://youtu.be/OwSt0Quygno?si=dhQQiAVebkrqyV-X"
          playing
          muted
          controls={false}
          loop
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide">
            THEEBLACMODEL
          </h1>
        </div>
      </section>

      {/* Portrait Slider Section */}
      <section className="bg-black py-10 z-30">
        <div ref={sliderRef} className="keen-slider px-4">
          {portraits.map((url, i) => (
            <div key={i} className="keen-slider__slide rounded-lg overflow-hidden">
              <img
                src={url}
                alt={`Portrait ${i}`}
                className="w-full h-96 object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
