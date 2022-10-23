import React from "react";
import { Language, isChinese } from "../utils/utils";

interface Signup {
	link: string;
	lang: Language;
}

const SignupButton: React.FC<Signup> = ({ link, lang }) => {
	return (
		<div className="signup__btn">
			<a href={link} target="blank" rel="noreferrer noopener">
				{!isChinese(lang) ? "現在報名" : "Sign up"}!
			</a>
		</div>
	);
};

export default SignupButton;
