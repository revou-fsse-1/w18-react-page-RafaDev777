import { Fragment } from 'react';

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
		<Fragment>
			<div
				style={{
					backgroundImage: `url(${props.image})`,
				}}
				className="w-[200px] aspect-[2/3] bg-cover bg-no-repeat rounded-xl drop-shadwo-2xl grid overflow-hidden"
			>
				<button
					onClick={() => {
						props.handleLike(props.id, !props.isLiked);
					}}
					className={`px-5 py-[0.12rem] rounded-md mt-2 mr-2 w-fit h-fit justify-self-end
					${props.isLiked ? 'bg-sky-400 text-white' : 'bg-gray-300'}`}
				>
					{label}
				</button>
				<div className="self-end text-center bg-gradient-to-t from-black w-full">
					<h2 className="mb-3 text-lg text-white font-semibold">
						{props.title}
					</h2>
				</div>
			</div>
		</Fragment>
	);
};

export default ImageCard;
/*
drop-shadwo-[0_25px_25px_rgba(56,189,248,0.25)]
 */
