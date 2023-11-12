import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />\
				<Route path="/books" element={<Books />} />
			</Routes>
		</div>
	);
}

export default App;
