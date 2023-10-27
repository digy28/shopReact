import { useState, useEffect } from 'react'
import { List } from './components/List.jsx'

function App() {

  const [listProducts, setListProducts] = useState([])
  const [selected, setSelected] = useState([])
    // listProducts = const, setListProducts = valeur après fetch, useState([]) = valeur de base
    useEffect(() => {
        fetch('https://api.npoint.io/68bf5db20a3c236f68ed')
        .then((res)=>res.json())
        .then(data => setListProducts(data))
    },[])

    function selectedProduct(product) {
      selected.push(product)
    }
  
  return (
    <>
      <h1>Coucou</h1>
      <List listProducts={listProducts}/>
      <Cart listProducts={selected}/>
    </>
  )
}

export default App