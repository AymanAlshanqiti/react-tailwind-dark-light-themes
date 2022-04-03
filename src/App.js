import { useEffect, useState } from 'react';

const themeOptions = {
	DARK: { name: 'dark', background: '#263242' },
	LIGHT: { name: 'light', background: 'white' },
};

function App() {
	const [theme, setTheme] = useState(themeOptions.DARK.name);

	const handleSwitchToSystemTheme = () => {
		if (
			window.matchMedia(`(prefers-color-scheme: ${themeOptions.DARK.name})`)
				.matches
		) {
			document.documentElement.classList.add(themeOptions.DARK.name);
			document.getElementsByTagName('body')[0].style.backgroundColor =
				themeOptions.DARK.background;
			setTheme(themeOptions.DARK.name);
		} else {
			document.documentElement.classList.remove(themeOptions.DARK.name);
			document.getElementsByTagName('body')[0].style.backgroundColor =
				themeOptions.LIGHT.background;
			setTheme(themeOptions.LIGHT.name);
		}
	};

	const handleSetTheme = () => {
		if (theme === themeOptions.DARK.name) {
			// change to the light theme
			document.documentElement.classList.remove(themeOptions.DARK.name);
			document.getElementsByTagName('body')[0].style.backgroundColor =
				themeOptions.LIGHT.background;
			setTheme(themeOptions.LIGHT.name);
		} else {
			// change to the dark theme
			document.documentElement.classList.add(themeOptions.DARK.name);
			document.getElementsByTagName('body')[0].style.backgroundColor =
				themeOptions.DARK.background;
			setTheme(themeOptions.DARK.name);
		}
	};

	useEffect(() => {
		// make the theme as the system's default theme
		handleSwitchToSystemTheme();
	}, []);

	return (
		<div className="flex justify-center items-start m-4">
			<div className="relative flex flex-wrap justify-start items-start gap-4 p-3 bg-white dark:bg-slate-700 text-black dark:text-white border-2 dark:border-slate-600 min-h-40 w-80 rounded-xl">
				<div
					className={`absolute top-1 right-1 p-2 rounded-tr-lg rounded-bl-lg ${
						theme === themeOptions.DARK.name
							? ' bg-indigo-400'
							: 'bg-yellow-400'
					}`}
				>
					{theme}
				</div>
				<h1 className="w-full font-bold">Tailwind Dark/Light Theme</h1>
				<p className="w-full text-sm font-light">
					We gonna learn how to switch between dark and light theme using
					tailwind, by setting the theme as the user's system theme (dark/light)
					or give the choice to the user to choose the theme he like.
				</p>
				<div className="flex justify-between w-full space-x-2">
					<button
						className="flex-grow bg-slate-300 dark:bg-slate-400 p-2 rounded-md"
						onClick={handleSwitchToSystemTheme}
					>
						System Theme
					</button>
					<button
						className="flex-grow bg-indigo-400 dark:bg-yellow-400 p-2 rounded-md"
						onClick={handleSetTheme}
					>
						Switch To{' '}
						{theme === themeOptions.DARK.name
							? themeOptions.LIGHT.name
							: themeOptions.DARK.name}
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
