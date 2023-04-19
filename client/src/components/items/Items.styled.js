import styled from "styled-components";

const Container = styled.div`
  display : grid;
  grid-template-columns : repeat(3, 1fr);
  justify-items : center;
  align-items : center;
  grid-row-gap : 50px;
`;

export default Container;