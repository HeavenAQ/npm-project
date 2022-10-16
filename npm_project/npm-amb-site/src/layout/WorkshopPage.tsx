import { getArticles, isChinese, Language, RenderData } from '../utils/utils';

interface DataWithLang extends RenderData {
	lang: Language;
}

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
			<div className="signup__btn">
				{!isChinese(lang) ? "現在報名" : "Sign up"}!
			</div>
		</main>
	)
}

export default WorkShop;
