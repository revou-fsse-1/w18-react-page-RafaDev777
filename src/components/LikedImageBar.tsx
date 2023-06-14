const LikedImageBar = (props: { totalLiked: number }) => (
	<div className="bg-sky-600 px-4 py-3 rounded-xl my-5 text-white">
		{props.totalLiked === 0 ? (
			<p>You don't have liked photo</p>
		) : props.totalLiked === 1 ? (
			<p>You have 1 liked photo</p>
		) : (
			<p>You have {props.totalLiked} liked photos</p>
		)}
	</div>
);

export default LikedImageBar;
