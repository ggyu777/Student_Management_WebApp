import React, { useEffect, useState } from "react";
import SlideCard from "./SlideCard";
import TouchSlideCard from "./TouchSlideCard";

export default function SliderTest({ grade }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const slice = grade.slice(1, grade.length);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const nextSlide = () => {
    if (slideIndex !== slice.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slice.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slice.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  const windowSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", windowSize);
    return () => {
      window.removeEventListener("resize", windowSize);
    }
    
  }, [screenSize]);

  if (screenSize > 990 || screenSize < 668) {
    return (
      <SlideCard 
        slice={slice} 
        slideIndex={slideIndex} 
        nextSlide={nextSlide} 
        prevSlide={prevSlide} 
        moveDot={moveDot} 
      />
    );
  } else {
    return (
      <TouchSlideCard slice={slice} />
    );
  }
}