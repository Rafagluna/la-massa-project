import styled from 'styled-components';
import BGTestimonials from '../../assets/BGTestimonials.svg';

export const ContainerBanner = styled.div`
  width: 100vw;
  height: auto;
  background:
    linear-gradient(0deg, rgba(32, 32, 32, 0.7) 0%, rgba(32, 32, 32, 0.7) 100%),
    linear-gradient(180deg, #202020 0%, #202020 0%, rgba(32, 32, 32, 0) 23.44%),
    url(${BGTestimonials}),
    lightgray 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 64px 0;
`;

export const Title = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 155%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  text-align: center;
  padding-right: 20px;

  @media (min-width: 300px) {
    font-size: 36px;
  }

  @media (min-width: 410px) {
    padding-right: 0;
  }
`;

export const ContainerCommentsDepositions = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 25px;
  margin-right: 10px;

  @media (min-width: 410px) {
    margin-right: 0;
  }

  @media (min-width: 410px) and (max-width: 820px) {
    width: 90vw;
  }
`;

export const ContentBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80vw;
  height: auto;
  border-radius: 8px;
  background: #f3f3f3;

  @media (min-width: 410px) {
    width: 350px;
  }
`;

export const TitleDepositions = styled.span`
  color: #202020;
  text-align: center;
  font-family: Mirza;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 155%; /* 27.9px */
  padding: 42px 27px 10px;
  width: 80%;
`;

export const SubTitleDepositions = styled.span`
  font-family: Mirza;
  color: #202020;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 155%; /* 27.9px */
  padding-bottom: 33px;
  width: 90%;
`;
