import React from "react";
import { useState, useEffect } from "react";

import { SecondsCounter } from "./secondsCounter";

//create your first component
const Home = () => {
	const [segundos, setSegundos] = useState(0);
	const [decimales, setDecimales] = useState(0);
	const [centesimales, setCentesimales] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSegundos(prevSegundos => {
				if (prevSegundos >= 9) {
					setDecimales(prevDecimales => {
						if (prevDecimales >= 9) {
							setCentesimales(prevCentesimales => prevCentesimales + 1);
							return 0;
						} else {
							return prevDecimales + 1;
						}
					});
					return 0;
				} else {
					return prevSegundos + 1;
				}
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<SecondsCounter seconds={segundos} decimals={decimales} centesimals={centesimales} />
	);
};

export default Home;
