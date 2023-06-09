const SnackBar = (props: { totalLiked: number }) => (
	<div>
		{props.totalLiked === 0 ? (
			<p>You don't have liked photo</p>
		) : props.totalLiked === 1 ? (
			<p>You have 1 liked photo</p>
		) : (
			<p>You have {props.totalLiked} liked photos</p>
		)}
	</div>
);
export default SnackBar;
