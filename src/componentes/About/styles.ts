import styled from 'styled-components';

export const ContainerAbout = styled.div`
  width: 100vw;
  height: auto;
  background-color: #202020;

  @media (max-width: 1026px) {
    height: auto;
  }
`;

export const ContentAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  gap: 36px;
  padding: 60px 15px;

  @media (min-width: 1026px) {
    flex-direction: row;
    padding-top: 90px;
  }
`;

export const ContentImage = styled.img`
  max-width: 540px;
  width: 75%;

  @media (max-width: 400px) {
    width: 85%;
  }
`;

export const ContentAboutTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1026px) {
    max-width: 460px;
    padding-left: 10px;
  }

  @media (max-width: 1025px) and (min-width: 725px) {
    width: 75%;
  }
`;

export const TitleAbout = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 15px;
  width: 75%;

  @media (min-width: 600px) {
    font-size: 36px;
  }

  @media (max-width: 400px) {
    width: 85%;
  }
`;

export const SubTitleAbout = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-family: Mirza;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 75%;

  @media (min-width: 600px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    width: 85%;
  }
`;
