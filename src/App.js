import React, { useState } from 'react';
import { Logo } from '@hjdse/logotype';
import { langTxt } from './lang/language.js';
import './App.css';

function App() {
	const [lang, setLang] = useState();
	const [loading, setLoading] = useState();

	const handleclick = (prop) => {
		setLoading(true);
		setLang(prop);
		localStorage.setItem('lang', prop);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	return (
		<div id="App" className="App">
			<header>
				<Logo
					text="Code | Design | Photography"
					logosize={!lang ? '100%' : '80%'}
					margin={!lang ? '24vh,5vh' : '10vh,4vh'}
				/>
			</header>
			{loading && langTxt[lang].load}
			{!lang && (
				<main className="center">
					<p className=" mb-100">Please choose language:</p>
					<p className="center mb-300">
						<span
							className="pointer pr-50"
							onClick={() => {
								handleclick('eng');
							}}
						>
							🇬🇧 English
						</span>{' '}
						|{' '}
						<span
							className="pointer pl-50"
							onClick={() => {
								handleclick('sve');
							}}
						>
							Swedish 🇸🇪
						</span>
					</p>
				</main>
			)}
			{!loading && lang && langTxt[lang].text}
			<footer>&copy; 2023 Henrik Danielsson</footer>
		</div>
	);
}

export default App;
