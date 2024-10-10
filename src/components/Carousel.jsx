import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  invisible: {
    opacity: 0.5,
    filter: "blur(4px)"
  },
  show: {
    opacity: 1,
    filter: "blur(0)",
    transition: {
      ease: "easeOut",
      duration: 1
    }
  }
};

export default function Carousel({ imgArr }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? imgArr.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === imgArr.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        <motion.img
          key={imgArr[currentIndex].src}
          variants={variants}
          initial="invisible"
          animate="show"
          src={imgArr[currentIndex].src}
          alt=""
          width={1280}
          height={850}
          className="carousel__img"
        />
      </div>
      <div className="carousel__controls">
        <button type="button" onClick={handlePrev} className="carousel__btn">
          <Image
            src="/icons/left-arrow.svg"
            alt="向左箭頭"
            width={30}
            height={50}
          />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="carousel__btn carousel__btn--right"
        >
          <Image
            src="/icons/right-arrow.svg"
            alt="向右箭頭"
            width={30}
            height={50}
          />
        </button>
      </div>
      <p className="carousel__text">{imgArr[currentIndex].text}</p>
    </div>
  );
}
