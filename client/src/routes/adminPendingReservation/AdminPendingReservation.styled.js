import styled from "styled-components"
import { centerChildElementsHorizontally, centerChildElementsVertically } from "../../mixin";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryColor};
  ${centerChildElementsVertically}

  .pending-inner-container {
    width: 1400px;
    height: 95%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;

    .pending-title {
      font-size : 40px;
      text-transform : uppercase;
      color : ${({theme}) => theme.adminColor};
      text-align : center;
      margin : 20px 0;
    }

    .pending-cards {
      width : 100%;
      height : 85%;
      display : flex;
      justify-content : space-around;
      flex-wrap : wrap;
    }
  }
`

export default Container;