import React from "react";
import Logo from "../Logo";
import Search from "../Search";
import "./Header.css";
// SPA - Single Page Application - одностраничное приложение
import {Link} from "react-router-dom";
import "./Header.css";


const Header = function({searchText, appHandler, modalActivity, setModalActivity, store}) {
    const searchHandler = inpVal => {
        console.log("header", inpVal);
        appHandler(inpVal);
    }
    const clickHandler = (e) => {
          setModalActivity(!modalActivity);
    }
    let cnt = 0;
    store.forEach(el => {
        cnt += el.cnt || 0;
        
    });
    return (
        <header>
            <div className="container">
                <Logo />
				<Search searchText={searchText} searchHandler={searchHandler}/>
                <nav style={{display: "flex", gap: "10px"}}>
                                       
                    <Link to="/favorites">Избранное</Link>
                    <Link to="/cart" title={cnt}>Корзина</Link>
                    <Link to="/profile">Профиль</Link>
                    <Link to="/login" onClick={clickHandler}>SignIn</Link>
                    <Link to="/signup" onClick={clickHandler}>SignUp</Link>

                </nav>
            </div>
        </header>
    )
}
export default Header;
