import { PageSettings } from '../utils/utils';
import { useState } from 'react';
import { AboutMedia } from '../sass/scss/images/about/AboutMedia';

const AboutPage: React.FC<PageSettings> = ({ data }): JSX.Element => {
	const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
	window.addEventListener('resize', () => setWindowSize(window.innerWidth));
	const articleList = data.map((e, i) => {
		if (e.image)
			return (
				<div key={i} className="content__container">
					{(i % 2 !== 0 || windowSize <= 1200) ? <img className="content__img left" src={AboutMedia[i]} alt="" /> : <></>}
					<div>
						<h2 className="secondary__heading">
							{e.title}
						</h2>
						<p className="content__text">
							{e.description}
						</p>
					</div>
					{(i % 2 === 0 && windowSize >= 1200) ? <img className="content__img right" src={AboutMedia[i]} alt="" /> : <></>}
				</div>
			)
	})

	return (
		<main>
			{articleList}
		</main>
	)
}

export default AboutPage;
