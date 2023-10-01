import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  transition: transform 0.3s ease-in-out;
`;

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <Slide key={index} style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}>
          {slide}
        </Slide>
      ))}
      <button onClick={prevSlide}>Anterior</button>
      <button onClick={nextSlide}>Próximo</button>
    </CarouselContainer>
  );
};

export default Carousel;
