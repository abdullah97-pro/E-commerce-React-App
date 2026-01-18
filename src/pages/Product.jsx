import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import {addToCart} from "../features/cart/cartSlice";

function Product() {
    const {id} = useParams();
    const dispatch = useDispatch();

    const product = products.find(p => p.id === Number(id));

    if (!product) return <p>Product not found</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>${product.price}</p>

            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
    );
}

export default Product;