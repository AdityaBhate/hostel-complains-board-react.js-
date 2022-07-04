import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from "../FakeData";

const userSlice = createSlice({
	name: "complain",
	initialState: { value: UsersData },
	reducers: {
		addComplain: (state, action) => {
			state.value.push(action.payload);
		},
		deleteComplain: (state, action) => {},
		updateComplain: (state, action) => {},
	},
});

export const { addComplain } = userSlice.actions;

export default userSlice.reducer;
