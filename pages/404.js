import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
    const [countdown, setCountdown] = useState(5);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [router]);

    return (
        <div style={{
            textAlign: 'center', padding: '50px'
        }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Redirecting to homepage in <strong>{countdown}</strong> seconds...</p>
        </div>
    );
}
