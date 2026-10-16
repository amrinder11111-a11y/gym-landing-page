import React from 'react'

const Product = ({productname,price,description}) => {
  return (
    <div>
        <h1>{productname}</h1>
             <h1>{price}</h1>
                  <h1>{description}</h1>
      
    </div>
  )
}

export default Product
