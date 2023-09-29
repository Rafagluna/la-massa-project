import * as S from "./styles";
import YoutubeRestaurant from "../../assets/YoutubeRestaurant.svg";

function About() {
  return (
    <>
      <S.ContainerAbout>
        <S.ContentAbout>
          <S.ContentImage src={YoutubeRestaurant} alt="YoutubeRestaurant" />
          <S.ContentAboutTitle>
            <S.TitleAbout>Conheça um pouco sobre a nossa cozinha</S.TitleAbout>
            <S.SubTitleAbout>
              Nossa cozinha reúne de forma única, diversas variações da
              culinaria mundial, desde massas até frios e derivados. Fazemos
              tudo pensando na excelência do sabor, a fim proporcionar uma
              explosão de sensações.
            </S.SubTitleAbout>
          </S.ContentAboutTitle>
        </S.ContentAbout>
      </S.ContainerAbout>
    </>
  );
}

export default About;
