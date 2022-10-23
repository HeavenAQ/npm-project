import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { isChinese, LanguageSettings } from "../utils/utils";
import LangSwitch from "../components/LangSwitch";
import DropDownIcon from "../components/ToggleIcon";
import ThemeToggleIcon from "../components/ThemeToggleIcon";
import DropDownNav from "../components/DropDownNav";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

enum PageIndex {
	about,
	intro,
	recommendations,
	todos,
	workshop,
	locations,
}

export interface Page {
	chn: string;
	eng: string;
	route: string;
	page: PageIndex;
}

const Navbar: React.FC<LanguageSettings> = ({
	lang,
	changeLang,
}): JSX.Element => {
	const location = useLocation();
	const navItems: Page[] = [
		{
			chn: "關於我們",
			eng: "about",
			route: "about",
			page: PageIndex.about,
		},
		{
			chn: "展覽簡介",
			eng: "introduction",
			route: "intro",
			page: PageIndex.intro,
		},
		{
			chn: "專場導覽",
			eng: "guided tours",
			route: "recommendations",
			page: PageIndex.recommendations,
		},
		{
			chn: "繪畫工作坊",
			eng: "workshop",
			route: "workshop",
			page: PageIndex.workshop,
		},
	];

	const handleAnimationEnd = (item: React.AnimationEvent<HTMLElement>) => {
		item.currentTarget.classList.remove("fade-in");
	};

	useEffect(() => {
		document.querySelectorAll(".nav__item").forEach((e) => {
			e.getAttribute("href") !== location.pathname
				? e.classList.remove("active")
				: e.classList.add("active");

			if (
				location.pathname === "/" &&
				e.getAttribute("href") === "/intro"
			)
				e.classList.add("active");
		});
	}, [location]);

	const navList = navItems.map((e, i) => {
		return (
			<Link
				key={i}
				to={e.route}
				className="nav__item"
				onAnimationEnd={handleAnimationEnd}
			>
				{isChinese(lang) ? e.eng : e.chn}
			</Link>
		);
	});

	return (
		<nav className="nav">
			<Logo />
			{navList}
			<LangSwitch lang={lang} changeLang={changeLang} />
			<ThemeToggleIcon />
			<DropDownIcon />
			<DropDownNav
				navItems={navItems}
				lang={lang}
				changeLang={changeLang}
			/>
		</nav>
	);
};
export default Navbar;
