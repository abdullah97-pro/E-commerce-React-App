import { Link } from "react-router-dom";

function ProductCard({product}) {
    return(
        <div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View</Link>
        </div>
    );
}

export default ProductCard;