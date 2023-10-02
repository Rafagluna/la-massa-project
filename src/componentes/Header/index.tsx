import { useState } from 'react';

import * as S from './styles';

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
      option: 'HOME',
      path: '',
      id: 0,
    },
    {
      option: 'SOBRE',
      path: 'about',
      id: 1,
    },
    {
      option: 'SERVIÇOS',
      path: 'services',
      id: 2,
    },
    {
      option: 'EQUIPE',
      path: 'team',
      id: 3,
    },
    {
      option: 'DEPOIMENTOS',
      path: 'depositions',
      id: 4,
    },
    {
      option: 'CONTATO',
      path: 'contact',
      id: 5,
    },
  ];
  return (
    <>
      <S.ContainerHeader showOptions={showOptions}>
        <S.ContentHeader>
          <S.ContentTitle>
            <S.Title>LA MASSA</S.Title>
          </S.ContentTitle>
          {window.innerWidth <= 850 && (
            <S.MenuHamburger onClick={() => setShowOptions(!showOptions)} />
          )}
        </S.ContentHeader>
        {window.innerWidth <= 850 ? (
          <>
            {(showOptions || window.innerWidth >= 850) && (
              <>
                <S.ContentHeaderOptionsMobile>
                  {dataOptionsHeader.map(({ path, option }, index) => (
                    <>
                      <S.ContentOption active={optionId === index}>
                        <S.OptionHeader
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          duration={500}
                          to={path}
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
              {dataOptionsHeader.map(({ path, option }, index) => (
                <>
                  <S.ContentOption active={optionId === index}>
                    <S.OptionHeader
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      to={path}
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
