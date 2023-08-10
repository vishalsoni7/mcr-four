import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../component/PostContext";
import { Sort } from "./Sort";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faSquareShareNodes,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faComments, faHeart } from "@fortawesome/free-regular-svg-icons";

export const SinglePost = () => {
  const { data, handleUpVote, handleDownVote, arrow } = useContext(PostContext);
  const { currentPostId } = useParams();

  const findPost = data.find(({ postId }) => postId === currentPostId);

  return (
    <div className="post">
      <div>
        <h2 className="h1"> Posts </h2>

        <div className="post-inner-div">
          <div>
            <h1 className="icon">
              <FontAwesomeIcon
                className={arrow ? "arrow" : ""}
                onClick={() => handleUpVote(findPost.postId)}
                icon={faCaretUp}
                size="xl"
              />
              {findPost.upvotes - findPost.downvotes}
              <FontAwesomeIcon
                className={arrow ? "arrow" : ""}
                onClick={() => handleDownVote(findPost.postId)}
                icon={faCaretDown}
                size="xl"
              />
            </h1>{" "}
          </div>

          <div className="post-inner-div-2">
            <div className="post-img-div">
              <img src={findPost.picUrl} height="30rem" />
              <span> Posted by @{findPost.username} </span>
              <span> {findPost.createdAt} </span>
            </div>
            <div>
              <h4> {findPost.post} </h4>{" "}
              {findPost.tags.map((tag) => (
                <span key={tag}> {tag.tags} </span>
              ))}
              <span> {findPost.postDescription} </span>
              <hr />
              <div className="icon-div">
                <FontAwesomeIcon icon={faComments} />
                <FontAwesomeIcon icon={faSquareShareNodes} />{" "}
                <FontAwesomeIcon
                  icon={faBookBookmark}
                  className="changecolor"
                />
              </div>
            </div>

            <div style={{ marginTop: "3rem" }}>
              {findPost.comments.map((user) => (
                <div className="comment-div">
                  {" "}
                  <img src={user.picUrl} alt="" height="40rem" />{" "}
                  <div className="comment">
                    <p>
                      {" "}
                      Ashwin Khode <span> @{user.username}</span>{" "}
                    </p>{" "}
                    <span className="cmt-span"> Replying to </span>
                    <span className="user"> @{findPost.username}</span>{" "}
                    <p style={{ marginTop: "5px" }}> {user.comment} </p>
                  </div>
                </div>
              ))}{" "}
            </div>
            {findPost.comments.length > 0 && (
              <div className="a">
                {" "}
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faComments} />
                <FontAwesomeIcon icon={faSquareShareNodes} />{" "}
              </div>
            )}
          </div>
        </div>
      </div>

      <Sort />
    </div>
  );
};
