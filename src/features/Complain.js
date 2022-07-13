import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from "../FakeData";

const userSlice = createSlice({
	name: "complain",
	initialState: { value: UsersData },
	reducers: {
		addComplain: (state, action) => {
			state.value.push(action.payload);
		},
		deleteComplain: (state, action) => {
			state.value = state.value.filter((user) => user.id !== action.payload.id);
		},
	},
});

export const { addComplain, deleteComplain } = userSlice.actions;

export default userSlice.reducer;
