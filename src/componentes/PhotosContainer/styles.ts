import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 64px;
  padding-bottom: 64px;
  height: auto;

  img {
    width: 80%;
    display: block;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transition: transform 1000ms;

    @media (min-width: 460px) {
      width: 100%;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    max-width: 100%;

    @media (min-width: 1280px) {
      width: 70rem;
    }

    @media (max-width: 560px) {
      padding-left: 0;
    }
  }

  li {
    width: 90vw;

    @media (min-width: 460px) {
      width: 100%;
    }
  }

  figure {
    margin: 0;
    position: relative;
    overflow: hidden;
  }

  figure::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: rgba(0, 0, 0, 0.5);
    transform-origin: center;
    opacity: 0;
    transform: scale(2);
    transition: opacity 300ms;
  }

  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    place-items: center;
    text-align: center;
    padding: 1rem;
    color: white;
    font-size: 1.2rem;
    z-index: 1;
    opacity: 0;
    transition:
      opacity 600ms,
      transform 600ms;
  }

  a:is(:hover, :focus) figure::after {
    opacity: 1;
  }

  a:is(:hover, :focus) figcaption {
    opacity: 1;
    transition: opacity 600ms;
  }

  @media (prefers-reduced-motion: no-preference) {
    figcaption {
      transform: translate3d(0, 2rem, 0);
    }

    figure::after {
      border-radius: 50%;
      opacity: 1;
      transform: scale(0);
      transition: transform 900ms;
    }

    a:is(:hover, :focus) figure::after {
      transform: scale(2.5);
    }

    a:is(:hover, :focus) figcaption {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transition:
        opacity 600ms 400ms,
        transform 600ms 400ms;
    }

    a:is(:hover, :focus) img {
      transform: scale(1.2);
    }
  }
`;
