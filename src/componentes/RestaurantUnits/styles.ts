import styled from 'styled-components';

export const ContainerRestaurantUnit = styled.div`
  width: 100vw;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  text-align: center;
  padding-right: 20px;

  @media (min-width: 300px) {
    font-size: 36px;
  }

  @media (min-width: 430px) {
    padding-right: 0;
  }
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
