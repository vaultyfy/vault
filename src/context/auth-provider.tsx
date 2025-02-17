import React, { useReducer } from "react";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import { getUser } from "@queries/get-user";
import { LoginResponse, User } from "@utils/types";
import { useCurrentPath } from "@hooks/current-path";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { cookieOptions, TOKEN_KEY } from "@utils/constants";
import { useToastContext } from "@hooks/context";
import { RoutePaths } from "@tanstack/react-router";
import { FileRouteTypes } from "src/routeTree.gen";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface UserAccessInfo extends Pick<LoginResponse, "token"> {}

export type AuthContextValues = {
  isAuthenticated: boolean;
  logout?: () => void;
  user: User | undefined;
  accessInfo: UserAccessInfo | undefined;
};

type Actions =
  | { type: "SET_USER"; payload: User | undefined }
  | { type: "SET_ACCESS"; payload: UserAccessInfo }
  | { type: "LOGOUT" };

const createAuthContext = () =>
  React.createContext<AuthContextValues | null>(null);

export const AuthContext = createAuthContext();

const initialState: AuthContextValues = {
  user: undefined,
  accessInfo: undefined,
  isAuthenticated: false,
};

const authReducer = (
  state: AuthContextValues,
  action: Actions,
): AuthContextValues => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "SET_ACCESS":
      return { ...state, accessInfo: action.payload };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const pathname = useCurrentPath();
  const navigate = useNavigate();
  const { openToast } = useToastContext();
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logout = () => {
    if (pathname.includes("/dashboard")) {
      navigate({ to: "/", from: pathname as FileRouteTypes["fullPaths"] });
      openToast("Logout successful!", "success");
    }
    deleteCookie(TOKEN_KEY, { ...cookieOptions });
    dispatch({ type: "LOGOUT" });
  };

  React.useEffect(() => {
    const obtainUserProfile = async () => {
      if (!hasCookie(TOKEN_KEY)) return;

      const userCookie = getCookie(TOKEN_KEY, { ...cookieOptions });
      if (!userCookie) return;

      dispatch({
        type: "SET_ACCESS",
        payload: {
          token: {
            token: String(userCookie),
          },
        },
      });

      try {
        const data = await getUser();
        dispatch({
          type: "SET_USER",
          payload: data?.payload as User | undefined,
        });
      } catch (error) {
        console.error(error);
        openToast("Failed to fetch", "error");
      }
    };

    if (!state.user && hasCookie(TOKEN_KEY)) {
      obtainUserProfile();
    }
  }, []);
  const values: AuthContextValues = {
    user: state.user,
    accessInfo: state.accessInfo,
    isAuthenticated: state.isAuthenticated,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
