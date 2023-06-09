import React from 'react';
type LikeButtonProps = {
	id: number;
	isLiked: boolean;
	handleLiked: (id: number, isLiked: boolean) => void;
};

const LikeButton = (props: LikeButtonProps) => {
	const LikedStyle = 'bg-green';
	const DefaultStyle = 'bg-gray';
	const buttonStyle = props.isLiked ? LikedStyle : DefaultStyle;
	const buttonText = props.isLiked ? 'Liked' : 'Like';
	return (
		<React.Fragment>
			<button
				className={`${buttonStyle}`}
				onClick={() => {
					props.handleLiked(props.id, !props.isLiked);
				}}
			>
				{buttonText}
			</button>
		</React.Fragment>
	);
};

export default LikeButton;
