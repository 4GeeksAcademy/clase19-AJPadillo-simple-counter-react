import React from "react";
import { useState } from "react"

import { SecondsCounter } from "./secondsCounter";

//create your first component
const Home = () => {
	const [segundos, setSegundos] = useState(0)

	setInterval(() => {
		setSegundos(segundos + 1);
	}, 1000);
	return (
		<SecondsCounter seconds={segundos} />
	);
};

export default Home;
