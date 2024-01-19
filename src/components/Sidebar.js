import React from "react";
import "../App.css";

const albumCard = function (songInfo) {
	return `
      <div class="col text-center" id=${songInfo.id}>
          <img class="img-fluid" src=${
						songInfo.album.cover_medium
					} alt="track" />
        <p>
            Track: "${
							songInfo.title.length < 16
								? `${songInfo.title}`
								: `${songInfo.title.substring(0, 16)}...`
						}"<br>
            Artist: ${songInfo.artist.name}
        </p>
      </div>`;
};

const search = async (event) => {
	event.preventDefault();
	let div = document.querySelector("#searchResults .row");
	div.innerHTML = "";
	let searchQuery = document.querySelector("#searchField").value;

	if (searchQuery.length > 2) {
		document.querySelector("#searchResults").style.display = "block";

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
				for (let x = 0; x < data.length; x++) {
					div.innerHTML += albumCard(data[x]);
				}
			} else {
				throw new Error("error in search");
			}
		} catch (err) {
			console.log("error", err);
		}
	} else {
		document.querySelector("#searchResults").style.display = "none";
	}
};

const Sidebar = () => {
	return (
		<nav
			className="navbar navbar-expand-md fixed-left justify-content-between"
			id="sidebar"
		>
			{/* The rest of your Sidebar component code... */}
			<form className="input-group mt-3" onSubmit={(event) => search(event)}>
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
			{/* The rest of your Sidebar component code... */}
		</nav>
	);
};

export default Sidebar;
