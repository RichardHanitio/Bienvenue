import React from "react";
import StyledButton from "./Button.styled";

const Button = ({
  className,
  onClick,
  type,
  variant,
  width,
  height,
  value,
  disabled,
  children,
  style,
}) => {
  return (
    <StyledButton
      className={className}
      type={type ? type : "button"}
      onClick={onClick}
      variant={variant}
      width={width}
      height={height}
      value={value}
      disabled={disabled}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
