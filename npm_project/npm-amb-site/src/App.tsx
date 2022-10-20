import React, { useState } from "react";
import { Language, isChinese } from "./utils/utils";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import RoutingTable from "./RoutingTable";
import Footer from "./layout/Footer";

const App: React.FC = (): JSX.Element => {
	const [lang, setLang] = useState<Language>(Language.chn);
	const changeLang = () => {
		setLang(isChinese(lang) ? Language.eng : Language.chn);
		document.querySelectorAll(".nav__item").forEach((e) => {
			e.classList.add("fade-in");
		});
	};

	return (
		<div className="app-container">
			<Navbar lang={lang} changeLang={changeLang} />
			<Header />
			<RoutingTable lang={lang} changeLang={changeLang} />
			<Footer />
		</div>
	);
};

export default App;
