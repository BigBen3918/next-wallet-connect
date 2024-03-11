import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Web3ModalProvider } from "@/context/Web3Modal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Multi Wallet Connect",
	description: "You can connect any crypto wallet via this project...",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Web3ModalProvider>{children}</Web3ModalProvider>
			</body>
		</html>
	);
}
