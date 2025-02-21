import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    return {
        props: { about: data.about }
    };
}

export default function About({ about }) {
    return (
        <div className="about-container">
            <h1>{about.title}</h1>
            <p>{about.description}</p>
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> {about.contact.email}</p>
            <p><strong>Phone:</strong> {about.contact.phone}</p>
            <p><strong>Address:</strong> {about.contact.address}</p>
        </div>
    );
}
