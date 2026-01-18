import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
    return (
        <div>
            <h2>Products</h2>
            {
                products.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))
            }
        </div>
    );
}

export default Home;