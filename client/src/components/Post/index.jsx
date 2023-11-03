import React, { useState, useEffect } from "react";
import { Button, Card, Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";
import Tags from "components/Tags";
import Comments from "components/Comments";
import { useAppSelector } from "app/hooks";
import commentApi from "api/commentApi";
import { selectUserList } from "features/user/userSlice";

const Post = ({ body, id, userId, title }) => {
  const userList = useAppSelector(selectUserList);
  const [toggleComment, setToggleComment] = useState(false);
  const [commentOfPostList, setCommentOfPostList] = useState([]);

  const getNameAuthor = (user) => {
    const userInfo = userList?.filter((item) => item?.id === user);
    return userInfo[0]?.username;
  };
  useEffect(() => {
    async function getCommentsOfPost() {
      const res = await commentApi.getCommentsOfPost(id);
      setCommentOfPostList([...res]);
    }
    getCommentsOfPost();
  }, [id]);

  return (
    <div className="post">
      <Card>
        <Link className="link" to={`/post/${id}`}>
          <h1>{title}</h1>
        </Link>
        <div className="details">
          <Row>
            <Col span={18}>
              <Row>
                <p style={{ fontSize: "18px" }}>
                  Author: {getNameAuthor(userId)}
                </p>
              </Row>
              <Row>Created at: Sep 20, 2018</Row>
            </Col>
            <Col span={6}>
              <Tags />
            </Col>
          </Row>
          <p>{body.length > 200 ? body.substring(0, 200) + " ..." : body}</p>
        </div>
        <Button
          type="text"
          color=""
          onClick={() => setToggleComment(!toggleComment)}
        >
          {commentOfPostList.length} replies
        </Button>
        {toggleComment && (
          <>
            <Divider />
            {commentOfPostList?.map((comment) => (
              <Comments comment={comment} key={comment.id} />
            ))}
          </>
        )}
      </Card>
    </div>
  );
};

export default Post;
