import React from "react";
import { images as Data } from "../datas/images";
import ImageCard from "./ImageCard";

const SearchBar = () => {
  const [query, setQuery] = React.useState("");
  return (
    <>
      <input
        placeholder="Search Images"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {Data.filter((data) => {
          if (query === "") {
            return data;
          } else if (data.title.toLowerCase().includes(query.toLowerCase())) {
            return data;
          }
        }).map((data, index) => (
          <ImageCard
            key={index}
            title={data.title}
            image={data.imgUrl}
            isLiked={data.isLiked}
          />
        ))}
      </div>
    </>
  );
};
export default SearchBar;
