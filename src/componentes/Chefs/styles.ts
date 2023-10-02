import styled from 'styled-components';
import * as I from '../Icons';

interface ICarousel {
  toHide: boolean;
}

export const ContainerRestaurantUnit = styled.div`
  width: 100vw;
  min-height: 35vh;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .texto {
    height: 300px;
    width: 400px;
    background-color: yellow;
  }

  .slider {
    margin: 0 20px;
    overflow: 'hidden';
    padding: 2rem 0;
  }

  .slider img {
    width: 100%;
    border-radius: 10px;
  }

  .react-multi-carousel-list {
    padding: 0rem 0 2rem 0;
  }

  .custom-dot-list-style button {
    border: none;
    background: rgb(255, 68, 68);
  }
  .react-multi-carousel-dot.react-multi-carousel-dot--active button {
    background: rgb(255, 68, 68) !important;
  }

  @media (max-width: 1026px) {
    height: auto;
  }
`;

export const TitleRestaurantUnit = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 155%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 50px;
  text-align: center;
  padding-right: 20px;

  @media (min-width: 300px) {
    font-size: 36px;
  }

  @media (min-width: 430px) {
    padding-right: 0;
  }
`;

export const ContentCarousel = styled.div<ICarousel>`
  width: 70vw;

  li.react-multi-carousel-item.react-multi-carousel-item--active {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rec .rec-arrow {
    background-color: #ffbb88;
    color: #1d1d1d;

    display: ${({ toHide }) => toHide && 'none'};
  }

  .rec.rec-dot.rec.rec-dot_active {
    background-color: #ffbb88;
    color: #1d1d1d;
    box-shadow: none;
  }

  @media (max-width: 450px) {
    width: 90vw;
  }
`;

export const CardChefProfile = styled.div`
  width: 255px;
  height: 474px;
  border-radius: 8px;
  background: #303030;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const ContentImageProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 8px;
`;

export const ContentTextProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 12px;
`;

export const TitleNameChef = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 5px;
`;

export const SubTitleChef = styled.span`
  color: #fb8;
  font-family: Mirza;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  padding-bottom: 15px;
`;

export const DescriptionProfileChef = styled.span`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-family: Mirza;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  width: 208px;
`;

export const Divider = styled.hr`
  width: 100%;
  background: #696969;
`;

export const ContentSocialProfileChef = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 5px;
`;

export const IconFacebook = styled(I.Facebook)`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  color: #696969;
  cursor: pointer;
`;

export const IconInstagram = styled(I.Instagram)`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  color: #696969;
  cursor: pointer;
`;

export const IconLinkldin = styled(I.Linkldin)`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  color: #696969;
  cursor: pointer;
`;

export const ContentCardsRestaurantUnits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 35px;
  width: 90%;
  padding-top: 20px;
  padding-right: 25px;

  @media (min-width: 720px) {
    padding-right: 0 !important;
    width: 100%;
    gap: 60px;
    padding-bottom: 20px;
  }
`;

export const CardRestaurantUnit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleCard = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (min-width: 430px) {
    font-size: 48px;
  }

  @media (min-width: 300px) and (max-width: 430px) {
    font-size: 36px;
  }
`;

export const SubTitleCard = styled.span`
  color: #eedede;
  text-align: center;
  font-family: Mirza;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;

  @media (min-width: 430px) {
    font-size: 22px;
  }
`;
