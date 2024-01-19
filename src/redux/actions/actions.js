export const SET_SONGS = "SET_SONGS";
export const SELECT_SONG = "SELECT_SONG";
export const LIKE_SONG = "LIKE_SONG";

export const setSongs = (artistName, songs) => ({
	type: "SET_SONGS",
	payload: { artistName, songs },
});

export const selectSong = (song) => ({
	type: "SELECT_SONG",
	payload: song,
});

export const likeSong = (songId) => ({
	type: "LIKE_SONG",
	payload: songId,
});
