import React, {useState} from "react";
import "./style.css";

const Input = (props) => {
    const [val, setVal] = useState(props.val || "");
    const changeVal = (e) => {
        setVal(e.target.value);
    }

    return (
       <input 
            className="inp"
            name={props.name} 
            placeholder={props.text}
            type={props.type}
            value={val}
            onInput={changeVal}
            /> 
    )
}

export default Input;
