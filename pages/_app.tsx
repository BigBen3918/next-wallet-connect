import type { AppProps } from "next/app";
import { UseWalletProvider } from "use-wallet2";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <UseWalletProvider
            autoConnect={true}
            connectors={{
                walletconnect: { rpc: { 1: "https://mainnet.infura.io/v3/" } },
            }}
        >
            <Component {...pageProps} />
        </UseWalletProvider>
    );
}
