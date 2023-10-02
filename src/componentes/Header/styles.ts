import { styled } from 'styled-components';
import { theme } from '../styles/theme';
import { Menu } from '../Icons';

import { Link } from 'react-scroll';

interface OptionsHeader {
  showOptions?: boolean;
  active?: boolean;
}

export const ContainerHeader = styled.header<OptionsHeader>`
  background-color: #202020;
  width: 100vw;
  height: 80px;
  position: relative;
  @media (min-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 850px) {
    height: 58px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-top: 12px;

  @media (min-width: 850px) {
    padding-top: 0;
    align-items: center;
  }
`;

export const Title = styled.span`
  color: #fff;
  font-family: ${theme.font.Mirza};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 30px;

  @media (max-width: 480px) {
    font-size: 26px;
    width: 70%;
    padding-top: 3px;
  }

  @media (min-width: 481px) and (max-width: 849px) {
    font-size: 28px;
    width: 75%;
    padding-top: 3px;
  }
`;

export const MenuHamburger = styled(Menu)`
  color: #ffffff;
  padding-right: 30px;
  cursor: pointer;
  width: 25%;

  @media (max-width: 4800px) {
    width: 25px;
    height: 25px;
  }
`;

export const OptionHeader = styled(Link)<OptionsHeader>`
  color: #fff;
  font-size: 16px;
  font-family: 'Montserrat';
  font-style: normal;
  padding: 2px;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
  text-decoration: none;

  &:hover {
    font-weight: 700;
    color: #ffbb88;
  }

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export const ContentHeaderOptionsMobile = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 13px;
  list-style-type: none;
  position: absolute;
  top: 80;
  left: 0;
  right: 0;
  height: auto;
  background-color: #202020;

  @media (min-width: 850px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-top: 10px;
  }

  @media (max-width: 850px) {
    padding-right: 20px;
  }
`;

export const ContentHeaderOptions = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style-type: none;
  padding-top: 10px;
`;

export const ContentOption = styled.div<OptionsHeader>`
  border-bottom: ${({ active }) => (active ? '2px solid #ffbb88' : 'none')};
`;
