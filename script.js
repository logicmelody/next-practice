// Select the div element with 'app' id
const app = document.getElementById('app');

function Header({ title }) {
	return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
	const [likes, setLikes] = React.useState(0);

	const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

	function _handleClick() {
		setLikes(likes + 1);
	}

	return (
		<div>
			<Header title="Develop. Preview. Ship. 🚀" />

			<ul>
				{names.map((name, index) => {
					return (
						<li key={`${name}${index}`}>
							{name}
						</li>
					);
				})}
			</ul>

			<button
				onClick={_handleClick}
			>
				Like({likes})
			</button>
		</div>
	);
}

// Declarative programming
ReactDOM.render(<HomePage />, app);

/*
// Imperative programming
// Create a new H1 element
const header = document.createElement('h1');

// Create a new text node for the H1 element
const headerContent = document.createTextNode(
	'Develop. Preview. Ship. 🚀',
);

// Append the text to the H1 element
header.appendChild(headerContent);

// Place the H1 element inside the div
app.appendChild(header);
*/
