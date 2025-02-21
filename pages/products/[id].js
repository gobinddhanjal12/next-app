import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const paths = data.products.map((product) => ({
        params: { id: product.id.toString() }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const product = data.products.find((p) => p.id.toString() === params.id);

    return { props: { product } };
}

export default function ProductDetail({ product }) {
    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p><strong>Price:</strong> ₹{product.price.toLocaleString("en-IN")}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Rating:</strong> ⭐{product.rating}</p>
            <p><strong>Added on:</strong> {product.addedDate}</p>
            <p>{product.description}</p>
        </div>
    );
}
