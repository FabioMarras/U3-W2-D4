import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

import addRemoveCart from "../reducers/addRemoveCart";
import adminReducer from "../reducers/adminReducer";
import mReducer from "../reducers/mainReducer";

const rootReducer = combineReducers({
  addRemove: addRemoveCart,
  admin: adminReducer,
  mainR: mReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
