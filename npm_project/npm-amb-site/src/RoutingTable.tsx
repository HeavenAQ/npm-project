import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from './layout/AboutPage';
import IntroPage from './layout/IntroPage';
import RecommendPage from './layout/RecommendPage';
import WorkshopPage from './layout/WorkshopPage';
import { LanguageSettings, getArticles } from './utils/utils';


const RoutingTable: React.FC<LanguageSettings> = ({ lang }): JSX.Element => {
	const location = useLocation();
	const [curLocation, setCurLocation] = useState(location);
	const [transitionStage, setTransitionStage] = useState('fade-in');
	const [data, setData] = useState([{}]);

	useEffect(() => {
		(async () => {
			console.log(curLocation.pathname);
			const res = (location.pathname !== '/')
				? await fetch(`/api/articles${curLocation.pathname}/`)
				: await fetch(`/api/articles/intro/`)
			setData(await res.json());
		})();
		if (location !== curLocation) setTransitionStage('fade-out');
	}, [location, curLocation]);


	useEffect(() => {
		if (location.pathname !== '/') {
			const mainSection = document.querySelector("main")?.getBoundingClientRect();
			if (mainSection) {
				const offset = mainSection.top + window.scrollY - 100;
				window.scroll({ top: offset, behavior: 'smooth' });
			}
		}
	}, [document.querySelector('main')]);

	const cleanData = () => {
		return getArticles(data).filter(e => e.langs !== lang);
	}

	const changeContent = () => {
		if (transitionStage === 'fade-out') {
			setTransitionStage('fade-in');
			setCurLocation(location);
		}
	}
	return (
		<div
			className={transitionStage}
			onAnimationEnd={changeContent}
		>
			<Routes location={curLocation}>
				<Route path='/' element={<IntroPage data={cleanData()} />} />
				<Route path="/about" element={<AboutPage data={cleanData()} />}></Route>
				<Route path="/intro" element={<IntroPage data={cleanData()} />}></Route>
				<Route path="/recommendations" element={<RecommendPage data={cleanData()} />}></Route>
				<Route path="/workshop" element={<WorkshopPage data={cleanData()} lang={lang}/>}></Route>
			</Routes>
		</div>
	)
}
export default RoutingTable;
