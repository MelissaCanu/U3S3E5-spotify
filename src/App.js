// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PlayerControls from "./components/PlayerControls";
import MusicSection from "./components/MusicSection";

const App = () => {
	return (
		<div>
			<Sidebar />
			<MainContent />
			<PlayerControls />
			<MusicSection artistName="queen" querySelector="#rockSection" />
			<MusicSection artistName="katyperry" querySelector="#popSection" />
			<MusicSection artistName="eminem" querySelector="#hipHopSection" />
		</div>
	);
};

export default App;
