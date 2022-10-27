import React from 'react';
import { Language, isChinese } from '../utils/utils';

interface GiftInfo {
	curLang: Language;
	title: {eng:string, chn:string};
	item: {eng:string, chn:string};
	img: string;
}

const GiftItem: React.FC<GiftInfo> = ({curLang, title, item, img}):JSX.Element => {
	return (
		<>
			<div className="prize__container">
			<h2>{!isChinese(curLang) ? title.chn : title.eng}</h2>
			<img 
				className="prize__img" 
				src={img}
				alt="pin-pic"
				loading='lazy'
			/>
			</div>
			<p className='prize__name'>
			{!isChinese(curLang) ? item.chn : item.eng}
			</p>
		</>
	)
}

export default GiftItem;
