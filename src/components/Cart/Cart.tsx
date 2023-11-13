import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart: React.FC = () => {
	const [cartItems, setCartItems] = useState([]);
	const [currentTotal, setTotalAmount] = useState(0);

	const changeQuantity = (operation: string, book: any) => {
		const currentBookValue: any = cartItems.map((v: any) => {
			if (v.title === book.title && operation === "-") {
				v.quantity = v.quantity > 0 ? v.quantity - 1 : 0;
				return v;
			}
			if (v.title === book.title && operation === "+") {
				v.quantity = v.quantity ? v.quantity + 1 : 1;
				return v;
			} else return v;
		});

		const totalPrice = currentBookValue
			.map((book: any) => book.price * (book.quantity ?? 1))
			.reduce((a: any, b: any) => a + b, 0);

		setTotalAmount(totalPrice);
		const stringfyValue = JSON.stringify(currentBookValue);
		localStorage.setItem("addedBooks", stringfyValue);
		setCartItems(currentBookValue);
	};

	useEffect(() => {
		const getAddedBooks = localStorage.getItem("addedBooks");
		let cartBooks;
		if (getAddedBooks) {
			cartBooks = JSON.parse(getAddedBooks);

			const totalPrice = cartBooks
				.map((book: any) => book.price * (book.quantity ?? 1))
				.reduce((a: any, b: any) => a + b, 0);

			setTotalAmount(totalPrice);
		} else {
			cartBooks = [];
		}
		setCartItems(cartBooks);
	}, []);

	return (
		<div className="books-container">
			<h1>
				Happy <span className="home-text-highlight">Ordering!</span>
			</h1>
			<div className="cart-container">
				<div className="cart-summary">
					<p className="items">Items</p>
					{cartItems && cartItems.length ? (
						cartItems.map((book: any, index) => (
							<div className="cart-item" key={index}>
								<div className="items-container">
									<p className="index">{index + 1}.</p>
									<img src={book.imgUrl} alt="" />
									<div className="book-summary-list">
										<p className="price">
											{book.currency}
											{book.price}.00
										</p>
										<p>{book.title}</p>
										<p className="author">{book.author}</p>
										<div className="manage-quantity">
											<button onClick={() => changeQuantity("-", book)}>
												-
											</button>
											<input
												disabled
												type="number"
												value={book.quantity ?? 1}
												max={9}
											/>
											<button onClick={() => changeQuantity("+", book)}>
												+
											</button>
										</div>
									</div>
								</div>
							</div>
						))
					) : (
						<div className="empty-state">
							<p>No books added to cart</p>
						</div>
					)}
				</div>

				<div className="cart-price">
					<p className="items">Summary</p>
					<div className="table-header">
						<label className="serial">S.No</label>
						<label>Item price</label>
						<label>Qty.</label>
						<label className="table-header-amount">Amount</label>
					</div>
					<div className="price-summary">
						{cartItems && cartItems.length ? (
							cartItems.map((book: any, index) => (
								<div className="cart-item" key={index}>
									<div className="cart-summary-list">
										<p className="index">{index + 1}.</p>
										<p className="price">
											{book.currency}
											{book.price}.00
										</p>
										<p className="qty">{book.quantity ?? 1}</p>
										<p className="amount">
											{book.currency}
											{book.price * (book.quantity ?? 1) ?? 0}.00
										</p>
									</div>
								</div>
							))
						) : (
							<></>
						)}
					</div>

					{cartItems.length ? (
						<div className="total-amount-container">
							<p>Total Amount</p>
							<p className="total-amount">${currentTotal}</p>
						</div>
					) : (
						<div className="empty-state-1">
							<p>No books added to cart</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Cart;
