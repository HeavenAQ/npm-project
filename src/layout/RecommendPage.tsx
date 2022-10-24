import { getArticles, DataWithLang } from "../utils/utils";
import GiftItem from "./GiftItem";
import SignupButton from "../components/SignupButton";
import TapeMedia from "../sass/scss/images/guide/GuideMedia";

const RecommendPage: React.FC<DataWithLang> = ({ data, lang }): JSX.Element => {
	const articleData = getArticles(data);
	const articleList = articleData.map((e, i) => {
		return (
			<div key={i}>
				<h2 className="secondary__heading">{e.title}</h2>
				<p>{e.description}</p>
			</div>
		);
	});

	return (
		<main className="content--no-img">
			{articleList}
			<SignupButton
				link="https://forms.gle/BW6H5jFXhL5ybeELA"
				lang={lang}
			/>
			<GiftItem
				curLang={lang}
				title={{ eng: "Limited Prizes", chn: "限量小禮" }}
				img={TapeMedia}
				item={{
					chn: "清明上河圖紙膠帶",
					eng: "Washi Tape: Along the River During the Qingming Festival",
				}}
			/>
		</main>
	);
};

export default RecommendPage;
