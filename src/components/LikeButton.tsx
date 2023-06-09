import React from "react";

const LikeButton = (props: { key: number; isLiked: boolean }) => {
  const LikedStyle = "bg-green";
  const DefaultStyle = "bg-gray";
  const buttonStyle = props.isLiked ? LikedStyle : DefaultStyle;
  const buttonText = props.isLiked ? "Liked" : "Like";
  return (
    <React.Fragment>
      <button className={`${buttonStyle}`} onClick={() => {}}>
        {buttonText}
      </button>
    </React.Fragment>
  );
};

export default LikeButton;
