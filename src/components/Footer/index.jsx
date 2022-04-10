import React from "react";
import "./index.css";
import Logo from "../Logo";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="container">
            <div className="column">
                <Logo/>
                <div>©DogFood.com</div>
            </div>
            
            <ul className="column">
                   <li><Link to="/catalog">Каталог</Link></li>
                   <li><Link to="/product">Товар</Link></li>
                   <li><Link to="/contacts">Контакты</Link></li>
            </ul>
            <div className="column">
                <div>text</div>
                <div>dogfood@mail.ru</div>
                <div>+7 (999) 999-88-77</div>
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