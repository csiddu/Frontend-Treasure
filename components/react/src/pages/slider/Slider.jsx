/*
  * Author: Kevin Tamakuwala (Github: @kevintamakuwala)
  * Date: 16/10/2003
  * Functionalities:
  *                 1) Infinite Autoplay when present on screen
  *                 2) Swiping functionality
*/

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "./slider.css";
import { Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

// dummy images, you can keep cards instead.
const dummyImages = [
  "https://images.unsplash.com/photo-1696004503906-6b6ca3923f71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzQ0ODE3Nw&ixlib=rb-4.0.3&q=80&w=300",
  "https://images.unsplash.com/photo-1696526552981-893b9caf991d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzQ0ODIyNg&ixlib=rb-4.0.3&q=80&w=300",
  "https://images.unsplash.com/photo-1693590593548-adb2d98e8f2b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzQ0ODI4OA&ixlib=rb-4.0.3&q=80&w=300",
  "https://images.unsplash.com/photo-1696164712534-25a0dca38a2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzQ0ODMyMQ&ixlib=rb-4.0.3&q=80&w=300",
  "https://images.unsplash.com/photo-1696164255885-4bb2db6bb3f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzQ0ODMzOA&ixlib=rb-4.0.3&q=80&w=300",
  "https://source.unsplash.com/random/300x300",
  "https://images.unsplash.com/photo-1695642579321-fcb1fc79b976?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzQ0ODM2Mg&ixlib=rb-4.0.3&q=80&w=300",
];

const Slider = () => {
  // using autoplay feature
  SwiperCore.use([Autoplay]);

  // including styles
  const styles = {
    slider__inner_container: {
      display: "flex",
      transition: ".5s",
    },
    slider__container: {
      overflow: "hidden",
      margin: "0 3rem",
    },
    __card: {
      padding: "1rem 0.5rem",
    },
    slideIn: {
      display: "none",
    },
  };

  // for autoplay slider: only when present on viewport. Use below code to achieve that using framer-motion and conditional rendering. --------------------------

  // const [isIntersecting, setIsIntersecting] = useState(false);
  // const ref = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsIntersecting(entry.isIntersecting);
  //     },
  //     { rootMargin: "-100px" }
  //   );
  //   observer.observe(ref.current);

  // return () => observer.disconnect();
  // }, []);

  // useEffect(() => {
  //   if (isIntersecting) {
  //     ref.current.querySelectorAll("div").forEach((el) => {
  //       el.classList.remove("slideIn");
  //     });
  //   }
  // }, [isIntersecting]);

  return (
    <div className="slider-wrapper">
      <div
        className="slider__container"
        // ref={ref}
        style={styles.slider__container}
      >
        <div>
          <Swiper
            className="slider__inner-container mySwiper "
            style={styles.slider__inner_container}
            autoplay={{
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              delay: 1500,
              stopOnLastSlide: false,
            }}
            slidesPerView={"auto"}
            modules={[Autoplay, Pagination]}
            navigation={true}
          >
            {dummyImages.map((url, index) => {
              return (
                <SwiperSlide>
                  <div className="slide-card">
                    <img src={`${url}`} alt="images" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
