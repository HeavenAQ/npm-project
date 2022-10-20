import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer: React.FC = (): JSX.Element => {
	return (
		<footer>
			<div className="footer__icons">
				<a
					href="https://www.instagram.com/npm_in_nsysu"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=100085552641657"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebook />
				</a>
				<a href="mailto:vivianchou900626@gmail.com">
					<GrMail />
				</a>
			</div>
			<span className="footer__text">
				&copy; 2022 Vivian Chou. All Rights Reserved.
			</span>
		</footer>
	);
};

export default Footer;
