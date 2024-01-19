// reducers.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedSong: null,
	likedSongs: [],
	songs: [],
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		selectSong: (state, action) => {
			state.selectedSong = action.payload;
		},
		likeSong: (state, action) => {
			state.likedSongs.push(action.payload);
		},
	},
});

export const { selectSong, likeSong } = appSlice.actions;
export default appSlice.reducer;
