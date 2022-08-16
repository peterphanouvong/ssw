import jwt from "jsonwebtoken";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useKindeToken } from "../hooks/useKindeToken";
// @ts-ignore
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { AccessTokenData, KindeToken, KindeUser } from "../@types/kindeAuth";

interface UserContextInterface {
  oauthUser: KindeUser | undefined;
  setOauthUser: any;
  isAuthenticated: boolean | undefined;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean | undefined;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  accessToken: AccessTokenData | undefined;
  permissions: Array<string> | undefined;
  orgCode: string | undefined;
}

interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextInterface | null>(null);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const {
    isAuthenticated: _isAuthenticated,
    user: _oauthUser,
    isLoading: _isLoading,
  } = useKindeAuth();
  const { token: _token } = useKindeToken();

  const [oauthUser, setOauthUser] = useState<KindeUser | undefined>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [kindeToken, setKindeToken] = useState<KindeToken | undefined>();
  const [accessToken, setAccessToken] = useState<AccessTokenData | undefined>();

  const permissions = accessToken?.permissions || [];
  const orgCode = accessToken?.org_code || "";

  useEffect(() => {
    if (kindeToken) {
      setAccessToken(jwt.decode(kindeToken.access_token) as AccessTokenData);
    }
  }, [kindeToken]);

  useEffect(() => {
    if (_oauthUser != undefined) setOauthUser(_oauthUser);
    if (_isAuthenticated != undefined) setIsAuthenticated(_isAuthenticated);
    if (_isLoading != undefined) setIsLoading(_isLoading);
    if (_token != undefined) setKindeToken(_token);
  }, [_isAuthenticated, _isLoading, _oauthUser, _token]);

  useEffect(() => {
    const createUserIfNeeded = async () => {
      await fetch("/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(oauthUser),
      }).then(async (res) => {
        return await res.json();
      });
    };
    if (oauthUser) {
      createUserIfNeeded();
    }
  }, [oauthUser]);

  return (
    <UserContext.Provider
      value={{
        oauthUser,
        setOauthUser,
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
        accessToken,
        permissions,
        orgCode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext) as UserContextInterface;
}
