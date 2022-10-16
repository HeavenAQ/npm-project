import { getArticles, RenderData } from '../utils/utils';

const IntroPage: React.FC<RenderData> = ({ data }): JSX.Element => {
	const articleData = getArticles(data);
	const articleList = articleData.map((e, i) => {
		return (
			<div key={i}>
				<>
					<h2 className="secondary__heading">
						{e.title}
					</h2>
					<p>
						{e.description}
					</p>
				</>
			</div>
		)
	})

	return (
		<main className='content--no-img'>
			{articleList}
		</main>
	)
}

export default IntroPage;
