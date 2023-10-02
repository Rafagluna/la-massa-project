import styled from 'styled-components';

export const ContainerFooter = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  background-color: #202020;
  padding-bottom: 70px;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const ContentSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 500px) {
    padding-bottom: 25px;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-family: Mirza;
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ContentIconsSocial = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  margin-top: 20px;
  gap: 38px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export const ContentInformation = styled.div`
  width: 279px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 70vw;
    /* padding-left: 50px */
  }
`;

export const IconArrow = styled.img`
  width: 26px;
  height: 26px;
  transform: rotate(1.25turn);

  @media (min-width: 1050px) {
    transform: none;
  }
`;

export const Information = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InformationSignedNewsletter = styled.span`
  display: flex;
  gap: 8px;
  color: #fff;
  font-family: Mirza;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 12px;
`;

export const ContentNewsletter = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    margin-top: 20px;
  }

  @media (max-width: 460px) {
    padding-left: 20px;
  }

  @media (max-width: 320px) {
    padding-left: 10px;
  }
`;

export const ContentInputEmail = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding-top: 32px;

  @media (max-width: 650px) {
    width: 90vw;
  }

  @media (max-width: 650px) {
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  border-radius: 20px 0px 0px 20px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  background: #4b4a4a;
  width: 354px;
  height: 41.5px;

  color: #fff;
  font-family: Mirza;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
  padding-left: 15px;

  &::placeholder {
    color: #ccc;
    font-family: Mirza;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 155%;
  }

  @media (max-width: 1200px) {
    font-size: 16px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const ButtonSend = styled.button`
  width: 123px;
  height: 100%;
  border-radius: 0px 20px 20px 0px;
  background: #fb8;
  display: flex;
  align-items: center;
  justify-content: center;

  /* @media (max-width: 1200px) {
    height: 40px;
  }

  @media (max-width: 879px) {
    width: 92%;
  } */
`;

export const TitleButtonSend = styled.span`
  color: #202020;
  font-family: 'Mirza';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 155%;
  text-align: center;
`;
