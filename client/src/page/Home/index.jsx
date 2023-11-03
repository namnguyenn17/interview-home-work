/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Skeleton } from "antd";
import { useAppDispatch, useAppSelector } from "app/hooks";
import BlogPosts from "components/BlogPosts";
import { commentActions } from "features/comment/commentSlice";
import {
  postActions,
  selectPostList,
  selectPostLoading,
} from "features/post/postSlice";
import { userActions } from "features/user/userSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector(selectPostList);
  const postLoading = useAppSelector(selectPostLoading);

  useEffect(() => {
    function fetchData() {
      dispatch(postActions.fetchPostList());
      dispatch(commentActions.fetchCommentList());
      dispatch(userActions.fetchUserList());
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      {postLoading ? <Skeleton /> : <BlogPosts postList={postList} />}
    </div>
  );
};

export default Home;
