import React, { useState } from "react";
import "./Books.css";
import SearchIcon from "../../assets/search.svg";
import BooksArray from "../BookList";
import BookView from "../BookView/BookView";

const Books: React.FC = () => {
	const [selectedBook, setSelectedBook] = useState(null);
	const [BookPopup, setBookView] = useState(false);

	const openPopup = (book: any) => {
		console.log(book);
		setSelectedBook(book);
		setBookView(true);
	};

	const closePopup = () => {
		setSelectedBook(null);
		setBookView(false);
	};

	const addToCart = (book: any) => {
		// Implement the logic to add the book to the cart
		console.log("Adding to cart:", book.title);
		closePopup(); // Close the popup after adding to the cart (you can modify this behavior)
	};

	return (
		<div className="books-container">
			<h1>
				Welcome to the <span className="home-text-highlight">Book Store!</span>
			</h1>
			<div className="filter-fields">
				<img src={SearchIcon} alt="" />
				<input
					type="text"
					name=""
					id="search-field"
					placeholder="Search by author name..."
				/>
				<select name="" id="">
					<option value="" selected>
						Select genre
					</option>
					<option value="">Fiction</option>
					<option value="">Non-Fiction</option>
					<option value="">Biography</option>
					<option value="">Education</option>
					<option value="">Self Help</option>
				</select>
			</div>
			<div className="available-books">
				<div className="book-container">
					{BooksArray.map((book, index) => (
						<div
							key={index}
							className="book-card"
							onClick={() => openPopup(book)}
						>
							<img src={book.imgUrl} alt={`${book.title} cover`} />
							<div className="book-details">
								<div className="book-info">
									<h3>{book.title}</h3>
									<p>Author: {book.author}</p>
								</div>
								<div className="book-price">
									<h2>$11.00</h2>
								</div>
								{/* <p>Genre: {book.genre}</p> */}
								{/* <p>{book.description}</p> */}
							</div>
						</div>
					))}
				</div>
				{BookPopup ? (
					<div className="selected-book">
						<BookView
							book={selectedBook}
							onClose={closePopup}
							onAddToCart={addToCart}
						/>
					</div>
				) : (
					<></>
				)}
				{BookPopup ? (
					<div className="overlay" onClick={closePopup}></div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default Books;
