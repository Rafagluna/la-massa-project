import { styled } from "styled-components";
import { theme } from "../styles/theme";
import { Menu } from "../Icons";

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

  @media (max-width: 300px) {
    height: 65px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;

  @media (min-width: 850px) {
    padding-top: 0;
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
  padding-bottom: 10px;

  @media (max-width: 300px) {
    font-size: 24px;
  }
`;

export const MenuHamburger = styled(Menu)`
  color: #ffffff;
  padding-right: 30px;
  cursor: pointer;

  @media (max-width: 300px) {
    width: 25px;
    height: 25px;
  }
`;

export const OptionHeader = styled.li<OptionsHeader>`
  color: #fff;
  font-size: 16px;
  font-family: "Montserrat";
  font-style: normal;
  padding: 2px;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;

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
  border-bottom: ${({ active }) => (active ? "2px solid #ffbb88" : "none")};
`;
