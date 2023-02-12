import React from "react";
import "./index.css"

export default function Navbar() {


    return (
        <nav className="navigation">
            <button className="brand-name">
                Super-Future
            </button>
            <div
                className="navigation-menu">
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}