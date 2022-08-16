export interface KindeToken {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface AccessTokenData {
  aud: string[];
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  org_code: string;
  permissions: string[] | null;
  scp: string[];
  sub: string;
}

export interface KindeUser {
  id: string;
  last_name: string;
  first_name: string;
  preferred_email: string;
}
