import React from "react";
import { useSelector } from "react-redux";
import ComplainItem from "./ComplainItem";

function DisplayBoard() {
	const complainBoard = useSelector((state) => state.complain.value);
	console.log(complainBoard);
	return (
		<div className='displayUsers'>
			<h3>Complain</h3>
			<div>
				{complainBoard.map((item) => (
					<ComplainItem {...item} />
				))}
			</div>
		</div>
	);
}

export default DisplayBoard;
