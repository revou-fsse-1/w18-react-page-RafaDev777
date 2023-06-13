import { Fragment } from 'react';

const BtnMain = ({ label, onClick }) => (
	<Fragment>
		<button
			onClick={() => {
				onClick;
			}}
		>
			{label}
		</button>
	</Fragment>
);

export default BtnMain;
