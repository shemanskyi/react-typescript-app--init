import React, { useEffect, useState } from 'react';

import App from './App';

const AppContainer: React.FC = () => {
	const [darkTheme, setDarkTheme] = useState(true);

	/**
	 * On component mount
	 */
	useEffect(() => {
		const useDarkTheme = Boolean(localStorage.getItem('dark-mode'));
		if (useDarkTheme) {
			setDarkTheme(true);
		}
		setDarkTheme(true);
	}, []);

	/**
	 * On Dark theme change
	 */
	useEffect(() => {
		if (darkTheme) {
			localStorage.setItem('dark-mode', '1');
			document.body.classList.add('dark-mode');
		} else {
			localStorage.setItem('dark-mode', '0');
			document.body.classList.remove('dark-mode');
		}
	}, [darkTheme]);

	/**
	 * Toggle Theme
	 */
	function toggleTheme() {
		setDarkTheme(!darkTheme);
	}

	return <App />;
};

export default AppContainer;
