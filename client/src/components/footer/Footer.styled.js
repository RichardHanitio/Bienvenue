import styled from "styled-components";

const Container = styled.div`
  background-color : ${({theme}) => theme.headerColor};
  height : 450px;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  position : relative;
  .footer-inner-container {
    width : 90%;
    height : 90%;
    display : flex;
    color : white;
    .footer-left{
      flex-basis : 30%;
      display : flex;
      flex-direction : column;
      justify-content : space-around;
      .footer-logo {
        width : 50%;
        img {
          width : 100%;
        }
      }
    }
    .footer-right {
      flex-basis : 70%;
      display : flex;
      .footer-menu, .footer-support, .footer-address-operational {
        flex-basis : 25%;
      }
      .footer-address-operational {
        flex-basis : 35%;
      }
    }
    .footer-list {
      list-style-type : none;
      margin-bottom : 30px;
      
      .footer-title {
        font-size : 20px;
        margin-bottom : 25px;
        font-weight : 600;
      }
      li {
        margin : 15px 0;
        display : flex;
        align-items : center;
        .footer-media-logo {
          font-size : 26px;
          margin-right : 5px;
        }
        
        .footer-media-name {
          font-size : 16px;
        }
      }
    }
  }
  .footer-copyright {
    background-color : ${({theme}) => theme.copyrightColor};
    width : 100%;
    position : absolute;
    bottom : 0;
    height : 28px;
    font-size : 14px;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #b8b8b8;
  }
`;

export default Container;