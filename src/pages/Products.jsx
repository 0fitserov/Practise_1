import React, {useState, useEffect} from "react";
import api from "../Api";
import {useParams} from "react-router-dom";

const Page = (props) => {
    const {id} = useParams();
    const [product, getProduct] = useState({});
    useEffect(() => {
		api.getSingleProduct(id).then(ans => {
			console.log(ans);
            getProduct(ans);
		});
	}, []);

    const setCart = (e) => {
        let arr = [...props.store];
        let flag = true;
        console.log("id", id);
        arr.forEach(el => {
            if (el.id === id) {
                el.cnt++;
                flag = false;
            }
        })
        if (flag) {
           arr.push({id: id, cnt: 1});
        }
        props.updateStore(arr);
            // Если в массиве есть объект с id равное id страницы, мы его увеличиваем на 1
            
    }



    return (
       <div>
            <div className="product-container">
                <div className="product__pic" style={product.pictures && {backgroundImage: `url(${product.pictures})`}}></div>
                <div>
                    <h1>{product.name || "нет ифнформации от товаре"}</h1>
                    <button onClick={setCart}>Добавить в корзину</button>
                </div>
            </div>
       </div>
    )
}

export default Page;