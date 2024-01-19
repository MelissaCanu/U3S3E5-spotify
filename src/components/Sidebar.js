import React, { useState } from "react";
import AlbumCard from "./AlbumCard";

const Sidebar = ({ onSearch }) => {
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
					setSearchResults(data);
					onSearch(data); // passo risultati search a un altro component
				} else {
					throw new Error("Error in search");
				}
			} catch (err) {
				console.error("Error", err);
			}
		}
	};

	return (
		<nav
			className="navbar navbar-expand-md fixed-left justify-content-between"
			id="sidebar"
		>
			<div className="container flex-column align-items-start">
				<a className="navbar-brand" href="index.html">
					<img
						src="assets/logo/logo.png"
						alt="Spotify Logo"
						width="131"
						height="40"
					/>
				</a>
				{/* ... */}
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<ul>
							<li>
								<a
									className="nav-item nav-link d-flex align-items-center"
									href="#"
								>
									<i className="bi bi-house-door-fill"></i>&nbsp; Home
								</a>
							</li>
							<li>
								<a
									className="nav-item nav-link d-flex align-items-center"
									href="#"
								>
									<i className="bi bi-book-fill"></i>&nbsp; Your Library
								</a>
							</li>

							<li>
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
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
