import styled from "styled-components";

const Container = styled.div`
  background-color : ${({theme}) => theme.headerColor};
  height : 85px;
  width : 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  position : sticky;

  .header-inner-container {
    height : 80%;
    width : 1300px;
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
      flex-basis : 85%;
      ul {
        list-style-type : none;
        display : flex;
        justify-content : space-between;
        li {
          color : white;

        }
      }
    }
  }
`

export default Container;