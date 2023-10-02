import styled from 'styled-components';

export const ContainerService = styled.div`
  width: 100vw;
  min-height: 80vh;
  background-color: #202020;
  border-radius: 0px 0px 300px 300px;
  background: #303030;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1026px) {
    height: auto;
  }
`;

export const TitleService = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 155%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  text-align: center;
  padding-right: 20px;

  @media (min-width: 430px) {
    padding-right: 0;
  }

  @media (min-width: 300px) {
    font-size: 40px;
  }
`;

export const ContentCardsServices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  width: 90%;
  padding-top: 40px;

  @media (min-width: 430px) and (max-width: 860px) {
    max-width: 70%;
    padding-right: 0;
  }

  @media (min-width: 861px) {
    max-width: 900px;
    padding-right: 0;
  }
`;

export const CardService = styled.div`
  width: 90%;
  height: 230px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid #fb8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 430px) {
    width: 240px;
  }
`;

export const ContentIcon = styled.span`
  width: 80px !important;
  height: 80px !important;
  color: #ffbb88;
  padding-left: 10px;
`;

export const TitleCard = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 20px;

  @media (min-width: 430px) {
    font-size: 18px;
  }
`;

export const SubTitleCard = styled.span`
  color: #eedede;
  text-align: center;
  font-family: Mirza;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 80%;

  @media (min-width: 430px) {
    font-size: 16px;
    width: 200px;
  }
`;

export const ContentTitleMenuService = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 32px;
  padding-top: 50px;
  width: 80%;
  text-align: center;
  padding-right: 5px;

  @media (min-width: 460px) {
    padding-right: 0;
  }
`;
