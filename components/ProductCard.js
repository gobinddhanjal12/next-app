export default function ProductCard({ product }) {
    return (
        <div className="card">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} width="200" />
            <p><strong>Price:</strong> ₹{product.price.toLocaleString("en-IN")}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Rating:</strong> ⭐{product.rating}</p>
        </div>
    );
}
