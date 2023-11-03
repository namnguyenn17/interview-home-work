import { Avatar } from "antd";
import React from "react";
import avtImg from "assets/avt-chibi.jpg";

import "./styles.scss";
const Comments = ({ comment }) => {
  return (
    <div className="comment">
      <Avatar src={avtImg} size={50} />
      <div className="comment__container">
        <div className="comment__container_name">
          <span style={{ color: "black", fontWeight: "600" }}>
            {comment?.name}
          </span>
          <span className="comment__container_name_date">a day ago</span>
        </div>
        <p>{comment?.body}</p>
        <span className="comment__container_btn">Reply to</span>
      </div>
    </div>
  );
};

export default Comments;
