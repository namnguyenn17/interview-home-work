import { call, put, takeLatest } from "redux-saga/effects";
import postApi from "api/postApi";
import { postActions } from "./postSlice";

function* fetchPostList() {
  try {
    const response = yield call(postApi.getAll);
    yield put(postActions.fetchPostListSuccess(response));
  } catch (error) {
    yield put(postActions.fetchPostListFailed());
  }
}

export default function* postSaga() {
  yield takeLatest(postActions.fetchPostList, fetchPostList);
}