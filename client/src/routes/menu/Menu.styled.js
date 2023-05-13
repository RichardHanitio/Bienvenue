import styled from "styled-components";

const Container = styled.div`
  background-color : ${({theme}) => theme.primaryColor};
  min-height : 100vh;
  width : 100%;
  display : flex;
  flex-direction : column;
  align-items : center;

  .menu-inner-container {
    width : 1300px;

    .menu-title {
      font-size : 24px;
      color : white;
      margin : 20px 0 50px 0;
      text-align : center;
    }

    .menu-categories {
      width : 100%;
      display : flex;
      justify-content : space-between;
      align-items : center;
      height : 50px;
      margin : 30px 0 80px 0;

      .menu-category {
        text-transform : uppercase;
        background-color : ${({theme}) => theme.inactiveColor};
        padding : 10px;
        width : 200px;
        text-align : center;
        border-radius : 10px;
        font-weight : 500;
        cursor : pointer;

        &.active {
          background-color : ${({theme}) => theme.activeColor};
          color : ${({theme}) => theme.inactiveColor};
        }
      }
    }
  }
`

export default Container;