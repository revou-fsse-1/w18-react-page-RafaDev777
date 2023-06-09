import React from 'react';

const JoinMembershipButton = (props: {
	disabled: boolean;
	onclick: React.MouseEventHandler;
}) => (
	<React.Fragment>
		<button disabled={props.disabled} onClick={props.onclick}>
			Join our membership now !
		</button>
	</React.Fragment>
);

const RegisterMembershipButton = (props: {
	setShowForm: React.Dispatch<boolean>;
	setIsRegistered: React.Dispatch<boolean>;
}) => (
	<React.Fragment>
		<button>Register Now</button>
	</React.Fragment>
);

export { JoinMembershipButton, RegisterMembershipButton };
