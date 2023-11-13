import React, { useState } from "react";
import "./Books.css";
import SearchIcon from "../../assets/search.svg";
import BooksArray from "../BookList";
import BookView from "../BookView/BookView";

const Books: React.FC = () => {
	const [selectedBook, setSelectedBook] = useState(null);
	const [BookPopup, setBookView] = useState(false);
	const [allBooks, setAllBooks] = useState(BooksArray);

	const filterBooksByAuthor = (author: any) => {
		if (author.length) {
			const filteredBooks = BooksArray.filter((book) =>
				book.author.toLowerCase().includes(author.toLowerCase()),
			);
			setAllBooks(filteredBooks);
		} else {
			setAllBooks(BooksArray);
		}
	};

	const openPopup = (book: any) => {
		setSelectedBook(book);
		setBookView(true);
	};

	const closePopup = () => {
		setSelectedBook(null);
		setBookView(false);
	};

	const addToCart = (book: any) => {
		const addedItem = localStorage.getItem("addedBooks");
		book.quantity = 1;
		let arr = [{ ...book }];
		if (addedItem) {
			const books = JSON.parse(addedItem);
			books.filter((v: any) => {
				arr.push(v);
				return arr;
			});
		} else {
			arr.push(book);
		}
		arr = arr.filter(
			(obj, index, self) =>
				index === self.findIndex((o) => o.title === obj.title),
		);
		localStorage.setItem("addedBooks", JSON.stringify(arr));
		closePopup();
	};

	const getGenre = (event: any) => {
		if (event !== "") {
			const filteredBooks = BooksArray.filter((v) => v.genre === event);
			setAllBooks(filteredBooks);
		} else {
			setAllBooks(BooksArray);
		}
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
					onChange={(e) => filterBooksByAuthor(e.target.value)}
				/>
				<select
					onChange={(value) => getGenre(value.target.value)}
					name=""
					id=""
				>
					<option value="" defaultValue={""}>
						Select genre
					</option>
					<option value="Fiction">Fiction</option>
					<option value="Romance">Romance</option>
					<option value="Realism">Realism</option>
					<option value="Fantasy">Fantasy</option>
					<option value="Adventure">Adventure</option>
					<option value="Poetry">Poetry</option>
					<option value="Education">Education</option>
				</select>
			</div>
			<div className="available-books">
				<div className="book-container">
					{allBooks.map((book, index) => (
						<div
							key={index}
							className="book-card"
							onClick={() => openPopup(book)}
						>
							<img src={book.imgUrl} alt={`${book.title} cover`} />
							<div className="book-details">
								<div className="book-info">
									<h3>{book.title}</h3>
									<p>{book.author}</p>
								</div>
								<div className="book-price">
									<h2>
										{book.currency}
										{book.price}.00
									</h2>
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
