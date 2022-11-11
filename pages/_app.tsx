import type { AppProps } from "next/app";
import { UseWalletProvider } from "use-wallet2";
import { connectors } from "../components/connectors";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <UseWalletProvider autoConnect={true} connectors={connectors}>
            <Component {...pageProps} />
        </UseWalletProvider>
    );
}
