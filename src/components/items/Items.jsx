import React, {useState, useEffect} from 'react'

import Container from "./Items.styled"
import Item from '../item/Item'

const Items = ({datas, active}) => {
  const [filteredData, setFilteredData] = useState(datas);

  useEffect(() => {
    setFilteredData(
      datas.filter((d) => {
        return d.category === active
      })
    )
  }, [active, datas])

  return (
    <Container>
      {
        filteredData.map((d, idx) => (
          <Item data={d} key={idx}/>
        ))
      }
    </Container>
  )
}

export default Items