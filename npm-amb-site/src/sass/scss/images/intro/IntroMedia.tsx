import media1 from './犧尊.png';
import media2 from './傘.png';
import media3 from './文物架.png';
import media4 from './漁夫帽.png';
import media5 from './頸枕.png';

export interface Media {
	name: string;
	media: string;
}

export const media:Media[] = [
	{media: media1, name: "犧尊丹寧手作抱枕"}, 
	{media: media2, name: "瞅瞅貓 晴雨傘"}, 
	{media: media3, name: "迷你圓滿博古架文物組"}, 
	{media: media4, name: "甲骨文布花漁夫帽"}, 
	{media: media5, name: "墜馬髻頸枕"}, 
];
export const introMediaByIndex = (i:number) => media[i];
