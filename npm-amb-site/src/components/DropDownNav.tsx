import { Link } from 'react-router-dom';
import { Page } from '../layout/Navbar';
import { isChinese, LanguageSettings } from '../utils/utils';
import DropDownLangSwitch from './DropDownLangSwitch';

interface DropDownProp extends LanguageSettings {
	navItems: Page[];
}

const DropDownNav: React.FC<DropDownProp> = ({ navItems, lang, changeLang }): JSX.Element => {
	const onItemClick = () => {
		document.querySelector('.nav-dropdown__container')?.classList.toggle('active');
		document.querySelector('.nav__toggle')?.classList.toggle('active');
	}

	const dropItems = navItems.map((e, i) => {
		return (
			<Link
				key={i} to={e.route}
				className="nav-dropdown__item"
				onClick={onItemClick}
			>
				{isChinese(lang) ? e.eng : e.chn}
			</Link>
		)
	})

	return (
		<div
			id='nav-dropdown'
			className="nav-dropdown__container"
		>
			<a className='nav-dropdown__logo' href="/">
				<img src={require("../sass/scss/images/logo.png")} alt="" />
			</a>
			{dropItems}
			<DropDownLangSwitch
				onItemClick={onItemClick}
				changeLang={changeLang}
				lang={lang}
			/>
		</div>
	)
}

export default DropDownNav;
