import { call, put, takeEvery } from "redux-saga/effects";
import commentApi from "api/commentApi";
import { commentActions } from "./commentSlice";

function* fetchCommentList() {
  try {
    const response = yield call(commentApi.getAll);
    yield put(commentActions.fetchCommentListSuccess(response));
  } catch (error) {
    yield put(commentActions.fetchCommentListFailed());
  }
}

export default function* commentSaga() {
  yield takeEvery(commentActions.fetchCommentList, fetchCommentList);
}
