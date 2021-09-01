import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	const [musica, setMusica] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		}
	]);

	const Songs = musica.map((value, index) => {
		return (
			<li key={value.id}>
				{index} {value.name}
			</li>
		);
	});

	const songURL = musica.map(value => {
		return "https://assets.breatheco.de/apis/sound/" + value.url;
	});

	return (
		<>
			<div className="container-fluid">
				<div className="songs">
					<ul>{Songs}</ul>
				</div>
				<div className="buttonsNav">
					<button className="btn" type="button" name="previous">
						<i className="fas fa-caret-square-left"></i>
					</button>
					<button className="btn" type="button" name="play">
						<i className="fas fa-play"></i>
					</button>
					<button className="btn" type="button" name="next">
						<i className="fas fa-caret-square-right"></i>
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
