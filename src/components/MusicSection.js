// MusicSection.js
import React, { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";

const MusicSection = ({ artistName, querySelector }) => {
	const [songs, setSongs] = useState([]);

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
					setSongs(data.slice(0, 4)); // Limita risultato alle prime 4 canzoni
				} else {
					throw new Error("Error in fetching songs");
				}
			} catch (err) {
				console.log("error", err);
			}
		};

		fetchData();
	}, [artistName]);

	return (
		<div className="row">
			{songs.map((song) => (
				<AlbumCard key={song.id} songInfo={song} />
			))}
		</div>
	);
};

export default MusicSection;
