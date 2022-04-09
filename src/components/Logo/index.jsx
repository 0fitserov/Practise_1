import React from "react";
import "./index.css";
import logo from "./logo 1.svg";

const Logo = () => {
    return (
        <a href="/" className="logo">
            <img src={logo} alt="Logo" className="logo__pic"/>
        </a>
    )
}

export default Logo;