import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PlayerControls from "./components/PlayerControls";
import MusicSection from "./components/MusicSection";

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<Sidebar />
				<MainContent />
				<PlayerControls />
				<MusicSection artistName="queen" querySelector="#rockSection" />
				<MusicSection artistName="katyperry" querySelector="#popSection" />
				<MusicSection artistName="eminem" querySelector="#hipHopSection" />
			</div>
		</Provider>
	);
};

export default App;
