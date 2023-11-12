import React from "react";
import "./BookView.css";

interface BookViewEntities {
	book: any;
	onClose: any;
	onAddToCart: any;
}

const BookPopup: React.FC<BookViewEntities> = ({
	book,
	onClose,
	onAddToCart,
}) => {
	return (
		<div className="popup">
			<div className="popup-content">
				<span className="close-btn" onClick={onClose}>
					&times;
				</span>
				<div className="popup-details">
					<img src={book.imgUrl} alt={`${book.title} cover`} />
					<div className="popup-book-details">
						<h2>{book.title}</h2>
						<div className="popup-book-info">
							<p className="author">Author: {book.author}</p> |
							<p className="genre">Genre: {book.genre}</p>
						</div>
						<p className="description">{book.description}</p>
						<button onClick={() => onAddToCart(book)}>Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookPopup;
