import React from "react";
import { useSelector } from "react-redux";
import ComplainItem from "./ComplainItem";
import "../styles/DisplayBoard.css";

function DisplayBoard() {
	const complainBoard = useSelector((state) => state.complain.value);
	return (
		<div>
			<h2 className='DisplayBoardh2'>Complains</h2>
			<div className='displayUsers-container'>
				{complainBoard.map((item) => (
					<ComplainItem {...item} />
				))}
			</div>
		</div>
	);
}

export default DisplayBoard;
