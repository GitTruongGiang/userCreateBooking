import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import appService from "../app/appService";
import isValidToken from "../utils.js/jwt";
const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: "",
};
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const INITIALIZE = "INITIALIZE";

const reducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      const { data, isAuthenticated } = action.payload;
      return {
        ...state,
        isInitialized: true,
        isAuthenticated,
        user: data,
      };
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.payload.user };
    case LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, user: null };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    default:
      break;
  }
};

const AuthContext = createContext({ ...initialState });

const setSession = async (accessToken) => {
  if (accessToken) {
    window.localStorage.setItem("accessToken", accessToken);
    appService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    window.localStorage.removeItem("accessToken", accessToken);
    delete appService.defaults.headers.common.Authorization;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const isInitialized = async () => {
      const accessToken = window.localStorage.getItem("accessToken");
      try {
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          const response = await appService.get("/users/me");
          const { data } = response.data;
          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: true, data },
          });
        } else {
          setSession(null);
          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: false, data: null },
          });
        }
      } catch (error) {
        setSession(null);
        dispatch({
          type: INITIALIZE,
          payload: { isAuthenticated: false, data: null },
        });
      }
    };
    isInitialized();
  }, []);

  const login = async ({ email, password }, callback) => {
    const response = await appService.post("/auth/acount", { email, password });
    const { user, accessToken } = response.data.data;
    setSession(accessToken);
    dispatch({ type: LOGIN_SUCCESS, payload: { user } });
    callback();
    toast.success("login success");
  };

  const logout = async (callback) => {
    setSession(null);
    dispatch({ type: LOGOUT_SUCCESS });
    callback();
  };

  const register = async (
    { name, email, password, city, phone, status },
    callback
  ) => {
    const response = await appService.post("/users", {
      name,
      email,
      password,
      city,
      phone,
      status: status,
    });
    const { user, accessToken } = response.data.data;
    setSession(accessToken);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { user },
    });
    callback();
    toast.success("register success");
  };
  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
