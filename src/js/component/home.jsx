import React from "react";
import Navbar from "./nav.jsx"
import Jumbotron from "./Jumbotron.jsx"
import Card from "./Card.jsx"
import Footer from "./Footer.jsx"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<div id="Nav">
			<Navbar/>
		</div>
        <div id="Body" className="container">
			<Jumbotron/>
			<Card/>
		</div>
        <div id="Footer">
			<Footer/>
		</div>
		</>
	);
};

export default Home;
