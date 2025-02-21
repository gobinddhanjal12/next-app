"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="logo">
                    MyWebsite
                </Link>

                <nav className={`nav-links ${isOpen ? "open" : ""}`}>
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

                </nav>

                <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>☰</button>
            </div>
        </header>
    );
}
