import { combineReducers } from "redux";
import { SET_SONGS, SELECT_SONG, LIKE_SONG } from "../actions/actions";

/* SONGS */
const songsReducer = (state = [], action) => {
	switch (action.type) {
		case SET_SONGS:
			return {
				...state,
				[action.payload.artistName]: action.payload.songs,
			};
		default:
			return state;
	}
};

/* SELECTED SONG */
const selectedSongReducer = (state = null, action) => {
	switch (action.type) {
		case SELECT_SONG:
			return action.payload;
		default:
			return state;
	}
};

/* LIKED SONG */
const likedSongsReducer = (state = [], action) => {
	switch (action.type) {
		case LIKE_SONG:
			/* toggle del like */
			const songId = action.payload;
			if (state.includes(songId)) {
				return state.filter((id) => id !== songId);
			} else {
				return [...state, songId];
			}
		default:
			return state;
	}
};

// COMBINE
const rootReducer = combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
	likedSongs: likedSongsReducer,
});

export default rootReducer;
