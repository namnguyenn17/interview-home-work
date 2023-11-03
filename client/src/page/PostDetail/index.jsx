/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, Col, Divider, Row, Skeleton, Typography } from "antd";
import commentApi from "api/commentApi";
import postApi from "api/postApi";
import Comments from "components/Comments";
import Tags from "components/Tags";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const { Text } = Typography;

const PostDetail = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  console.log(data);

  useEffect(() => {
    async function getPostDetails() {
      try {
        const postDetail = await postApi.getById(params.id);
        const commentDetail = await commentApi.getCommentsOfPost(params.id);
        setData({ post: postDetail, comment: commentDetail });
      } catch (error) {
        console.log(error);
      }
    }
    getPostDetails();
  }, []);

  return (
    <>
      {data ? (
        <>
          <Button type="primary" onClick={() => navigate(-1)}>
            Go back
          </Button>
          <Card title={data?.post.title}>
            <Row>
              <Col span={18}>
                <Row>Author: {data?.post.author}</Row>
                <Row>Created at: Sep 20, 2018</Row>
              </Col>
              <Col span={6}>
                <Tags />
              </Col>
            </Row>
            <Row>
              <Text>{data?.post.body}</Text>
            </Row>
            <Row>
              <Text style={{ color: "gray" }}>
                {data?.comment.length} replies
              </Text>
            </Row>
            <Divider />
            <Row>
              {data?.comment?.map((comment) => (
                <Comments comment={comment} key={comment.id} />
              ))}
            </Row>
          </Card>
        </>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default PostDetail;
