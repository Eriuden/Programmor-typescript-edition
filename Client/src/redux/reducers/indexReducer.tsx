import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { allUsersReducer } from "./usersReducer";

export const reducers = combineReducers({
    userReducer,
    allUsersReducer
})