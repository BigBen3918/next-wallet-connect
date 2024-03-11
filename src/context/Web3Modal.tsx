"use client";

import React from "react";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "faf641330f6b3ce2811bb5eb411267df";

// 2. Set chains
const chains = [
	{
		chainId: 1,
		name: "Ethereum",
		currency: "ETH",
		explorerUrl: "https://etherscan.io",
		rpcUrl: "https://cloudflare-eth.com",
	},
	{
		chainId: 11155111,
		name: "Sepolia",
		currency: "ETH",
		explorerUrl: "https://sepolia.etherscan.io",
		rpcUrl: "https://ethereum-sepolia.publicnode.com",
	},
	{
		chainId: 4002,
		name: "Fantom",
		currency: "FTM",
		explorerUrl: "https://testnet.ftmscan.com",
		rpcUrl: "https://rpc.testnet.fantom.network",
	},
];

const ethersConfig = defaultConfig({
	metadata: {
		name: "Web3Modal",
		description: "Web3Modal Laboratory",
		url: "https://web3modal.com",
		icons: ["https://avatars.githubusercontent.com/u/37784886"],
	},
	defaultChainId: 1,
	rpcUrl: "https://cloudflare-eth.com",
});

// Create modal
createWeb3Modal({
	ethersConfig,
	chains,
	projectId,
	enableAnalytics: true, // Optional - defaults to your Cloud configuration
	themeMode: "dark",
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
	return children;
}
