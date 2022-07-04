import React, { useState } from "react";
import { addComplain } from "../features/Complain";
import { useDispatch, useSelector } from "react-redux";

function InputBoard() {
	const complainBoard = useSelector((state) => state.complain.value);
	const dispatch = useDispatch();
	const [complain, setComplain] = useState({
		id: 0,
		roomno: 0,
		name: "",
		complain: "",
	});
	return (
		<div className='addUser'>
			<label className='roomlabel'>Room no. </label>
			<input
				type='number'
				id='roomno'
				onChange={(e) => setComplain({ ...complain, roomno: e.target.value })}
			/>
			<label className='namelabel'>Name </label>
			<input
				type='text'
				id='name'
				onChange={(e) => setComplain({ ...complain, name: e.target.value })}
			/>
			<label className='complainlabel'>Complain </label>
			<textarea
				id='complain'
				rows='5'
				cols='40'
				onChange={(e) => setComplain({ ...complain, complain: e.target.value })}
			/>
			<button
				onClick={() => {
					dispatch(
						addComplain({
							...complain,
							id: complainBoard[complainBoard.length - 1].id + 1,
						})
					);
				}}>
				Add complain
			</button>
		</div>
	);
}

export default InputBoard;
