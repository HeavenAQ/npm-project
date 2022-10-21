import SignupButton from '../components/SignupButton';
import { getArticles, DataWithLang, isChinese } from '../utils/utils';
import PinMedia from '../sass/scss/images/workshop/WorkshopMedia';

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
			<div className="prize__container">
			<h2>{!isChinese(lang) ? "限量小禮" : "Limited Prizes"}</h2>
			<img 
				className="prize__img" 
				src={PinMedia} 
				alt="pin-pic" 
			/>
			</div>
			<p className='prize__name'>
				{!isChinese(lang) ? "文物造型迴紋針組" : "Antique-shaped Paper Clips"}
			</p>
		</main>
	)
}

export default WorkShop;
