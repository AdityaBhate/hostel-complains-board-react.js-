import "./App.css";
import DisplayBoard from "./components/DisplayBoard";
import InputBoard from "./components/InputBoard";

function App() {
	return (
		<div className='App'>
			<h1 className='App-header'>Block 1 Complain's Board</h1>
			<h3 className='Apph3'>
				Wirte your Room no. and complain and post it here!
				<br />
				Authorities will try to resolve it as soon as possible
			</h3>
			<InputBoard />
			<hr />
			<DisplayBoard />
		</div>
	);
}

export default App;
