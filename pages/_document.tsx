import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css2?family=Bangers&family=Quicksand:wght@300;400;500;600&display=swap"
						rel="stylesheet"
					/>
					<meta name="description" content="The official portfolio for Udendu Abasili" />
					<meta name="robots" content="index, follow" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
