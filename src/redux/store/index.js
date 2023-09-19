import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

import addRemoveCart from "../reducers/addRemoveCart";
import adminReducer from "../reducers/adminReducer";
import mReducer from "../reducers/mainReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  addRemove: addRemoveCart,
  admin: adminReducer,
  mainR: mReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
