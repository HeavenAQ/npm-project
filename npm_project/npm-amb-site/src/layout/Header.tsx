import React from "react";

const Header: React.FC = (): JSX.Element => {
	return (
		<header>
			<h1 className="primary__heading" unselectable="on">
				<span className="primary__heading--main">乾隆</span>
				<span className="primary__heading--mid">南巡</span>
			</h1>
			<h1 className="primary__heading--sub">一場玩味文物的旅行</h1>
			<div className="primary__heading--location">國立中山大學</div>
			<h3 className="tertiary__heading">
				<div>共同主辦 - 國立中山大學圖書與資訊處</div>
				<div>11/1 - 11/17 圖資大樓一樓入口前廊</div>
				<div>11/15 14:00 工作坊圖資大樓二樓研討室</div>
			</h3>
		</header>
	);
};
export default Header;
