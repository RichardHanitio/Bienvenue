import React, {useState, useEffect, useContext} from 'react'

import {Container} from "@mui/material"
import {useTheme} from "@mui/material/styles"

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MenuMobile from './Menu.mobile';
import MenuDesktop from './Menu.desktop';
import useWindowSize from '../../hooks/useWindowSize';
import useFetch from "../../hooks/useFetch"
import { AuthContext } from '../../context/AuthContext';


const Menu = () => {
  const [active, setActive] = useState("steak");
  const isDesktopDisplay = useWindowSize();
  const {loading, data, error} = useFetch("/menus");
  const [filteredData, setFilteredData] = useState(null);
  const {user} = useContext(AuthContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const theme = useTheme();

  useEffect(() => {
    (!loading && !error) && setFilteredData(
      data.data.filter((d) => {
        return d.category === active
      })
    )
  }, [active, data, loading, error])

  useEffect(() => {
    user===null ? setIsLoggedIn(false) : setIsLoggedIn(true);
  }, [user])

  const categories = [
    "steak", "spaghetti", "snack", "salad", "drink"
  ]

  const props = {
    isLoggedIn, loading, categories, active, setActive, filteredData, menuLoadingError:error
  }

  return (
    <>
      <Header />
      <Container fixed sx={{backgroundColor : theme.palette.primary.main, minHeight : "100vh", minWidth : "100vw", display : "flex", flexDirection : "column", alignItems : "center"}}>
        {isDesktopDisplay ?  <MenuDesktop {...props}/> : <MenuMobile {...props} /> }
      </Container>
      <Footer />
    </>
  )
}

export default Menu