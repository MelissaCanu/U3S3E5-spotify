// AlbumCard.js
import React from "react";

const AlbumCard = ({ songInfo, onSelect, onLike }) => {
	return (
		<div className="col text-center" id={songInfo.id}>
			<img
				className="img-fluid"
				src={songInfo.album.cover_medium}
				alt={songInfo.title}
			/>
			<p>
				Track: "{songInfo.title}" <br />
				Artist: {songInfo.artist.name}
			</p>
			<button onClick={onSelect}>Select</button>
			<button onClick={onLike}>Like</button>
		</div>
	);
};

export default AlbumCard;
