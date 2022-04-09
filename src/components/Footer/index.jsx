import React from "react";
import "./index.css";
import Logo from "../Logo";
const Footer = () => {
    return (
        <footer className="container">
            <div className="column">
                <Logo/>
                <div>copy</div>
            </div>
            <ul className="column">
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
            </ul>
            <ul className="column">
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
            </ul>
            <div className="column">
                <div>text</div>
                <div>mail</div>
                <div>phone</div>
                <ul className="soc">
                    <li>soc</li>
                    <li>soc</li>
                    <li>soc</li>
                    <li>soc</li>
                    <li>soc</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;