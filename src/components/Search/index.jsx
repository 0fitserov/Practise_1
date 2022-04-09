import React, {useState} from "react";
import "./index.css";
import close from "./img/ic-close-input.svg";
import srch from "./img/ic-search.svg";
const Search = ({searchText, searchHandler}) => {
	const [text, setText] = useState(searchText);
	const handleInput = e => {
		setText(e.target.value);
		searchHandler(e.target.value);
	}
	// text = setText(newText)
	return (
		<form className="search">
			<input
				type="text"
				placeholder="Поиск"
				className={"search__input"}
				// defaultValue={text}
				value={text}
				onInput={handleInput}
			/>
			<button className="search__btn">
				{ text === "" ? <img src={srch}/> : <img src={close}/> }
			</button>
		</form>
	)
}

export default Search;
