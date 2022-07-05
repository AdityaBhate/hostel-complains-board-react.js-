import React from "react";
import "../styles/ComplainItem.css";

function ComplainItem(item) {
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
		</div>
	);
}

export default ComplainItem;
