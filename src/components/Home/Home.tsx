import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/7645190-removebg-preview.png";
import "./Home.css";

const Home: React.FC = () => {
	return (
		<div className="home-page-container">
			<div>
				<h1>
					Welcome to the{" "}
					<span className="home-text-highlight">React Library!</span>
				</h1>
				<p className="home-content">
					Dive into captivating stories with our React bookstore app! Explore
					curated genres, discover featured books, and enjoy seamless navigation
					for a delightful reading experience.
				</p>
				<button>
					<Link to="/books">View Books</Link>
				</button>
			</div>
			<img src={HeroImage} alt="" />
			<div className="featured_book">
				<h2>Clean Code</h2>
				<p>
					<span>Author:</span> Robert C. Martin
				</p>
				<p>
					Even bad code can function. But if code isn't clean, it can bring a
					development organization to its knees. Every year, countless hours and
					significant resources are lost because of poorly written code. But it
					doesn't have to be that way.
				</p>
			</div>
		</div>
	);
};

export default Home;
