import React, { useState } from "react";
import "../App.css";
import AlbumCard from "./AlbumCard";

const Sidebar = () => {
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = async (event) => {
		event.preventDefault();
		let searchQuery = document.querySelector("#searchField").value;

		if (searchQuery.length > 2) {
			try {
				let response = await fetch(
					`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`,
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
					let result = await response.json();
					let { data } = result;
					setSearchResults(data); // Update state with search results
				} else {
					throw new Error("Error in search");
				}
			} catch (err) {
				console.error("Error", err);
			}
		}
	};

	return (
		<div>
			{/* ... your existing JSX */}
			<form className="input-group mt-3" onSubmit={handleSearch}>
				<input
					type="text"
					className="form-control"
					id="searchField"
					placeholder="Search"
					aria-label="Search"
					aria-describedby="basic-addon2"
				/>
				<div className="input-group-append">
					<button
						className="btn btn-outline-secondary btn-sm h-100"
						type="submit"
					>
						GO
					</button>
				</div>
			</form>

			{/* Render search results */}
			<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
				{searchResults.map((song) => (
					<AlbumCard key={song.id} songInfo={song} />
				))}
			</div>
		</div>
	);
};

export default Sidebar;
