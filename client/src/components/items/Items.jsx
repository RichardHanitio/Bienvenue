import React, {useState, useEffect} from 'react'
import Container from "./Items.styled"
import Item from '../item/Item'
import useFetch from "../../hooks/useFetch";
import Loader from '../loader/Loader';

const Items = ({active}) => {
  const [filteredData, setFilteredData] = useState([]);
  const {loading, data, error} = useFetch("/menus");

  useEffect(() => {
    !loading && setFilteredData(
      data.data.filter((d) => {
        return d.category === active
      })
    )
  }, [active, data, loading])

  return (
    <Container>
      {
        !loading ?
          filteredData.map((d, idx) => (
            <Item data={d} key={d._id}/>
          ))
        : <Loader className="loader-bg" color="white"/>
      }
    </Container>
  )
}

export default Items