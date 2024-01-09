import { Reducer } from "redux";
import { User } from "../../Models/User";

const initUser: User = {
  username: "",
  email: "",
};

interface IAction {
  type: string;
  payload: User;
}

const UserReducer: Reducer<User, IAction> = (state: User = initUser, action: IAction): User => {
  switch (action.type) {
    case "LOGIN_FINALLY":
      state = action.payload;
      return state;
    case "LOGOUT_FINALLY":
      return state;
    default:
      return initUser;
  }
};

export default UserReducer;
