import * as S from './styles';
import Facebook from '../../assets/icons/facebook.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Twitter from '../../assets/icons/Twitter.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';

function About() {
  return (
    <>
      <S.ContainerFooter>
        <S.ContentSocial>
          <S.Title>LA MASSA</S.Title>
          <S.ContentIconsSocial>
            <S.Icon src={Facebook} alt="Icon Facebook" />
            <S.Icon src={Instagram} alt="Icon Facebook" />
            <S.Icon src={Twitter} alt="Icon Facebook" />
          </S.ContentIconsSocial>
        </S.ContentSocial>
        <S.ContentInformation>
          <S.Information>
            Deseja receber informações, cardápios, novidades etc... por e-mail?
          </S.Information>
          <S.InformationSignedNewsletter>
            Assine nossa Newsletter
            <S.IconArrow src={ArrowRight} alt="Icon Facebook" />
          </S.InformationSignedNewsletter>
        </S.ContentInformation>
        <S.ContentNewsletter>
          <S.Title>Newsletter</S.Title>
          <S.ContentInputEmail>
            <S.Input type="text" name="email" id="email" placeholder="E-mail" />
            <S.ButtonSend>
              <S.TitleButtonSend>Entrar</S.TitleButtonSend>
            </S.ButtonSend>
          </S.ContentInputEmail>
        </S.ContentNewsletter>
      </S.ContainerFooter>
    </>
  );
}

export default About;
