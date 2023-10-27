import { Product } from './Product.jsx'

export function List(props) {

    
    //res = resultat mais on peut mettre ce qu'on veut à la place
    return (
      <>
        {props.listProducts.map((product, index)=>
          <Product key={index} product={product} />
        )}
      </>
        // props = {product}
    )
  }
  