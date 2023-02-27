import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@font-face {
    font-family: 'Netflix Sans';
    src: url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v2/NetflixSans-Regular.woff2') format('woff2'),
         url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v2/NetflixSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .active{
    margin-right: 0px;
    border-bottom: 3px solid #584afe;
  }

  #app { height: 100% }
  html,
  body {
    position: relative;
    height: 100%;
  }

  body {
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }

  .swiper {
    margin: 0;
    margin-top: 45px;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {

    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {

    display: block;
    width: 100%;
    height: 100%;
    padding-bottom: 80px;
    object-fit: cover;
  }

`;
