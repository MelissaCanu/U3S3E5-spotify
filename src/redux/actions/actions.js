export const selectSong = (song) => {
	return {
		type: "SONG_SELECTED",
		payload: song,
	};
};

export const likeSong = (songId) => {
	return {
		type: "LIKE_SONG",
		payload: songId,
	};
};
