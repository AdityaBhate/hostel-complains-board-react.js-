import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import complainReducer from "./features/Complain";

const store = configureStore({
	reducer: {
		complain: complainReducer,
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
