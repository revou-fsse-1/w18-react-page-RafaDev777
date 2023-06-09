import React from 'react';
import MembershipForm from './MembershipForm';

const PopupMembership = (props: {
	setShowForm: React.Dispatch<boolean>;
	setIsRegistered: React.Dispatch<boolean>;
}) => (
	<div>
		<h2>Register to Photo Club Member</h2>
		<p>Get countless benefit by joining as a member of Photo Club</p>
		<MembershipForm
			setShowForm={props.setShowForm}
			setIsRegistered={props.setIsRegistered}
		/>
	</div>
);

export default PopupMembership;
