import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import ProductCard from '../components/ProductCard';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    return {
        props: { products: data.products }
    };
}

export default function Products({ products }) {
    const router = useRouter();

    const handleCardClick = (id) => {
        router.push(`/products/${id}`);
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Our Products</h1>
            <div style={{
                display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px"
            }}>
                {products.map(product => (
                    <div key={product.id} onClick={() => handleCardClick(product.id)}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
