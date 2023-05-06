import React from 'react';

interface IContentPrimaryFrameProps {
	className: string,
}

const ContentPrimaryFrame = (props: React.PropsWithChildren<IContentPrimaryFrameProps>) => {
	const { className, children } = props;
	return (
		<div className={`ui__content-primary-frame ${className}`}>
			{children}
		</div>
	);
};

export default ContentPrimaryFrame;
