// import CardImageChef1 from "../../assets/CardImageChef1.svg";
// import CardImageChef2 from "../../assets/CardImageChef2.svg";
// import CardImageChef3 from "../../assets/CardImageChef3.svg";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import * as S from "./styles";

function Chefs() {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  //   { width: 850, itemsToShow: 3 },
  //   { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
  //   { width: 1450, itemsToShow: 3 },
  //   { width: 1750, itemsToShow: 3 },
  // ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const sliderImageUrl = [
    //First image url
    {
      url:
        "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
    },
    {
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
    },
    //Second image url
    {
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
    },
    //Third image url
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
    },
  
    //Fourth image url
  
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
    }
  ];
  return (
    <>
      <S.ContainerRestaurantUnit>
        <S.TitleRestaurantUnit>Nossos Chef's</S.TitleRestaurantUnit>
        {/* <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
          <S.CardChefProfile>
            <S.ContentImageProfile>
              <img src={CardImageChef1} alt="" />
            </S.ContentImageProfile>
            <S.ContentTextProfile>
              <S.TitleNameChef>Alex Atala</S.TitleNameChef>
              <S.SubTitleChef>CHEF</S.SubTitleChef>
              <S.DescriptionProfileChef>
                Nosso capitão! Com mais de 25 anos de experiência, chef Alex vem
                comandando a cozinha e fazendo mágica.
              </S.DescriptionProfileChef>
            </S.ContentTextProfile>
            <S.Divider />
            <S.ContentSocialProfileChef>
              <S.IconInstagram />
              <S.IconLinkldin />
              <S.IconFacebook />
            </S.ContentSocialProfileChef>
          </S.CardChefProfile>

          <S.CardChefProfile>
            <S.ContentImageProfile>
              <img src={CardImageChef2} alt="" />
            </S.ContentImageProfile>
            <S.ContentTextProfile>
              <S.TitleNameChef>Janaína Rueda</S.TitleNameChef>
              <S.SubTitleChef>CHEF</S.SubTitleChef>
              <S.DescriptionProfileChef>
                Criadora do nosso prato mais famoso, chef Janaína é a
                responsável pela nossa deliciosa mesa de frios.
              </S.DescriptionProfileChef>
            </S.ContentTextProfile>
            <S.Divider />
            <S.ContentSocialProfileChef>
              <S.IconInstagram />
              <S.IconLinkldin />
              <S.IconFacebook />
            </S.ContentSocialProfileChef>
          </S.CardChefProfile>

          <S.CardChefProfile>
            <S.ContentImageProfile>
              <img src={CardImageChef3} alt="" />
            </S.ContentImageProfile>
            <S.ContentTextProfile>
              <S.TitleNameChef>Juan Roca</S.TitleNameChef>
              <S.SubTitleChef>CHEF</S.SubTitleChef>
              <S.DescriptionProfileChef>
                O gigante Juan! Dono do melhor hambúrguer da América Latina e da
                barba mais invejada da cozinha.
              </S.DescriptionProfileChef>
            </S.ContentTextProfile>
            <S.Divider />
            <S.ContentSocialProfileChef>
              <S.IconInstagram />
              <S.IconLinkldin />
              <S.IconFacebook />
            </S.ContentSocialProfileChef>
          </S.CardChefProfile>
        </Carousel> */}

<div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {/* {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })} */}
        <div>Item'1</div>
        <div>Item'1</div>
        <div>Item'1</div>
        <div>Item'1</div>
        <div>Item'1</div>
        <div>Item'1</div>
        <div>Item'1</div>
      </Carousel>
    </div>
      </S.ContainerRestaurantUnit>
    </>
  );
}

export default Chefs;
