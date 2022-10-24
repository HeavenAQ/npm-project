import SignupButton from '../components/SignupButton';
import GiftItem from './GiftItem';
import { getArticles, DataWithLang } from '../utils/utils';
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

			<GiftItem
				curLang={lang}
				title={{chn: "小禮品",  eng:"Special Prizes"}}
				img={PinMedia}
				item={{chn: "文物造型迴紋針組", eng: "Antique-shaped Paper Clips"}}
			/>
		</main>
	)
}

export default WorkShop;
