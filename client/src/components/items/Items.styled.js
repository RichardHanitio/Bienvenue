import styled from "styled-components";
import { centerChildElementsHorizontally } from "../../mixin";

const Container = styled.div`
  display : grid;
  grid-template-columns : repeat(3, 1fr);
  justify-items : center;
  align-items : center;
  grid-row-gap : 50px;

  .loader-bg {
    width : 1300px;
    ${centerChildElementsHorizontally}
  }
`;

export default Container;