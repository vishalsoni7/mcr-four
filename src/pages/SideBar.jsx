import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBookmark,
  faUser,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

import { forumData } from "../data";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-a">
        {" "}
        <h3>
          <nav to="/">
            <FontAwesomeIcon icon={faHouse} /> Home
          </nav>
        </h3>
        <h3>
          <nav>
            <FontAwesomeIcon icon={faCompass} /> Explore
          </nav>
        </h3>
        <h3>
          <nav>
            <FontAwesomeIcon icon={faBookmark} /> Bookmark
          </nav>
        </h3>
        <h3>
          <nav>
            <FontAwesomeIcon icon={faUser} /> User
          </nav>
        </h3>{" "}
      </div>

      <div className="sidebar-user">
        <img src={forumData.picUrl} />
        <span>
          {" "}
          <b> {forumData.name} </b> <br />{" "}
          <b className="sidebar-span"> @{forumData.username} </b>
        </span>
      </div>
    </div>
  );
};
