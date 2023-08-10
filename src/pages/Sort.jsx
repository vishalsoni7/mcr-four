import React, { useContext } from "react";
import { PostContext } from "../component/PostContext";

export const Sort = () => {
  const { data, setData } = useContext(PostContext);

  const handleSorting = (sortType) => {
    let updateData;

    if (sortType === "latest") {
      updateData = [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortType === "upvotes") {
      updateData = [...data].sort((a, b) => b.upvotes - a.upvotes);
    } else {
      return;
    }
    setData(updateData);
  };

  return (
    <div className="sidebar-a">
      <h3>Sort By</h3>
      <select onChange={(e) => handleSorting(e.target.value)}>
        <option value=""> Sort Post </option>
        <option value="latest">Latest Post</option>
        <option value="upvotes"> Up Votes </option>
      </select>
    </div>
  );
};
