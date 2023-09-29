import * as S from "./styles";

function Banner(props: { title: string }) {
  return (
    <>
      <S.ContainerButton>
        <S.TitleBanner>{props.title}</S.TitleBanner>
      </S.ContainerButton>
    </>
  );
}

export default Banner;
