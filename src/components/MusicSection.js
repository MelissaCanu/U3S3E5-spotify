// MusicSection.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSong, likeSong } from "../redux/actions/actions";
import AlbumCard from "./AlbumCard";

const MusicSection = ({ artistName, querySelector }) => {
	const dispatch = useDispatch();
	const songs = useSelector((state) => state.songs);

	useEffect(() => {
		// Fetch data and update Redux store as before
	}, [artistName]);

	return (
		<div className="row">
			{songs.map((song) => (
				<AlbumCard
					key={song.id}
					songInfo={song}
					onSelect={() => dispatch(selectSong(song))}
					onLike={() => dispatch(likeSong(song.id))}
				/>
			))}
		</div>
	);
};

export default MusicSection;
