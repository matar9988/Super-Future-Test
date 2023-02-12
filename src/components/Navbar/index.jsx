import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

export default function Navbar() {


    return (
        <nav className="navigation">
            <div className="brand-name">
                Super-Future
            </div>
            <div className="navigation-menu">
                <ul>
                    <li>
                        <Link to="/">Posts List</Link>
                    </li>
                    <li>
                        <Link to="/create-post">Add Post</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}