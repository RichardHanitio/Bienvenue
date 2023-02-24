import styled from "styled-components"

const Container = styled.div`
  height : 100vh;
  width : 100vw;
  background-color : ${({theme}) => theme.primaryColor};
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  
  .home-inner-container {
    width : 1400px;
    height : 90%;
    color : white;
  
    .home-part-1 {
      display : flex;
      justify-content : center;
      height : 500px;
      &-left {
        background-color : blue;
        height : 100%;
        display : flex;
        flex-direction : column;
        justify-content : space-around;

        .home-part-1-title {
          font-size : 30px;
        }
      }
    }
  }
`;

export default Container;