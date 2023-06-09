import React from "react";
import LikeButton from "./LikeButton";

const ImageCard = (props: {
  key: number;
  title: string;
  image: string;
  isLiked: boolean;
}) => (
  <React.Fragment>
    <div
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <LikeButton key={props.key} isLiked={props.isLiked} />
      <p>{props.title}</p>
    </div>
  </React.Fragment>
);
export default ImageCard;
