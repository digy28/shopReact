//import { Quantity } from './Quantity.jsx'

export function Product(props) {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.product.image} className="card-img-top" alt="Image de" />
            <div className="card-body">
                <h5 className="card-title">{props.product.nom}</h5>
                <p className="card-text">{props.product.prix} €</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}