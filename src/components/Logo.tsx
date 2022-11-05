import React from 'react';

const Logo: React.FC = (): JSX.Element => {
	return (
		<div className='nav__item'>
			<a href="/" aria-label='故宮在中山'>
				<img className="nav__item--logo" src={require("../sass/scss/images/logo.png")} alt="" />
			</a>
		</div>
	);
}

export default Logo;
