import {styled} from "@mui/system"
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

export const HeaderAppBar = styled(AppBar)({
  maxHeight : 90, 
  display : "flex", 
  justifyContent : "center", 
  alignItems : "center"
})

export const HeaderButton = styled(Button)(({type, theme}) => ({
  margin : "10px 15px",
  display : "block",
  backgroundColor : type==="login" && "white",
  color : type==="register" && "white",
  '&:hover' : {
    backgroundColor : type==="login" && "#B5B5B5"
  }
}))

export const HeaderMobileButton = styled(Button)(({theme}) => ({
  fontSize : 10,
  color : "white",
  padding : 5,
}))

export const HeaderListButton = styled(Button)(({theme}) => ({
  margin : "20px 0",
  display : "block",
  fontSize : "16px",
  color : "white"
}))