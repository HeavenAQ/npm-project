import { getArticles, DataWithLang } from '../utils/utils';
import Carousel from './Carousel';
import { introMediaByIndex } from '../sass/scss/images/intro/IntroMedia';
import SignupButton from '../components/SignupButton';


const SLIDE_COUNT = 2;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const RecommendPage: React.FC<DataWithLang> = ({ data, lang }): JSX.Element => {
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
				link='https://forms.gle/BW6H5jFXhL5ybeELA'
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

export default RecommendPage;
