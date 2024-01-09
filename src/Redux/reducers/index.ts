import { Reducer, combineReducers } from "redux";

import { User } from "../../Models/User";
import UserReducer from "./UserReducer";
interface IAction {
  type: string;
  payload: User;
}

export type GlobalState = {
  user: Reducer<User, IAction>;
};

const rootReducer = combineReducers<GlobalState>({
  user: UserReducer,
});

export default rootReducer;
