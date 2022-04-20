import React, {useState, useEffect} from "react";
import api from "../Api";
import Counter from "../components/Counter";
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
                <div>
                    <h1>{product.name || "нет ифнформации от товаре"}</h1>
                    <h5>Артикул {product._id}</h5>
                </div>

                <div className="product-mainInfo">
                    <div className="product__pic" style={product.pictures && {backgroundImage: `url(${product.pictures})`}}></div>
                    <div className="product-otherInfo">
                        <div><h1>{product.price + " ₽"}</h1></div>
                        <div className="cartInfo">
                            <div className="counetrCart"><Counter/></div>
                            <button className="btn yellow" onClick={setCart}><b>В корзину</b></button>
                        </div>
                        <div><h4>В избранное</h4></div>
                        <div className="supportInfo"><h4>Доставка по всему Миру!</h4></div>
                        <div className="supportInfo"><h4>Гарантия качества!</h4></div>
                    </div>
                    
                </div>

                <div>
                    <h3>Описание</h3>
                    <p>{product.description}</p>
                </div>
                <div>
                    <h3>Характеристики</h3>
                    <p>{product.description}</p>
                </div>
                <div>
                    <h3>Отзывы</h3>
                    <p>пусто</p>
                </div>
            </div>
       </div>
    )
}

export default Page;