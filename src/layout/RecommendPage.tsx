import { getArticles, DataWithLang, isChinese } from '../utils/utils';
import SignupButton from '../components/SignupButton';
import TapeMedia from '../sass/scss/images/guide/GuideMedia';


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
			<div className="prize__container">
			<h2>{!isChinese(lang) ? "限量小禮" : "Limited Prizes"}</h2>
			<img 
				className="prize__img" 
				src={TapeMedia} 
				alt="tape-pic" 
			/>
			</div>
			<p className='prize__name'>
				{!isChinese(lang) ? "清明上河圖紙膠帶" : "Washi Tape: Along the River During the Qingming Festival"}
			</p>
		</main>
	)
}

export default RecommendPage;
