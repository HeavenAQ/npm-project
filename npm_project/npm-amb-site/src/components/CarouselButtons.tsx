import React, { MouseEventHandler } from 'react';

interface Button {
	enabled: boolean;
	onClick: MouseEventHandler;
}

export const DotButton:React.FC<Button> = ({ enabled, onClick }) => (
	<button
		className={`embla__dot ${enabled ? "is-selected" : ""}`}
		type="button"
		onClick={onClick}
	>
	</button>
)
