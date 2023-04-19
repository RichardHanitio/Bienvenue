import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color : ${({ variant, theme }) =>
    variant === "primary" ? theme.activeColor : 
    variant === "danger" ? theme.dangerColor :
    theme.inactiveColor};
  color : ${({ variant }) => 
    (variant === "primary" || variant==="danger" ? "white" : "black")};
  width : ${({ width }) => (width ? width : "auto")};
  height : ${({ height }) => (height ? height : "auto")};

  &:hover {
    background-color : ${({variant, theme}) => 
      variant === "primary" ? theme.activeDarkColor :
      variant === "danger" ? theme.dangerDarkColor :
      theme.activeColor
    };
    color : white;
  }

  &:disabled {
    cursor : default;
    background-color : grey;
  }
`;

export default StyledButton;