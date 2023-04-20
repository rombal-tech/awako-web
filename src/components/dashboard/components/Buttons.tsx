import React, { useState } from 'react';

const Buttons = () => {
	const [onClick, setClick] = useState();

	return (
		<div>
			<button
				className="buttons"
				type="submit"
			>
				New Scheme
			</button>
			<button
				className="buttons"
				type="submit"
			>
				Import
			</button>
		</div>
	);
};

export default Buttons;
