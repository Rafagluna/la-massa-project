import * as S from './styles';
import Photo1 from '../../assets/Photo 1.svg';
import Photo2 from '../../assets/Photo 2.svg';
import Photo3 from '../../assets/Photo 3.svg';
import Photo4 from '../../assets/Photo 4.svg';
import Photo5 from '../../assets/Photo 5.svg';
import Photo6 from '../../assets/Photo 6.svg';

function Banner() {
  return (
    <>
      {/* <S.GridContainer>
        <S.GridContentPrimary>
          <img src={Photo6} className="grid-item item-1" alt="Photo1" />
          <img src={Photo5} className="grid-item item-2" alt="Photo1" />
          <img src={Photo2} className="grid-item item-3" alt="Photo1" />
        </S.GridContentPrimary>

        <S.GridContentSecondary>
          <img src={Photo4} className="grid-item item-4" alt="Photo1" />
          <img src={Photo3} className="grid-item item-5" alt="Photo1" />
          <img src={Photo1} className="grid-item item-6" alt="Photo1" />
        </S.GridContentSecondary>
      </S.GridContainer> */}
      <S.GridContainer>
        <ul>
          <li>
            <a href="">
              <figure>
                <img
                  src={Photo6}
                  alt="Volcano and lava field against a stormy sky"
                />
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img
                  src={Photo5}
                  alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                />
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img
                  src={Photo2}
                  alt="Person standing alone in a misty forest"
                />
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img
                  src={Photo4}
                  alt="Person hiking on a trail through mountains while taking a photo with phone"
                />
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img
                  src={Photo3}
                  alt="Street scene with person walking and others on motorbikes, all wearing masks"
                />
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img
                  src={Photo1}
                  alt="Fashionable-looking girl with blond hair and pink sunglasses"
                />
              </figure>
            </a>
          </li>
        </ul>
      </S.GridContainer>
    </>
  );
}

export default Banner;
