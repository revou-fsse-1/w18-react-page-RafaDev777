import React from 'react';
import LikeButton from './LikeButton';

type ImageCardProps = {
	id: number;
	title: string;
	image: string;
	isLiked: boolean;
	handleLiked: (id: number, isLiked: boolean) => void;
};
const ImageCard = (props: ImageCardProps) => (
	<React.Fragment>
		<div
			style={{
				backgroundImage: `url(${props.image})`,
			}}
		>
			<LikeButton
				id={props.id}
				isLiked={props.isLiked}
				handleLiked={props.handleLiked}
			/>
			<p>{props.title}</p>
		</div>
	</React.Fragment>
);
export default ImageCard;
