interface ApiObject {
	title: string;
	description: string;
	image: string;
	langs: number;
	[otherOptions: string | number]: unknown;
}

export const isApiObject = (data: ApiObject | object): data is ApiObject => {
	return (data as ApiObject).title !== undefined;
}

export const getArticles = (data: object[]): ApiObject[] => {
	return data.reduce(
		(prev: object[], cur: ApiObject | object): object[] => {
			if (isApiObject(cur))
				return [...prev, { 'title': cur.title, 'description': cur.description, 'image': cur.image, 'langs': cur.langs }];
			return [{}];
		}, []) as ApiObject[];
}

export enum Language {
	eng = 1,
	chn
}

export const isChinese = (lang: Language) => lang === Language.chn

export interface LanguageSettings {
	lang: Language;
	changeLang(): void;
}

export interface PageSettings {
	data: ApiObject[];
}

export interface RenderData {
	data: object[];
}

export interface DataWithLang extends RenderData {
	lang: Language;
}
