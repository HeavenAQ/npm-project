import SignupButton from "../components/SignupButton";
import GiftItem from "./GiftItem";
import parse from 'html-react-parser';
import { getArticles, DataWithLang } from "../utils/utils";
import PinMedia from "../sass/scss/images/workshop/WorkshopMedia";

const italicStrings = [
	"Autumn Colors on the Qiao and Hua Mountains and Dwelling in the Fuchun Mountains",
	"Hua Mountains and Dwelling in the Fuchun Mountains",
];

const WorkShop: React.FC<DataWithLang> = ({ data, lang }): JSX.Element => {
	const articleData = getArticles(data);
	const articleList = articleData.map(
		(e, i): JSX.Element => {
			if (!e.description) return <div key="0"></div>;
			let content = `<p>${e.description}</p>`;
			italicStrings.forEach(str => {
				content = content.replaceAll(str, "<i>$&</i>");
			})

			return (
				<div key={i}>
					<h2 className="secondary__heading">{e.title}</h2>
					<>{parse(content)}</>
				</div>
			);
		}
	);

	return (
		<main className="content--no-img">
			{articleList}
			<SignupButton
				link="https://forms.gle/qgbL88FS6gGWgS8n9"
				lang={lang}
			/>

			<GiftItem
				curLang={lang}
				title={{ chn: "小禮品", eng: "Special Prizes" }}
				img={PinMedia}
				item={{
					chn: "文物造型迴紋針組",
					eng: "Antique-shaped Paper Clips",
				}}
			/>
		</main>
	);
};

export default WorkShop;
