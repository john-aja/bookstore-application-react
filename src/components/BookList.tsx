const BooksArray = [
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		genre: "Fiction",
		imgUrl:
			"https://epqkkxb65h3.exactdn.com/wp-content/uploads/2023/02/m-2908.jpg?strip=all&lossy=1&resize=430%2C600&ssl=1",
		description:
			'Set in the American South during the 1930s, "To Kill a Mockingbird" is a poignant exploration of racial injustice and the moral growth of the young Scout Finch. The novel unfolds as her father, lawyer Atticus Finch, defends a black man accused of raping a white woman. Through the eyes of Scout, readers witness the impact of racism, empathy, and the search for truth. Harper Lee’s masterpiece remains a timeless and powerful commentary on society.',
	},
	{
		title: "1984",
		author: "George Orwell",
		genre: "Dystopian Fiction",
		imgUrl:
			"https://m.media-amazon.com/images/I/71NvkZxn-fL._AC_UF1000,1000_QL80_.jpg",
		description:
			'George Orwell’s "1984" is a chilling exploration of a dystopian future where totalitarianism reigns supreme. Set in Airstrip One (formerly known as Great Britain) within the superstate Oceania, the novel follows Winston Smith as he rebels against the oppressive Party led by Big Brother. Orwell’s narrative warns against the dangers of surveillance, thought control, and the manipulation of truth. "1984" remains a thought-provoking classic with enduring relevance.',
	},
	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		genre: "Classic Fiction",
		imgUrl:
			"https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
		description:
			'F. Scott Fitzgerald’s "The Great Gatsby" is a captivating portrayal of the Jazz Age in the 1920s. The novel follows the mysterious millionaire Jay Gatsby and his pursuit of the elusive Daisy Buchanan. Through themes of decadence, idealism, and excess, Fitzgerald paints a vivid picture of the Roaring Twenties. The story explores the American Dream and the disillusionment that often accompanies it. "The Great Gatsby" remains a timeless exploration of the human condition.',
	},
	{
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		genre: "Coming-of-Age Fiction",
		imgUrl:
			"https://m.media-amazon.com/images/I/814ZhvhJ-bL._AC_UF894,1000_QL80_.jpg",
		description:
			'J.D. Salinger’s "The Catcher in the Rye" is a classic coming-of-age novel that follows the journey of Holden Caulfield. Expelled from his prep school, Holden wanders around New York City, grappling with adolescence, identity, and the complexities of the adult world. Salinger’s narrative captures the angst and alienation of youth, making "The Catcher in the Rye" an enduring and influential work of literature.',
	},
	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		genre: "Romance",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
		description:
			'Jane Austen’s "Pride and Prejudice" is a timeless romance novel that unfolds in the early 19th century. The story revolves around the witty and independent Elizabeth Bennet as she navigates societal expectations and love. As Elizabeth encounters the enigmatic Mr. Darcy, the novel explores themes of class, manners, and the pursuit of happiness. Austen’s keen observations and social commentary have solidified "Pride and Prejudice" as a classic in English literature.',
	},
	{
		title: "One Hundred Years of Solitude",
		author: "Gabriel García Márquez",
		genre: "Magical Realism",
		imgUrl:
			"https://m.media-amazon.com/images/I/71IWwBoDNsL._AC_UF1000,1000_QL80_.jpg",
		description:
			'Gabriel García Márquez’s "One Hundred Years of Solitude" is a masterful work of magical realism that unfolds in the fictional town of Macondo. The novel chronicles the multi-generational saga of the Buendía family, blending history, myth, and reality. Márquez’s prose weaves a rich tapestry of love, politics, and the passage of time. "One Hundred Years of Solitude" stands as a literary landmark, captivating readers with its enchanting narrative.',
	},

	{
		title: "Brave New World",
		author: "Aldous Huxley",
		genre: "Dystopian Fiction",
		imgUrl:
			"https://www.literaryretreat.com/wp-content/uploads/2018/02/Brave-New-World-Cover.jpg",
		description:
			'Aldous Huxley’s "Brave New World" presents a dystopian vision of a future society where science and technology control every aspect of human life. Set in a world of genetic engineering, psychological conditioning, and rigid social hierarchy, the novel explores the consequences of sacrificing individuality for societal stability. Huxley’s thought-provoking narrative challenges notions of freedom, happiness, and the price of progress.',
	},
	{
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		imgUrl:
			"https://m.media-amazon.com/images/I/A1E+USP9f8L._AC_UF1000,1000_QL80_.jpg",
		genre: "Fantasy",
		description:
			'J.R.R. Tolkien’s "The Hobbit" takes readers on an epic journey through Middle-earth. The story follows Bilbo Baggins, a hobbit who reluctantly embarks on an adventure to reclaim a treasure guarded by the fearsome dragon Smaug. Along the way, Bilbo encounters elves, dwarves, and the mysterious Gollum. Tolkien’s richly imagined world, filled with magic and mythical creatures, has captivated readers of all ages for generations.',
	},
	{
		title: "Moby-Dick",
		author: "Herman Melville",
		genre: "Adventure",
		imgUrl:
			"https://rukminim1.flixcart.com/image/850/1000/xif0q/book/a/a/z/moby-dick-original-imagrvh8brprpsnj.jpeg?q=90",
		description:
			'Herman Melville’s "Moby-Dick" is a literary classic that explores the obsessions and complexities of the human spirit. The novel follows Captain Ahab’s relentless pursuit of the elusive white whale, Moby Dick, and delves into themes of revenge, fate, and the struggle between man and nature. Melville’s prose, infused with symbolism and philosophical depth, has solidified "Moby-Dick" as a cornerstone of American literature.',
	},
	{
		title: "The Lord of the Rings",
		author: "J.R.R. Tolkien",
		imgUrl:
			"https://m.media-amazon.com/images/I/71VjmMcE-rL._AC_UF894,1000_QL80_.jpg",
		genre: "Fantasy",
		description:
			'J.R.R. Tolkien’s "The Lord of the Rings" is an epic fantasy trilogy that unfolds in the mythical world of Middle-earth. The story follows the quest to destroy the One Ring and defeat the dark lord Sauron. With a diverse cast of characters, intricate world-building, and themes of friendship and heroism, Tolkien’s magnum opus has become a foundational work in the fantasy genre, enchanting readers worldwide.',
	},
	{
		title: "Jane Eyre",
		author: "Charlotte Brontë",
		genre: "Gothic Fiction",
		imgUrl:
			"https://cdn.kobo.com/book-images/df8380db-fd22-49b6-ad29-97ba56a5d7f6/1200/1200/False/jane-eyre-351.jpg",
		description:
			'Charlotte Brontë’s "Jane Eyre" is a Gothic novel that tells the story of the orphaned and mistreated Jane as she rises above adversity. From her challenging childhood to her experiences as a governess, Jane’s journey is one of resilience and self-discovery. Brontë’s exploration of societal expectations, morality, and the pursuit of love has made "Jane Eyre" a classic of English literature.',
	},
	{
		title: "Crime and Punishment",
		author: "Fyodor Dostoevsky",
		genre: "Psychological Fiction",
		imgUrl:
			"https://m.media-amazon.com/images/I/81qk21S0qVL._AC_UF1000,1000_QL80_.jpg",
		description:
			'Fyodor Dostoevsky’s "Crime and Punishment" is a psychological thriller that delves into the tormented mind of Rodion Raskolnikov. Driven by a theory of moral superiority, Raskolnikov commits a heinous crime and grapples with the consequences. The novel explores themes of guilt, redemption, and the complexities of the human psyche. Dostoevsky’s probing narrative has secured "Crime and Punishment" as a seminal work in Russian literature.',
	},
	{
		title: "The Odyssey",
		author: "Homer",
		genre: "Epic Poetry",
		imgUrl:
			"https://m.media-amazon.com/images/I/71u+5QX1+DL._AC_UF1000,1000_QL80_.jpg",
		description:
			'Homer’s "The Odyssey" is an ancient Greek epic poem that chronicles the adventures of Odysseus as he journeys home after the Trojan War. Facing mythical creatures and divine challenges, Odysseus encounters gods, monsters, and the loyalty of his wife, Penelope. The epic explores themes of heroism, cunning, and the enduring power of the human spirit. "The Odyssey" remains a cornerstone of classical literature.',
	},
	{
		title: "Wuthering Heights",
		author: "Emily Brontë",
		genre: "Gothic Fiction",
		imgUrl:
			"https://m.media-amazon.com/images/I/81dvA4tU0rL._AC_UF1000,1000_QL80_.jpg",
		description:
			'Emily Brontë’s "Wuthering Heights" is a Gothic novel that unfolds on the desolate moors of Yorkshire. The story follows the passionate and destructive love between Heathcliff and Catherine Earnshaw. Brontë’s exploration of obsession, revenge, and the supernatural has made "Wuthering Heights" a haunting and enduring masterpiece of English literature.',
	},

	{
		title: "Code Complete",
		author: "Steve McConnell",
		genre: "Education",
		imgUrl:
			"https://m.media-amazon.com/images/I/81Y8Ay0WWCL._AC_UF1000,1000_QL80_.jpg",
		description:
			"Code Complete is a software development book, written by Steve McConnell and published in 1993 by Microsoft Press, encouraging developers to continue past code-and-fix programming and the big design up front and waterfall models.",
	},
	{
		title: "One Hundred Years of Solitude",
		author: "Gabriel García Márquez",
		genre: "Magical Realism",
		imgUrl:
			"https://m.media-amazon.com/images/I/71IWwBoDNsL._AC_UF1000,1000_QL80_.jpg",
		description:
			'Gabriel García Márquez’s "One Hundred Years of Solitude" is a masterful work of magical realism that unfolds in the fictional town of Macondo. The novel chronicles the multi-generational saga of the Buendía family, blending history, myth, and reality. Márquez’s prose weaves a rich tapestry of love, politics, and the passage of time. "One Hundred Years of Solitude" stands as a literary landmark, captivating readers with its enchanting narrative.',
	},
];

export default BooksArray;
