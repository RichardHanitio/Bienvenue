import styled from "styled-components";
import { centerChildElementsHorizontally } from "../../mixin";

const Container = styled.div`
  background-color : ${({theme}) => theme.adminColor};
  width : 320px;
  height : 320px;
  border-radius : 20px;
  cursor : pointer;
  ${centerChildElementsHorizontally}
  
  .card-inner-container {
    width : 80%;
    height : 80%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    .card-title {
      font-size : 28px;
      font-weight : normal;
    }
    .card-img {
      width : 100px;
      align-self : flex-end;
    }
    .card-details {
      font-size : 20px;
      font-weight : normal;
      align-self : center;
    }
  }
`;

export default Container;