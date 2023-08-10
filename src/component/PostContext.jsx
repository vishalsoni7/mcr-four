import { createContext, useState } from "react";
import { forumData } from "../data";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [data, setData] = useState(forumData.posts);
  const [arrow, setArrow] = useState(false);

  const handleUpVote = (id) => {
    const updateData = data.map((u) =>
      u.postId === id ? { ...u, upvotes: u.upvotes + 1 } : u
    );
    setData(updateData);
  };

  const handleDownVote = (id) => {
    const updateData = data.map((d) =>
      d.postId == id ? { ...d, downvotes: d.downvotes + 1 } : d
    );
    setData(updateData);
    setArrow(true);
  };

  const values = {
    data,
    setData,
    handleUpVote,
    handleDownVote,
    arrow,
  };
  return (
    <>
      {" "}
      <PostContext.Provider value={values}>
        {" "}
        {children}{" "}
      </PostContext.Provider>{" "}
    </>
  );
};
