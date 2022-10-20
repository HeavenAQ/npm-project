import Carousel from './Carousel';
import SignupButton from '../components/SignupButton';
import { getArticles, DataWithLang } from '../utils/utils';
import { introMediaByIndex } from '../sass/scss/images/intro/IntroMedia';

const SLIDE_COUNT = 2;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const WorkShop: React.FC<DataWithLang> = ({ data, lang }): JSX.Element => {
	const articleData = getArticles(data);
	const articleList = articleData.map((e, i) => {
		return (
			<div key={i}>
				<h2 className="secondary__heading">
					{e.title}
				</h2>
				<p>
					{e.description}
				</p>
			</div>
		)
	})

	return (
		<main className='content--no-img'>
			{articleList}
			<SignupButton 
				link="https://forms.gle/qgbL88FS6gGWgS8n9" 
				lang={lang}
			/>
			<Carousel 
				lang={lang} 
				slides={slides} 
				mediaByIndex={introMediaByIndex}
			/>

		</main>
	)
}

export default WorkShop;
