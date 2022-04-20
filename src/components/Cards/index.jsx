import React from "react";
import {Link} from "react-router-dom";
import Card from "../Card/Card.js";



const Cards = ({goods}) => {
    return (
        <div className="container">
            {goods.map(el => (
                <Link to={"/product/" + el._id} key={el._id}>
                    <Card {...el} key={el._id}/>
                    </Link>
                ))}
        </div>
    )
}

export default Cards;