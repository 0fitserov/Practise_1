import React, {useState} from "react";
import './style.css';

const Counter = () => {
    const [count, updateCnt] = useState(0);
    const countDec = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        updateCnt(count - 1) 
    };
    const countInc = (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateCnt(count + 1)
    };
    return <>
        <button className="btnCounter" onClick={countDec}>-</button>
        {count}
        <button className="btnCounter" onClick={countInc}>+</button>
    </>
}
export default Counter;