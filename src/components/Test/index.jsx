import React, {useState} from "react";

const Test = () => {
	const [text, updateText] = useState("");

	const handler = (e) => {
		let el = e.target;
		if (el.nodeName === "INPUT") {
			updateText(e.target.value);
		} else {
			updateText("Ooops");
		}
	}
	const focused = (e) => {
		e.target.value = "";
	}

	return (
		<>
			<input type="text" onInput={handler} onFocus={focused}/>
			{/*<input type="text"/>*/}
			<button onClick={handler}>Click</button>
			<p>{text}</p>
		</>
	)
}
export default Test;
