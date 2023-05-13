import styled from "styled-components";
import { centerChildElementsHorizontally } from "../../mixin";

const Container = styled.div`
  width : 400px;
  height : 470px;
  background-color : ${({theme}) => theme.adminColor};
  border-radius : 12px;
  margin : 30px 0;
  ${centerChildElementsHorizontally}

  .reservation-card-inner {
    width : 90%;
    height : 90%;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    div {
      font-size : 16px;
    }
    .btn {
      color : white;
    }
    .pending-card-buttons {
      display : flex;
      justify-content : space-around;
    }
  }
`;

export default Container;
