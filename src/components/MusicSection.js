import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSongs, selectSong, likeSong } from "../redux/actions/actions";
import AlbumCard from "./AlbumCard";

const MusicSection = ({ title, artistName, querySelector }) => {
	const dispatch = useDispatch();
	const songs = useSelector((state) => state.songs[artistName] || []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await fetch(
					"https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
						artistName,
					{
						method: "GET",
						headers: {
							"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
							"X-RapidAPI-Key":
								"9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
						},
					}
				);

				if (response.ok) {
					let { data } = await response.json();
					dispatch(setSongs(artistName, data.slice(0, 4)));
				} else {
					throw new Error("Error in fetching songs");
				}
			} catch (err) {
				console.log("error", err);
			}
		};

		fetchData();
	}, [artistName, dispatch]);

	const handleSelectSong = (song) => {
		dispatch(selectSong(song));
	};

	const handleLikeSong = (songId) => {
		dispatch(likeSong(songId));
	};

	return (
		<div className="row">
			<div className="col-10">
				<div id={querySelector}>
					<h2>{title}</h2>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
						{songs.map((song) => (
							<AlbumCard
								key={song.id}
								songInfo={song}
								onSelect={() => handleSelectSong(song)}
								onLike={() => handleLikeSong(song.id)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MusicSection;
