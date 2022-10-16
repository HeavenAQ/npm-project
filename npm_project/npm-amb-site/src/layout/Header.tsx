import React from 'react';

const Header: React.FC = (): JSX.Element => {
	return (
		<header>
			<h1 className="primary__heading" unselectable='on'>
				<span className="primary__heading--main">乾隆</span>
				<span className="primary__heading--mid">南巡</span>
				<span className="primary__heading--sub">一場玩味文物的旅行</span>
			</h1>
		</header>
	)
}
export default Header;
