import styled from "styled-components"
import { centerChildElementsHorizontally, centerChildElementsVertically } from "../../mixin";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryColor};
  ${centerChildElementsVertically}

  .update-menu-inner-container {
    width: 1600px;
    height: 95%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    overflow-x : scroll;
    /* background-color : pink; */

    .update-menu-title {
      font-size : 40px;
      text-transform : uppercase;
      color : ${({theme}) => theme.adminColor};
      text-align : center;
      margin : 20px 0;
    }
  }
`

export default Container;