import styled from 'styled-components';

export const ContainerButton = styled.div`
  width: 80%;
  height: 44px;
  border-radius: 20px;
  background: #fb8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (min-width: 300px) {
    width: 190px;
  }
`;

export const TitleBanner = styled.span`
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
