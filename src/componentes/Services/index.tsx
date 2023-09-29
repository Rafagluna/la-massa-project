import * as S from "./styles";
import Fish from "../../assets/Fish.svg";
import Pasta from '../../assets/Pasta.svg'
import FastFood from '../../assets/FastFood.svg'
import Grilled from '../../assets/Grilled.svg'
import Barbecue from '../../assets/Barbecue.svg'
import Drink from '../../assets/Drink.svg'
import Button from "../Button";

function Service() {
  interface IServices {
    image: string;
    title: string;
    subTitle: string;
    id: number;
  }

  const dataServices: IServices[] = [
    {
      image: Fish,
      title: "Sushi",
      subTitle:
        "Temos uma mesa gigantesca de sushi e derivados totalmente dedicada a você.",
      id: 0,
    },
    {
      image: Pasta,
      title: "Massas",
      subTitle:
        "Temos um rodízio de massas com uma enorme variedade, que vão desde macarrões até pizzas.",
      id: 0,
    },
    {
      image: FastFood,
      title: "Fast Food",
      subTitle:
        "Nossa rede de Fast Food disponibiliza do melhor e mais suculento hambúrguer da América Latina.",
      id: 0,
    },
    {
      image: Grilled,
      title: "Grelhados",
      subTitle:
        "Possuimos uma variedade enorme de grelhados, sendo uma boa opção para aqueles que querem sair da rotina.",
      id: 0,
    },
    {
      image: Barbecue,
      title: "Churrasco",
      subTitle:
        "Nosso cardápio de carnes e churrasco é o mais completo do Brasil, contando com carnes, frangos e peixes.",
      id: 0,
    },
    {
      image: Drink,
      title: "Drinks",
      subTitle:
        "Para acompanhar sua refeição, possuimos uma longa lista de drinks, com e sem álcool.",
      id: 0,
    },
  ];
  return (
    <>
      <S.ContainerService>
        <S.TitleService>Nossos Serviços</S.TitleService>
        <S.ContentCardsServices>
          {dataServices.map(({ image, title, subTitle }) => (
            <>
              <S.CardService>
                <S.ContentIcon src={image} alt="image" />
                <S.TitleCard>{title}</S.TitleCard>
                <S.SubTitleCard>{subTitle}</S.SubTitleCard>
              </S.CardService>
            </>
          ))}
        </S.ContentCardsServices>
        <S.ContentTitleMenuService>
          Gostou? Dê uma olhada no nosso cardápio completo!
        </S.ContentTitleMenuService>
        <Button title="Cardápio Completo" />
      </S.ContainerService>
    </>
  );
}

export default Service;
