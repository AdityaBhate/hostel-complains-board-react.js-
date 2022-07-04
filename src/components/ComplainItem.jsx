import React from "react";

function ComplainItem(item) {
	return (
		<div>
			<p>{item.id + 1}</p>
			<p>{item.name}</p>
			<p>{item.roomno}</p>
			<p>{item.complain}</p>
			<hr />
		</div>
	);
}

export default ComplainItem;
