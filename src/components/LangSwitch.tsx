import React from 'react';
import { Language, isChinese } from '../utils/utils';

interface LangSetting {
	lang: Language;
	changeLang(): void;
}

const LangSwitch: React.FC<LangSetting> = ({ lang, changeLang }): JSX.Element => {
	const onLangSwitch = () => {
		changeLang();
		document.querySelector("main")?.classList.add('fade-in');
	}

	return (
		<div
			className="nav__item"
			onClick={onLangSwitch}
			onAnimationEnd={e => {
				e.currentTarget.classList.remove('fade-in');
				document.querySelector("main")?.classList.remove('fade-in');
			}}
		>
			{isChinese(lang) ? '中文' : 'ENG'}
		</div>
	);
}

export default LangSwitch;
