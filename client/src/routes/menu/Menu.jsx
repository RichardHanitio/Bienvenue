import React, {useState, useEffect} from 'react'

import Container from "./Menu.styled"
import Header from "../../components/header/Header";
import Items from '../../components/items/Items';
import useFetch from "../../hooks/useFetch"

const Menu = () => {
  const [active, setActive] = useState("steak");
  const handleClick = (e) => {
    setActive(e.target.attributes.value.nodeValue)
  }

  const categories = [
    "steak", "spaghetti", "snack", "salad", "drink"
  ]

  return (
    <Container>
      <Header />
      <div className="menu-inner-container">
        <h2 className="menu-title">Menu Pack</h2>
        <div className="menu-categories">
          {
            categories.map((c, i) => (
              <div key={i} className={`menu-category ${active===c ? "active" : ""}`} value={c} onClick={handleClick}>{c}</div>
            ))
          }
        </div>
        <Items active={active}/>
      </div>
    </Container>
  )
}

export default Menu