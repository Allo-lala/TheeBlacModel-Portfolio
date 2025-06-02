import ReactPlayer from 'react-player/youtube';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const portraits = [
  'https://i.ibb.co/cXhsRKfP/eight.jpg',
  'https://i.ibb.co/RGgK9Pc6/ell.jpg',
  'https://i.ibb.co/xt1VBGRQ/five.jpg',
  'https://i.ibb.co/k27HwMTz/four.jpg',
  'https://i.ibb.co/4Z6SrnPH/funf.jpg',
  'https://i.ibb.co/fVcRj73P/last.jpg',
  'https://i.ibb.co/tMKMscyc/nine.jpg',
  'https://i.ibb.co/7xccJpY1/one.jpg',
  'https://i.ibb.co/R4D59TvX/seven.jpg',
  'https://i.ibb.co/67QdZKT6/sieben.jpg',
  'https://i.ibb.co/ksP9xhLs/six.jpg',
  'https://i.ibb.co/RksHH4gb/teen.jpg',
  'https://i.ibb.co/VY2j2sjN/ten.jpg',
  'https://i.ibb.co/HT077ns8/three.jpg',
  'https://i.ibb.co/nqxtcQD7/tinn.jpg',
  'https://i.ibb.co/KcFJQy5S/tlve.jpg',
  'https://i.ibb.co/wZn3vRSv/two.jpg',
  'https://i.ibb.co/LXvrPnFS/gallery-3.jpg',
  'https://i.ibb.co/KxWTWp44/gallery-5.jpg',
  'https://i.ibb.co/G4Pmp08V/gallery-4.jpg',
  'https://i.ibb.co/ynWvCyL9/gallery-6.jpg',
  'https://i.ibb.co/vxr8brX9/IMG-1686.jpg',
  'https://i.ibb.co/W4GhfJVf/IMG-1871.jpg',
  'https://i.ibb.co/HL9DGsxV/IMG-1900.jpg',
  'https://i.ibb.co/5tK4RDR/IMG-1896.jpg',
  'https://i.ibb.co/JRNRqDH8/IMG-1901.jpg',
  'https://i.ibb.co/3JV1X14/IMG-1907.jpg',
  'https://i.ibb.co/5W84M0kf/IMG-3306.jpg',
  'https://i.ibb.co/bMsWy9rL/IMG-3307.jpg',
  'https://i.ibb.co/fGCFPT1C/IMG-3308.jpg',
  'https://i.ibb.co/67hzxWh0/IMG-3335.jpg',
  'https://i.ibb.co/bYxX7Jy/IMG-3336.jpg',
  'https://i.ibb.co/MyCXdzg3/IMG-3337.jpg',
  'https://i.ibb.co/gbx8tMx8/IMG-3339.jpg',
  'https://i.ibb.co/5hXZYtbM/IMG-9565.jpg',
  'https://i.ibb.co/PZbWc8cR/IMG-9566.jpg',
  'https://i.ibb.co/Q3tTRVZy/IMG-9569.jpg',
  'https://i.ibb.co/KpN5MS4X/IMG-9567.jpg',
  'https://i.ibb.co/Vpt5nDk1/IMG-9570.jpg',
  'https://i.ibb.co/vCp2zxVq/IMG-9572.jpg',
  'https://i.ibb.co/wFwgFHkr/mmm.png',
  'https://i.ibb.co/8LT4mmkT/Whats-App-Image-2023-10-17-at-12-01-13.jpg',
  'https://i.ibb.co/hR8mksMq/Whats-App-Image-2023-10-17-at-11-57-52.jpg',
  'https://i.ibb.co/j9LzbhBJ/Whats-App-Image-2023-10-17-at-12-01-14.jpg',
  'https://i.ibb.co/LXvrPnFS/gallery-3.jpgimages.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
  // 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  // 'https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg',
  // 'https://images.pexels.com/photos/1839906/pexels-photo-1839906.jpeg',
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
          url="https://youtu.be/sn4h20rdvKw?si=KHVodrTvLkA-p9lC&t=3"
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
