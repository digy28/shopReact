import { useState } from "react"

export function Quantity() {

const [quantity, setQuantity] = useState(0)

function decrement() {
    if(quantity > 0)
    setQuantity(quantity - 1)
}

function increment() {
    setQuantity(quantity + 1)
}

return (
    <>
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
    </>
    )
}

