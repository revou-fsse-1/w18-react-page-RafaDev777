import BtnMain from './BtnMain';

type ImageCardProps = {
	id: number;
	title: string;
	image: string;
	isLiked: boolean;
	handleLike: (id: number, isLiked: boolean) => void;
};

const ImageCard = (props: ImageCardProps) => {
	const label = props.isLiked ? 'Liked' : 'Like';

	return (
		<>
			<div
				style={{
					backgroundImage: `url(${props.image})`,
				}}
			>
				<button
					onClick={() => {
						props.handleLike(props.id, !props.isLiked);
					}}
				>
					{label}
				</button>
				<h2>{props.title}</h2>
			</div>
		</>
	);
};

export default ImageCard;
