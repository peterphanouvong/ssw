import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
// @ts-ignore
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import { styletron } from "../styletron";
import { BaseProvider } from "baseui";
import { theme } from "../theme";
import { UserProvider } from "../context/userContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={theme}>
        <KindeProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </KindeProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
