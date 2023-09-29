import styled from "styled-components";

export const ContainerAbout = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #202020;

  @media (max-width: 1200px) {
    height: auto;
  }
`;

export const TitleService = styled.span`
  color: #fff;
  font-family: Mirza;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 155%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 430px) {
    padding-right: 0;
  }

  @media (min-width: 300px) {
    font-size: 36px;
  }
`;

export const ContentAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #303030;
  border-radius: 8px;
  margin-bottom: 70px;
  width: 70vw;
  max-width: 1210px;
  margin-top: 48px;

  @media (max-width: 1200px) {
    width: 85vw;
  }

  @media (max-width: 350px) {
    width: 90vw;
    padding: 5px;
  }
`;

export const ContentImage = styled.img`
  width: 50%;
  height: 100%;
`;

export const ContentAboutTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  width: 50%;
  height: 100%;
  padding-top: 15px;
  padding-bottom: 15px;

  @media (max-width: 879px) {
    width: 100%;
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

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  background: #4b4a4a;
  width: 80%;
  height: 45px;
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
    width: 90%;
    height: 35px;
    font-size: 16px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const TextArea = styled.textarea`
  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  background: #4b4a4a;
  width: 80%;
  height: 100px;
  padding-left: 15px;

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
    width: 90%;
    height: 70px;
    font-size: 16px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const ButtonSend = styled.button`
  width: 80%;
  height: 45px;
  border-radius: 8px;
  background: #fb8;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 40px;
  }

  @media (max-width: 879px) {
    width: 92%;
  }
`;

export const TitleButtonSend = styled.span`
  color: #202020;
  font-family: "Mirza";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 155%;
  text-align: center;
`;
