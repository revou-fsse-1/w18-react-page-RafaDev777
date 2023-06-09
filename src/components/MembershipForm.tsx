import React from 'react';
import { RegisterMembershipButton } from './Buttons';

const MembershipForm = (props: {
	setShowForm: React.Dispatch<boolean>;
	setIsRegistered: React.Dispatch<boolean>;
}) => (
	<form>
		<input placeholder="insert your email"></input>
		<input placeholder="insert your firstname"></input>
		<input placeholder="insert your lastname"></input>
		<RegisterMembershipButton
			setShowForm={props.setShowForm}
			setIsRegistered={props.setIsRegistered}
		/>
	</form>
);
export default MembershipForm;
