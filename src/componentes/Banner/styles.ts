import styled from "styled-components";
import BannerRestaurant from "../../assets/BannerRestaurant.png";

export const ContainerBanner = styled.div`
  width: 100vw;
  height: 55vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerRestaurant});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;

  @media (min-width: 600px) and (max-width: 900px) {
    height: 65vh;
  }

  @media (min-width: 901px) {
    height: 80vh;
  padding-left: 0;
  }
`;

export const ContentBanner = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  padding-left: 15px;

  @media (min-width: 600px) and (max-width: 900px) {
    height: 65vh;
    padding-right: 30px;
  }

  @media (min-width: 901px) {
    height: 80vh;
    padding-left: 7%;
  }
`;

export const TitleBanner = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 15px;
  width: 90%;

  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 40px;
    width: 550px;
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    font-size: 44px;
    width: 580px;
  }

  @media (min-width: 1201px) {
    font-size: 50px;
    width: 580px;
  }
`;

export const SubTitleBanner = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-family: Mirza;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80%;
  padding-bottom: 20px;

  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 18px;
    width: 60%;
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    font-size: 18px;
    width: 470px;
  }

  @media (min-width: 1201px) {
    font-size: 20px;
    width: 470px;
  }
`;
