// MainContent.js
import React, { useState } from "react";
import MusicSection from "./MusicSection";
import AlbumCard from "./AlbumCard";
import "../App.css";

const MainContent = ({ searchResults }) => {
	return (
		<div className="col-12 col-md-9 offset-md-3 mainPage">
			<div className="row">
				<div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
					<a href="#">TRENDING</a>
					<a href="#">PODCAST</a>
					<a href="#">MOODS AND GENRES</a>
					<a href="#">NEW RELEASES</a>
					<a href="#">DISCOVER</a>
				</div>
			</div>
			<div className="row">
				<div className="col-10">
					<div
						id="searchResults"
						style={{ display: searchResults.length > 0 ? "block" : "none" }}
					>
						<h2>Search Results</h2>
						<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
							{searchResults.map((song) => (
								<AlbumCard key={song.id} songInfo={song} />
							))}
						</div>
					</div>
				</div>
			</div>
			<MusicSection
				title="Rock Classics"
				artistName="queen"
				querySelector="#rockSection"
			/>
			<MusicSection
				title="Pop Culture"
				artistName="katyperry"
				querySelector="#popSection"
			/>
			<MusicSection
				title="#HipHop"
				artistName="eminem"
				querySelector="#hipHopSection"
			/>
		</div>
	);
};

export default MainContent;
