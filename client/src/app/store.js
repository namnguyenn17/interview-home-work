import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

import commentReducer from "features/comment/commentSlice";
import postReducer from "features/post/postSlice";
import userReducer from "features/user/userSlice";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
});
const rootPersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootPersistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export let persistor = persistStore(store);
