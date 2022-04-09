import React from "react";
import Logo from "../Logo";
import Search from "../Search";

const Header = function({searchText, appHandler}) {
    const searchHandler = inpVal => {
        console.log("header", inpVal);
        appHandler(inpVal);
    }
    return (
        <header>
            <div className="container">
                <Logo />
				<Search searchText={searchText} searchHandler={searchHandler}/>
                <a href=""></a>
                <nav>
                    <a href="">pic 1</a>
                    <a href="">pic 2</a>
                    <a href="">pic 3</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;
