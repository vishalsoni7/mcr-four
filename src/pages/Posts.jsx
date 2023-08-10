import { useContext, useState } from "react";
import { PostContext } from "../component/PostContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faSquareShareNodes,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { Sort } from "./Sort";
import { NavLink } from "react-router-dom";

export const Posts = () => {
  const { data, handleUpVote, handleDownVote, arrow } = useContext(PostContext);

  return (
    <div className="post">
      <div>
        <h2 className="h1"> Latest Posts </h2>
        {data.map((posts) => (
          <div className="post-inner-div" key={posts.postId}>
            <div>
              {" "}
              <h1 className="icon">
                {" "}
                <FontAwesomeIcon
                  className={arrow ? "arrow" : ""}
                  onClick={() => handleUpVote(posts.postId)}
                  icon={faCaretUp}
                  size="xl"
                />
                {posts.upvotes - posts.downvotes}
                <FontAwesomeIcon
                  className={arrow ? "arrow" : ""}
                  onClick={() => handleDownVote(posts.postId)}
                  icon={faCaretDown}
                  size="xl"
                />
              </h1>{" "}
            </div>

            <div className="post-inner-div-2">
              <div className="post-img-div">
                <img src={posts.picUrl} height="30rem" />
                <span> Posted by @{posts.username} </span>
                <span> {posts.createdAt} </span>
              </div>
              <div>
                <NavLink className="link" to={`/post/${posts.postId}`}>
                  {" "}
                  <h4> {posts.post} </h4>{" "}
                  {posts.tags.map((tag) => (
                    <span key={tag}> {tag.tags} </span>
                  ))}
                  <span> {posts.postDescription} </span>
                </NavLink>
                <hr />
                <div className="icon-div">
                  {" "}
                  <FontAwesomeIcon icon={faComments} />
                  <FontAwesomeIcon icon={faSquareShareNodes} />{" "}
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    className="changecolor"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Sort />
    </div>
  );
};
