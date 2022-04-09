import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header.jsx';
import Cards from "./components/Cards";
import Footer from "./components/Footer";
// import Test from "./components/Test";
import api from "./Api.js";
// import data from "./data.json";
import SearchInfo from './components/SearchInfo/index.jsx';

function App () {
	const [searchText, setSearch] = useState("");
	const [data, setData] = useState([]);
	const [goods, setGoods] = useState(data);
	const [cnt, setSearchCnt] = useState(0);

	const search = val => {
		console.log("App", val);
		setSearch(val);
		const newCards = data.filter(el => el.name.toLowerCase().includes(val.toLowerCase()));
		setGoods(newCards);
		setSearchCnt(newCards.length);
	}

	useEffect(() => {
		api.getProductList().then(ans => {
			console.log(ans[0]);
			setData(ans);
			setGoods(ans);
		});
	}, []);

	return <>
		<Header searchText={searchText} appHandler={search}/>
		<SearchInfo text={searchText} cnt={cnt}/>
		<Cards goods={goods}/>
		<Footer/>
	</>
}

export default App;
