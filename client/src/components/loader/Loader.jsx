import React from 'react'
import {ThreeDots} from "react-loader-spinner"

const Loader = ({className, height, width, color}) => {
  return (
    <div className={className}>
      <ThreeDots 
        height={height ? height : "80"}  
        width={width ? width : "80"} 
        radius="9"
        color={color ? color : "pink"} 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  )
}

export default Loader