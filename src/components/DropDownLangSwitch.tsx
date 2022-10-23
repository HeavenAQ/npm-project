import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import { LanguageSettings, isChinese } from '../utils/utils';

interface DropDownLang extends LanguageSettings {
	onItemClick(): void;

}

const DropDownLangSwitch: React.FC<DropDownLang> = ({ onItemClick, changeLang, lang }): JSX.Element => {
	const main = document.querySelector('main');
	return (
		<div
			className='lang-switch__container'
			onClick={() => {
				onItemClick();
				changeLang();
				if (main) {
					main.classList.add('fade-in');
					main.addEventListener("animationend", () => main.classList.remove('fade-in'));
				}
			}}
		>
			<GrLanguage /> {isChinese(lang) ? "CHN" : "ENG"}
		</div>
	)
}

export default DropDownLangSwitch;
