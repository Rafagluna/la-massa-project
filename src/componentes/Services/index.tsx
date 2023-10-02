import * as S from './styles';
import * as I from '../Icons';
import Button from '../Button';

function Service() {
  interface IServices {
    icon: JSX.Element;
    title: string;
    subTitle: string;
    id: number;
  }

  const dataServices: IServices[] = [
    {
      icon: <I.Fish />,
      title: 'Sushi',
      subTitle:
        'Temos uma mesa gigantesca de sushi e derivados totalmente dedicada a você.',
      id: 0,
    },
    {
      icon: <I.Pasta />,
      title: 'Massas',
      subTitle:
        'Temos um rodízio de massas com uma enorme variedade, que vão desde macarrões até pizzas.',
      id: 1,
    },
    {
      icon: <I.FastFood />,
      title: 'Fast Food',
      subTitle:
        'Nossa rede de Fast Food disponibiliza do melhor e mais suculento hambúrguer da América Latina.',
      id: 2,
    },
    {
      icon: <I.Grilled />,
      title: 'Grelhados',
      subTitle:
        'Possuimos uma variedade enorme de grelhados, sendo uma boa opção para aqueles que querem sair da rotina.',
      id: 3,
    },
    {
      icon: <I.Barbecue />,
      title: 'Churrasco',
      subTitle:
        'Nosso cardápio de carnes e churrasco é o mais completo do Brasil, contando com carnes, frangos e peixes.',
      id: 4,
    },
    {
      icon: <I.Drinks />,
      title: 'Drinks',
      subTitle:
        'Para acompanhar sua refeição, possuimos uma longa lista de drinks, com e sem álcool.',
      id: 5,
    },
  ];
  return (
    <>
      <S.ContainerService id="services">
        <S.TitleService>Nossos Serviços</S.TitleService>
        <S.ContentCardsServices>
          {dataServices.map(({ icon, title, subTitle }) => (
            <>
              <S.CardService>
                <S.ContentIcon>{icon}</S.ContentIcon>
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
