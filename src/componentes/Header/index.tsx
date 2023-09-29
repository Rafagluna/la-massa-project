import { useState } from "react";

import * as S from "./styles";

function Header() {
  interface IOption {
    option: string;
    path: string;
    id: number;
  }

  const [showOptions, setShowOptions] = useState(false);
  const [optionId, setOptionId] = useState(0);

  const dataOptionsHeader: IOption[] = [
    {
      option: "HOME",
      path: "#home",
      id: 0,
    },
    {
      option: "SOBRE",
      path: "#sobre",
      id: 1,
    },
    {
      option: "SERVIÇOS",
      path: "#servicos",
      id: 2,
    },
    {
      option: "EQUIPE",
      path: "#equipe",
      id: 3,
    },
    {
      option: "DEPOIMENTOS",
      path: "#depoimentos",
      id: 4,
    },
    {
      option: "CONTATO",
      path: "#contato",
      id: 5,
    },
  ];
  return (
    <>
      <S.ContainerHeader showOptions={showOptions}>
        <S.ContentHeader>
          <S.Title>LA MASSA</S.Title>
          {window.innerWidth <= 850 && (
          <S.MenuHamburger onClick={() => setShowOptions(!showOptions)} />
          )}
        </S.ContentHeader>
        {window.innerWidth <= 850 ? (
          <>
        {(showOptions || window.innerWidth >= 850) && (
          <>
            <S.ContentHeaderOptionsMobile>
              {dataOptionsHeader.map(({ option }, index) => (
                <>
                <S.ContentOption 
                    active={optionId === index}>
                  <S.OptionHeader
                    key={index}
                    onClick={() => setOptionId(index)}
                  >
                    {option}
                  </S.OptionHeader>
                  </S.ContentOption>
                </>
              ))}
            </S.ContentHeaderOptionsMobile>
          </>
        )}
        </>
        ) : (
          <>
            <S.ContentHeaderOptions>
              {dataOptionsHeader.map(({ option }, index) => (
                <>
                <S.ContentOption 
                    active={optionId === index}>
                  <S.OptionHeader
                    key={index}
                    onClick={() => setOptionId(index)}
                  >
                    {option}
                  </S.OptionHeader>
                  </S.ContentOption>
                </>
              ))}
            </S.ContentHeaderOptions>
          </>
        )}
      </S.ContainerHeader>
    </>
  );
}

export default Header;
