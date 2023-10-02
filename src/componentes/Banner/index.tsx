import * as S from './styles';
import Button from '../Button';

function Banner() {
  return (
    <>
      <S.ContainerBanner>
        <S.ContentBanner>
          <S.TitleBanner>LA MASSA CHEF’S, O MELHOR DO BRASIL</S.TitleBanner>
          <S.SubTitleBanner>
            Venha fazer parte dos maravilhados clientes que já degustaram de
            nossos pratos e sinta a mágica correr por suas bocas!
          </S.SubTitleBanner>
          <Button title="Saiba mais sobre nós" />
        </S.ContentBanner>
      </S.ContainerBanner>
    </>
  );
}

export default Banner;
