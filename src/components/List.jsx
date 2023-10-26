import { useState, useEffect } from 'react'
import { Product } from './Product.jsx'


export function List() {

    const [listProducts, setListProducts] = useState([])
    // listProducts = const, setListProducts = valeur après fetch, useState([]) = valeur de base
    useEffect(() => {
        fetch('https://api.npoint.io/68bf5db20a3c236f68ed').then((res)=>res.json()).then(data => setListProducts(data))
    },[]) 
    
    return (
      <>
        {listProducts.map((product, index)=>
          <Product key={index} product={product} />
        )}
      </>
        // props = {product}
    )
  }
  