import { Fragment } from 'react';
type BtnMainProps = {
	children : 
}

const BtnMain = ({ children, onClick }) => (
	<Fragment>
		<button
			onClick={() => {
				onClick;
			}}
		>
			{children}
		</button>
	</Fragment>
);

export default BtnMain;
