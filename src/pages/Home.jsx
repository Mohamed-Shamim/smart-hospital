import React, { useEffect, useRef, useState } from "react";
import InfoSection from "../components/InfoSection";
import FeaturedServices from "../components/FeaturedServices";

const sliderData = [
  {
    id: 1,
    image: "slider1.jpg",
  },
  {
    id: 2,
    image: "slider2.jpg",
  },
  { id: 3, image: "slider3.jpg" },
  {
    id: 4,
    image: "slider4.jpg",
  },
  {
    id: 5,
    image: "slider5.jpg",
  },
  {
    id: 6,
    image: "slider6.jpg",
  },
];

const noticias = [
  {
    id: 1,
    date: "21 junho",
    description: "International Nurses Day",
  },
  {
    id: 2,
    date: "2 Poderia",
    description: "Springing into action after ",
  },

  {
    id: 3,
    date: "23 junho",
    description: "Public Service Day",
  },

  {
    id: 4,
    date: "24 junho",
    description: "World Blood Donor Day",
  },
  {
    id: 5,
    date: "25 junho",
    description: "World Environment Day",
  },
  {
    id: 6,
    date: "26 junho",
    description: "International Day ",
  },
  {
    id: 7,
    date: "27 junho",
    description: "World Diabetes Day",
  },
  {
    id: 8,
    date: "28 junho",
    description: "World Hepatitis Day",
  },
  {
    id: 9,
    date: "29 junho",
    description: "World Sickle Cell Day",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const sliderContainerRef = useRef(null);

  const newsRef = useRef(null);
  const [autoNewsScroll, setAutoNewsScroll] = useState(true);

  useEffect(() => {
    let intervalId;

    if (autoNewsScroll) {
      intervalId = setInterval(() => {
        if (newsRef.current) {
          const container = newsRef.current;
          const maxScroll = container.scrollHeight - container.clientHeight;

          if (container.scrollTop >= maxScroll) {
            container.scrollTop = 0;
          } else {
            container.scrollTop += 1;
          }
        }
      }, 50); // Speed (lower is faster)
    }

    return () => clearInterval(intervalId);
  }, [autoNewsScroll]);

  // Auto-play effect
  useEffect(() => {
    let intervalId;
    if (autoPlay) {
      intervalId = setInterval(() => {
        goToNext();
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [autoPlay, currentSlide]);

  // Set slider position
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSliderPosition();
  }, [currentSlide]);

  const handleResize = () => {
    setSliderPosition();
  };

  const setSliderPosition = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
      setPrevTranslate(currentSlide * -sliderRef.current.offsetWidth);
    }
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch/pointer events
  const touchStart = (index) => (e) => {
    setAutoPlay(false);
    setCurrentSlide(index);
    setStartPos(getPositionX(e));
    setIsDragging(true);
    animationRef.current = requestAnimationFrame(animation);
    document.body.style.cursor = "grabbing";
  };

  const touchMove = (e) => {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      setCurrentTranslate(prevTranslate + currentPosition - startPos);
    }
  };

  const touchEnd = () => {
    cancelAnimationFrame(animationRef.current);
    setIsDragging(false);
    document.body.style.cursor = "";

    const threshold = sliderContainerRef.current.offsetWidth * 0.2;

    if (currentTranslate < -threshold && currentSlide < sliderData.length - 1) {
      goToNext();
    } else if (currentTranslate > threshold && currentSlide > 0) {
      goToPrev();
    }

    setCurrentTranslate(0);
    setPrevTranslate(currentSlide * -sliderContainerRef.current.offsetWidth);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const getPositionX = (e) => {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  };

  const animation = () => {
    if (isDragging && sliderRef.current) {
      sliderRef.current.style.transform = `translateX(calc(-${
        currentSlide * 100
      }% + ${currentTranslate}px)`;
      animationRef.current = requestAnimationFrame(animation);
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-6 h-[500px] sm:h-[600px] md:h-[710px] lg:h-[320px] xl:h-[400px] 2xl:h-[500px]">
          {/* Slider Container */}
          <div
            ref={sliderContainerRef}
            className="w-full h-full relative overflow-hidden rounded-lg shadow-2xl"
          >
            <div
              ref={sliderRef}
              className="flex h-full cursor-grab active:cursor-grabbing select-none transition-transform duration-300 ease-out"
              onTouchStart={touchStart(currentSlide)}
              onTouchMove={touchMove}
              onTouchEnd={touchEnd}
              onMouseDown={touchStart(currentSlide)}
              onMouseMove={touchMove}
              onMouseUp={touchEnd}
              onMouseLeave={touchEnd}
            >
              {sliderData.map((slide) => (
                <div
                  key={slide.id}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable="false"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h2 className="text-2xl font-bold text-white">
                      {slide.title}
                    </h2>
                    <p className="text-gray-300">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => {
                setAutoPlay(false);
                goToPrev();
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-200 hover:opacity-100 opacity-80"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                setAutoPlay(false);
                goToNext();
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-200 hover:opacity-100 opacity-80"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {sliderData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoPlay(false);
                    goToSlide(index);
                    setTimeout(() => setAutoPlay(true), 5000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div
            className="w-full lg:w-96  rounded-lg shadow-lg border border-gray-200 overflow-hidden bg-white"
            onMouseEnter={() => setAutoNewsScroll(false)}
            onMouseLeave={() => setAutoNewsScroll(true)}
          >
            <h2 className="text-[16px] font-semibold py-3 px-4 bg-blue-500 text-white">
              Últimas notícias
            </h2>
            <div
              ref={newsRef}
              className="h-[calc(100%-48px)] overflow-y-auto no-scrollbar transition-all duration-500"
            >
              <div className="divide-y divide-gray-200">
                {noticias.map((item) => {
                  const [day, month] = item.date.split(" ");
                  return (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 px-4 py-4"
                    >
                      <div className="bg-blue-600 text-white text-center rounded-md w-[70px] h-[50px] flex flex-col justify-center items-center py-1">
                        <span className="text-sm font-semibold leading-tight">
                          {day.padStart(2, "0")}
                        </span>
                        <span className="text-xs capitalize leading-tight">
                          {month}
                        </span>
                      </div>
                      <p className="text-sm text-gray-800">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoSection />
      <FeaturedServices />
    </div>
  );
};

export default Home;
