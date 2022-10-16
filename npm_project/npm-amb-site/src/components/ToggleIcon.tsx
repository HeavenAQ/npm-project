import React, { MouseEventHandler } from 'react';

const ToggleIcon: React.FC = (): JSX.Element => {
	const showDropDown: MouseEventHandler<HTMLDivElement> = () => {
		document.querySelector('.nav-dropdown__container')?.classList.toggle('active');
		document.querySelector(".nav__toggle")?.classList.toggle('active');
		document.querySelector(".nav-dropdown__container")?.classList.toggle('grad-in');
	}

	return (
		<div
			className="nav__toggle"
			onClick={showDropDown}
			onMouseOver={() => document.querySelector(".nav__toggle")?.classList.add('hover')}
			onMouseOut={() => document.querySelector(".nav__toggle")?.classList.remove('hover')}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default ToggleIcon;
