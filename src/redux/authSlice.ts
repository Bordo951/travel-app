import axios from "axios";
import { AppDispatch, AppState } from "./store";

//types
type UserType = {
  name: string;
  token: string;
};

type SignUpType = {
  name: string;
  email: string;
  password: string;
};

type RequestStatus = "idle" | "loading" | "succeeded" | "failed";

export type AuthState = {
  user: UserType;
  status: RequestStatus;
  error: string;
};

//initial state
const initState: AuthState = {
  user: {
    name: "",
    token: "",
  },
  status: "idle",
  error: "",
};

// reducer
export const authReducer = (state: AuthState = initState, action: AuthActions): AuthState => {
  switch (action.type) {
    case "auth/setUserData":
      return {
        user: {
          name: action.payload.username,
          token: action.payload.token,
        },
        status: "succeeded",
        error: "",
      };
    case "auth/clearUserData":
      return {
        ...state,
        user: {
          name: "",
          token: "",
        },
      };
    case "auth/setRequestStatus":
      return { ...state, status: action.payload };
    case "auth/setErrorMessage":
      return {
        user: {
          token: "",
          name: "",
        },
        status: "failed",
        error: action.payload,
      };
    default:
      return state;
  }
};

//thunks
export const userSignUp = ({ email, name, password }: SignUpType) => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  const url = `https://vhoreho-task-travel-app.herokuapp.com/auth/register`;
  const params: SignUpType = {
    email,
    password,
    name,
  };
  dispatch(setRequestStatus("loading"));
  try {
    const { data } = await axios.post(url, params);
    dispatch(setUserData(data.user.name, data.token));
    localStorage.setItem("TA-34-token", data.token);
  } catch (error) {
    dispatch(setErrorMessage(error.response.data.msg));
  }
};

export const userLogIn = (email: string, password: string) => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  const url = `https://vhoreho-task-travel-app.herokuapp.com/auth/login`;
  const params = {
    email,
    password,
  };
  dispatch(setRequestStatus("loading"));
  try {
    const { data } = await axios.post(url, params);
    dispatch(setUserData(data.user.name, data.token));
    localStorage.setItem("TA-34-token", data.token);
  } catch (error) {
    dispatch(setErrorMessage(error.response.data.msg));
  }
};

export const logOut = () => async (dispatch: AppDispatch, getState: () => AppState) => {
  localStorage.removeItem("TA-34-token");
  dispatch(clearUserData());
};

export const checkUser = () => async (dispatch: AppDispatch, getState: () => AppState) => {
  const token = localStorage.getItem("TA-34-token");
  if (token === null) return;
  const url = `https://vhoreho-task-travel-app.herokuapp.com/auth/user`;
  const headers = {
    "x-auth-token": token,
  };
  try {
    const { data } = await axios.get(url, { headers });
    dispatch(setUserData(data.name, token));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

//actions
const setUserData = (username: string, token: string) =>
  ({ type: "auth/setUserData", payload: { username, token } } as const);

const clearUserData = () => ({ type: "auth/clearUserData" } as const);

const setRequestStatus = (status: RequestStatus) =>
  ({ type: "auth/setRequestStatus", payload: status } as const);

const setErrorMessage = (message: string) =>
  ({ type: "auth/setErrorMessage", payload: message } as const);

export type AuthActions =
  | ReturnType<typeof setUserData>
  | ReturnType<typeof clearUserData>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof setErrorMessage>;

//selectors
export const getErrorMessage = (state: AppState) => state.auth.error;
export const getRequestStatus = (state: AppState) => state.auth.status;
export const getUserName = (state: AppState) => state.auth.user.name;
