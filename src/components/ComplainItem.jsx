import React from "react";
import "../styles/ComplainItem.css";
import { useDispatch } from "react-redux";
import { deleteComplain } from "../features/Complain.js";

function ComplainItem(item) {
	const dispatch = useDispatch();
	return (
		<div className='complainItem-container'>
			<p>{item.id + 1}</p>
			<p className='complainItem-name'>
				<strong>Name: </strong> {item.name}
			</p>
			<p className='complainItem-roomno'>
				<strong>Room No.: </strong>
				{item.roomno}
			</p>
			<p className='complainItem-complain'>
				<strong>Complain: </strong>
				{item.complain}
			</p>
			<hr />
			<button
				className='complainItem-button'
				onClick={() => {
					dispatch(deleteComplain({ id: item.id }));
				}}>
				Remove / Resolve
			</button>
		</div>
	);
}

export default ComplainItem;
