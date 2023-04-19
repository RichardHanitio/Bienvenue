import styled from "styled-components";

const Container = styled.div`
  background-color : ${({theme}) => theme.headerColor};
  height : 85px;
  width : 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  position : sticky;
  top : 0;
  z-index : 2;

  .header-inner-container {
    height : 80%;
    width : 1400px;
    display : flex;
    align-items : center;

    .header-logo {
      height : 100%;
      flex-basis : 15%;
      img {
        height : 100%;
      }
    }

    .header-pages {
      width : 100%;
      height : 100%;
      display : flex;
      align-items : center;

      .header-nav {
        list-style-type : none;
        display : flex;
        flex-basis : 80%;
        justify-content : space-around;
        li {
          color : white;
          cursor : pointer;
        }
      }
      
      .header-register-login {
        flex-basis : 20%;
        display : flex;
        justify-content : space-around;
      }
    }
  }
`

export default Container;