import React, { useState } from 'react';
import { Logo } from '@hjdse/146north';
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
			<Logo
				text="Layout | Code | Photography"
				size={!lang ? '100%' : '60%'}
				margin={!lang ? '24vh,5vh' : '10vh,5vh'}
			/>
			{loading && (
				<main>
					<p className="center">{langTxt[lang].load}</p>
				</main>
			)}
			{!lang && (
				<main>
					<p>Please choose language:</p>
					<p className="center">
						<span
							onClick={() => {
								handleclick('eng');
							}}
						>
							English
						</span>{' '}
						|{' '}
						<span
							onClick={() => {
								handleclick('sve');
							}}
						>
							Swedish
						</span>
					</p>
				</main>
			)}
			{!loading && lang && langTxt[lang].text}
		</div>
	);
}

export default App;
