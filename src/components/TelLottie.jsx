"use client";
import { useRef, useEffect } from "react";
import lottie from "lottie-web";

export default function TelLottie() {
  const container = useRef(null);

  useEffect(() => {
    lottie
      .loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: require("./../../public/icons/tel.json")
      })
      .setSpeed(3);

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <a
      href="tel:02-12345678"
      className="header__btn"
      onMouseEnter={() => lottie.play()}
      onMouseLeave={() => lottie.stop()}
    >
      <div ref={container} />
      <p>02-12345678</p>
    </a>
  );
}
