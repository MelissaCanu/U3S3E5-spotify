import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PlayerControls from "./components/PlayerControls";
import MusicSection from "./components/MusicSection";

const App = () => {
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = (results) => {
		setSearchResults(results);
	};
	return (
		<Provider store={store}>
			<div className="container-fluid">
				<div className="row">
					{/* SIDEBAR */}
					<div className="col col-2">
						<Sidebar onSearch={handleSearch} />
					</div>
					{/* MAIN CONTENT */}
					<MainContent searchResults={searchResults} />
				</div>
			</div>
			{/* PLAYER CONTROLS */}
			<PlayerControls />
			{/* MUSIC SECTIONS */}
			<MusicSection artistName="queen" querySelector="#rockSection" />
			<MusicSection artistName="katyperry" querySelector="#popSection" />
			<MusicSection artistName="eminem" querySelector="#hipHopSection" />
		</Provider>
	);
};

export default App;
