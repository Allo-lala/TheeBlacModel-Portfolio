import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion, AnimatePresence } from "framer-motion";

const portraits = [
  'https://i.ibb.co/8LT4mmkT/Whats-App-Image-2023-10-17-at-12-01-13.jpg',
  'https://i.ibb.co/hR8mksMq/Whats-App-Image-2023-10-17-at-11-57-52.jpg',
  'https://i.ibb.co/j9LzbhBJ/Whats-App-Image-2023-10-17-at-12-01-14.jpg',
  'https://i.ibb.co/cXhsRKfP/eight.jpg',
  'https://i.ibb.co/R4D59TvX/seven.jpg',
  'https://i.ibb.co/67QdZKT6/sieben.jpg',
  'https://i.ibb.co/ksP9xhLs/six.jpg',
  'https://i.ibb.co/RksHH4gb/teen.jpg',
  'https://i.ibb.co/VY2j2sjN/ten.jpg',
  'https://i.ibb.co/HT077ns8/three.jpg',
  'https://i.ibb.co/LXvrPnFS/gallery-3.jpg',
  'https://i.ibb.co/KxWTWp44/gallery-5.jpg',
  'https://i.ibb.co/G4Pmp08V/gallery-4.jpg',
  'https://i.ibb.co/ynWvCyL9/gallery-6.jpg',
  'https://i.ibb.co/vxr8brX9/IMG-1686.jpg',
  'https://i.ibb.co/W4GhfJVf/IMG-1871.jpg',
  'https://i.ibb.co/HL9DGsxV/IMG-1900.jpg',
  'https://i.ibb.co/nqxtcQD7/tinn.jpg',
  'https://i.ibb.co/wZn3vRSv/two.jpg',
  'https://i.ibb.co/5tK4RDR/IMG-1896.jpg',
  'https://i.ibb.co/JRNRqDH8/IMG-1901.jpg',
  'https://i.ibb.co/3JV1X14/IMG-1907.jpg',
  'https://i.ibb.co/5W84M0kf/IMG-3306.jpg',
  'https://i.ibb.co/bMsWy9rL/IMG-3307.jpg',
  'https://i.ibb.co/fGCFPT1C/IMG-3308.jpg',
  'https://i.ibb.co/67hzxWh0/IMG-3335.jpg',
  'https://i.ibb.co/bYxX7Jy/IMG-3336.jpg',
  'https://i.ibb.co/RGgK9Pc6/ell.jpg',
  'https://i.ibb.co/xt1VBGRQ/five.jpg',
  'https://i.ibb.co/k27HwMTz/four.jpg',
  'https://i.ibb.co/4Z6SrnPH/funf.jpg',
  'https://i.ibb.co/fVcRj73P/last.jpg',
  'https://i.ibb.co/tMKMscyc/nine.jpg',
  'https://i.ibb.co/7xccJpY1/one.jpg',
  'https://i.ibb.co/MyCXdzg3/IMG-3337.jpg',
  'https://i.ibb.co/gbx8tMx8/IMG-3339.jpg',
  'https://i.ibb.co/5hXZYtbM/IMG-9565.jpg',
  'https://i.ibb.co/PZbWc8cR/IMG-9566.jpg',
  'https://i.ibb.co/Q3tTRVZy/IMG-9569.jpg',
  'https://i.ibb.co/KpN5MS4X/IMG-9567.jpg',
  'https://i.ibb.co/Vpt5nDk1/IMG-9570.jpg',
  'https://i.ibb.co/KcFJQy5S/tlve.jpg',
  'https://i.ibb.co/vCp2zxVq/IMG-9572.jpg',
  'https://i.ibb.co/wFwgFHkr/mmm.png',

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

  const word = "THEEBLACMODEL".split("");
  const [show, setShow] = React.useState(true);
  const [seed, setSeed] = React.useState(Math.random());

  // Generate random directions for each letter, based on the seed
  const getRandoms = React.useCallback(() => {
    return word.map(() => ({
      x: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 300 + 100),
      y: -Math.random() * 300 - 100,
      rotate: (Math.random() - 0.5) * 180,
    }));
  }, [word.length]);

  const [randoms, setRandoms] = React.useState(getRandoms);

  React.useEffect(() => {
    setRandoms(getRandoms());
  }, [seed, getRandoms]);

  React.useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    const letterDelay = 0.25 * 1000; // 0.25s per letter
    const wordVisibleTime = 2000; // 2s after last letter lands
    if (show) {
      timeout1 = setTimeout(
        () => setShow(false),
        word.length * letterDelay + wordVisibleTime
      );
    } else {
      timeout2 = setTimeout(() => {
        setSeed(Math.random());
        setShow(true);
      }, 800); // slightly longer pause before restart
    }
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [show, word.length]);

  const letterVariants = {
    initial: (i: number) => ({
      y: randoms[i]?.y ?? -200,
      x: randoms[i]?.x ?? 0,
      rotate: randoms[i]?.rotate ?? 0,
      opacity: 0,
    }),
    animate: {
      y: 0,
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 14, // more bounce, slower settle
        mass: 1,
        bounce: 0.8,
      }
    },
    exit: (i: number) => ({
      y: 200,
      x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 100 + 50),
      rotate: (Math.random() - 0.5) * 120,
      opacity: 0,
      transition: { duration: 0.7 }
    })
  };

  return (
    <div className="flex flex-col">
      {/* Fullscreen Video */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('https://i.ibb.co/ksP9xhLs/six.jpg')",
            backgroundPosition: "center ", // Center image vertically and horizontally like here  https://images.pexels.com/photos/10677395/pexels-photo-10677395.jpeg?auto=compress&cs=tinysrgb&w=600
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
          <AnimatePresence>
            {show && (
              <motion.h1
                className="
                  font-serif font-light tracking-wide text-center
                  text-[10vw] sm:text-5xl md:text-7xl lg:text-8xl
                  leading-tight
                  flex justify-center
                "
                style={{ wordBreak: "break-word" }}
              >
                {word.map((letter, i) => (
                  <motion.span
                    key={letter + i + (show ? "in" : "out") + seed}
                    custom={i}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      delay: i * 0.25, // slower stagger
                      duration: 1.1,   // slower animation
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
          <span className="text-white text-lg mb-2">Scroll Down</span>
          <svg className="animate-bounce" width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
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
