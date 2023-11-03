import { all } from "redux-saga/effects";
import commentSaga from "../features/comment/commentSaga";
import postSaga from "../features/post/postSaga";
import userSaga from "../features/user/userSaga";

export default function* rootSaga() {
  console.log("root saga");
  yield all([postSaga(), userSaga(), commentSaga()]);
}
