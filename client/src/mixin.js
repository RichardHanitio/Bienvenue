import { css } from "styled-components";


export const centerChildElementsVertically = () => css`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

export const centerChildElementsHorizontally = () => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;