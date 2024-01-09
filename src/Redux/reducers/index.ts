import { combineReducers } from "redux";

import { User } from "../../Models/User";
import UserReducer from "./UserReducer";

export type GlobalState = {
  user: User;
};

const rootReducer = combineReducers<GlobalState>({
  user: UserReducer,
});

export default rootReducer;
