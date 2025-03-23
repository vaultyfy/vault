import React, { useReducer } from "react";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import { getUser } from "@queries/get-user";
import { LoginResponse, User } from "@utils/types";
import { cookieOptions, TOKEN_KEY } from "@utils/constants";
import { useToastContext } from "@hooks/context";
import { router } from "src/main";

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
  | { type: "LOGOUT" }
  | { type: "SET_USER"; payload: User | undefined }
  | { type: "SET_ACCESS"; payload: UserAccessInfo };

const createAuthContext = () =>
  React.createContext<AuthContextValues | null>(null);

export const AuthContext = createAuthContext();

export const initialState: AuthContextValues = {
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
  const { openToast } = useToastContext();
  const initialAuthState = React.useMemo(() => {
    const hasToken = hasCookie(TOKEN_KEY);
    const userToken = hasToken
      ? getCookie(TOKEN_KEY, { ...cookieOptions })
      : undefined;

    return {
      ...initialState,
      accessInfo: userToken
        ? {
            token: {
              token: String(userToken),
            },
          }
        : undefined,
      isAuthenticated: !!userToken,
    };
  }, []);
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const logout = () => {
    const pathname = window.location.pathname;
    if (pathname.includes("/dashboard")) {
      window.history.pushState({}, "", "/");
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
        // // we should update the route context at this point
        // // with the `invalidate` call
        // router.invalidate();
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
