import { useContext } from "react"
import { CartContext } from "../Context/CartContex"

const TotalItem = () => {
    const { cart } = useContext(CartContext) || {};

    const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);
    return <span>{itemsQuanty}</span>
}

export default TotalItem