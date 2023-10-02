import * as S from './styles';

function Banner() {
  return (
    <>
      <S.ContainerBanner id="depositions">
        <S.Title>Depoimentos</S.Title>
        <S.ContainerCommentsDepositions>
          <S.ContentBanner>
            <S.TitleDepositions>
              “Um dos melhores e mais chiques restaurantes que já visitei. Um
              lugar lindo, sem falar da comida que é SENSACIONAL. Recomendo
              muito, não vão se arrepender! Atendimento e comida nota 10.”
            </S.TitleDepositions>
            <S.SubTitleDepositions>João Paulo</S.SubTitleDepositions>
          </S.ContentBanner>

          <S.ContentBanner>
            <S.TitleDepositions>
              “Visitei uma vez para conhecer e hoje não quero outro. Melhor
              restaurante que já frequentei, eu e minha família amamos de
              paixão.”
            </S.TitleDepositions>
            <S.SubTitleDepositions>Any Marques</S.SubTitleDepositions>
          </S.ContentBanner>

          <S.ContentBanner>
            <S.TitleDepositions>
              “Comida fresca, saborosa, requintada e deliciosa. Lá pude comer
              meu bom e velho feijão tropeiro com bife de panela. O que quiser
              comer, você encontrará no La Massa Chefs’s. Top demais!”
            </S.TitleDepositions>
            <S.SubTitleDepositions>Tiago Lopes</S.SubTitleDepositions>
          </S.ContentBanner>
        </S.ContainerCommentsDepositions>
      </S.ContainerBanner>
    </>
  );
}

export default Banner;
