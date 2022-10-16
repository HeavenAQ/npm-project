import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface ThemeColor {
	bgColor: string;
	fontColor: string;
}

const ThemeToggleIcon: React.FC = (): JSX.Element => {
	const themeColor: ThemeColor[] = [
		{ bgColor: 'rgb(50, 55, 47)', fontColor: 'rgb(248, 248, 236)' },
		{ bgColor: 'rgb(248, 248, 236)', fontColor: '#777' }
	]
	const body = document.body.style;
	const changeTheme = (): void => {
		document.querySelector(`.theme__icon--light`)?.classList.toggle('theme__icon--active');
		document.querySelector(`.theme__icon--dark`)?.classList.toggle('theme__icon--active');
		document.querySelector('.theme__icon--container')?.classList.toggle('theme__icon--container--dark');
		document.querySelector('footer')?.classList.toggle('footer--dark');

		if (document.body.style.backgroundColor === themeColor[0].bgColor) {
			body.backgroundColor = themeColor[1].bgColor;
			body.color = themeColor[1].fontColor;
		}
		else {
			body.backgroundColor = themeColor[0].bgColor;
			body.color = themeColor[0].fontColor;
		}
	}

	return (
		<div className="theme__icon--container" onClick={changeTheme}>
			<div className="theme__icon--light theme__icon--active">
				<FaSun size={18} />
			</div>
			<div className="theme__icon--dark">
				<FaMoon size={14} />
			</div>
		</div>
	)
}
export default ThemeToggleIcon;
