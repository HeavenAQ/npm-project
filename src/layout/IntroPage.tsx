import { getArticles, isChinese, DataWithLang } from "../utils/utils";
import Carousel from "./Carousel";
import { introMediaByIndex } from "../sass/scss/images/intro/IntroMedia";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const IntroPage: React.FC<DataWithLang> = ({ data, lang }): JSX.Element => {
	const articleData = getArticles(data);
	const articleList = articleData.map((e, i) => {
		return (
			<div key={i}>
				<>
					<h2 className="secondary__heading">{e.title}</h2>
					<p>{e.description}</p>
				</>
			</div>
		);
	});

	return (
		<main className="content--no-img">
			{articleList}
			{!isChinese(lang) ? (
				<Carousel
					title="部分抽獎獎項"
					lang={lang}
					slides={slides}
					mediaByIndex={introMediaByIndex}
				/>
			) : (
				<></>
			)}
		</main>
	);
};

export default IntroPage;
