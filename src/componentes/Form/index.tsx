import * as S from './styles';
import FormImage from '../../assets/FormImage.svg';

function About() {
  return (
    <>
      <S.ContainerAbout id="contact">
        <S.TitleService>Contato</S.TitleService>
        <S.ContentAbout>
          {window.innerWidth >= 880 && (
            <S.ContentImage src={FormImage} alt="YoutubeRestaurant" />
          )}
          <S.ContentAboutTitle>
            <S.Input type="text" name="name" id="name" placeholder="Nome" />
            <S.Input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Telefone"
            />
            <S.Input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <S.TextArea placeholder="Mensagem" />
            <S.ButtonSend>
              <S.TitleButtonSend>Enviar</S.TitleButtonSend>
            </S.ButtonSend>
          </S.ContentAboutTitle>
        </S.ContentAbout>
      </S.ContainerAbout>
    </>
  );
}

export default About;
