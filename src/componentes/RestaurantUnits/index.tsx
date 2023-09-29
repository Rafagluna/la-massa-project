import * as S from "./styles";

function RestaurantUnit() {
  interface IRestaurantUnit {
    total: string;
    storeCountries: string;
    id: number;
  }

  const dataRestaurantUnits: IRestaurantUnit[] = [
    {
      total: "42",
      storeCountries: "Lojas no Brasil",
      id: 0,
    },
    {
      total: "27",
      storeCountries: "Lojas no EUA",
      
      id: 0,
    },
    {
      total: "19",
      storeCountries: "Lojas no México",
      id: 0,
    },
    {
      total: "12",
      storeCountries: "Lojas no Chile",
      id: 0,
    },
  ];
  return (
    <>
      <S.ContainerRestaurantUnit>
        <S.TitleRestaurantUnit>Já somos mais de:</S.TitleRestaurantUnit>
        <S.ContentCardsRestaurantUnits>
          {dataRestaurantUnits.map(({ total, storeCountries }) => (
            <>
              <S.CardRestaurantUnit>
                <S.TitleCard>{total}</S.TitleCard>
                <S.SubTitleCard>{storeCountries}</S.SubTitleCard>
              </S.CardRestaurantUnit>
            </>
          ))}
        </S.ContentCardsRestaurantUnits>
      </S.ContainerRestaurantUnit>
    </>
  );
}

export default RestaurantUnit;
