"use client";

import {
	useWeb3Modal,
	useWeb3ModalEvents,
	useWeb3ModalState,
	useWeb3ModalTheme,
} from "@web3modal/ethers5/react";

export default function Home() {
	const { open } = useWeb3Modal();
	const state = useWeb3ModalState();
	const { themeMode, themeVariables, setThemeMode } = useWeb3ModalTheme();
	const events = useWeb3ModalEvents();

	return (
		<main
			className={
				`p-5 flex flex-col gap-5 ` +
				(themeMode === "dark" ? "bg-black" : "bg-white")
			}
		>
			<w3m-button />
			<w3m-network-button />
			<w3m-connect-button />
			<w3m-account-button />

			<button
				className="bg-blue-400 w-[300px] py-4 rounded-2xl"
				onClick={() => open()}
			>
				Connect Wallet
			</button>
			<button
				className="bg-blue-400 w-[300px] py-4 rounded-2xl"
				onClick={() => open({ view: "Networks" })}
			>
				Choose Network
			</button>
			<button
				className="bg-blue-400 w-[300px] py-4 rounded-2xl"
				onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
			>
				Toggle Theme Mode
			</button>
			<div className={themeMode === "dark" ? "text-white" : "text-black"}>
				{`{ open : ${state.open.toString()} }`} <br />
				{`{ NetworkId : ${state.selectedNetworkId} }`} <br />
			</div>
			<div className={themeMode === "dark" ? "text-white" : "text-black"}>
				{`{ themeMode : "${themeMode}" }`} <br />
			</div>
			<div
				className={themeMode === "dark" ? "text-white" : "text-black"}
			>{`{ event : "${events.data.event}" }`}</div>
		</main>
	);
}
