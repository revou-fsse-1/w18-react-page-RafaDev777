import React from "react";

const LikeButton = () => {
  const isLike = false;
  isLike ? (
    <React.Fragment>
      <button>Like</button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <button>Liked</button>
    </React.Fragment>
  );
};

const JoinMembershipButton = () => (
  <React.Fragment>
    <button>Join Photo Club Membership</button>
  </React.Fragment>
);

const RegisterMembershipButton = () => (
  <React.Fragment>
    <button>Register Now</button>
  </React.Fragment>
);

export { LikeButton, JoinMembershipButton, RegisterMembershipButton };
