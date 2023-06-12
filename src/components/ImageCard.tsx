type ImageCardProps = {
	id: number;
	title: string;
	image: string;
	isLiked: boolean;
};

const ImageCard = (test: ImageCardProps) => <div>{test.id}</div>;

export default ImageCard;
