import styled from "styled-components"

const Container = styled.div`
  min-height : 100vh;
  width : 100vw;
  background-color : ${({theme}) => theme.primaryColor};
  
`;

export default Container;