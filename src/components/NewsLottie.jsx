"use client";
import { useRef, useEffect } from "react";
import lottie from "lottie-web";

export default function NewsLottie() {
  const container = useRef(null);

  useEffect(() => {
    lottie
      .loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./../../public/icons/logo-news.json")
      })
      .setSpeed(2);

    return () => {
      lottie.destroy();
    };
  }, []);

  return <div ref={container} className="news__deco" />;
}
