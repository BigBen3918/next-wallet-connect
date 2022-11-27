import React from "react";
import { useWallet } from "use-wallet2";
import Image from "next/image";
import { ethers } from "ethers";
import { NETWORK_METADATA } from "../components/networks";
import Animation from "../components/partner";

export default function Home() {
    const wallet = useWallet();
    const [open, setOpen] = React.useState(false);
    const styledAddress = wallet.account
        ? wallet.account.slice(0, 4) + "..." + wallet.account.slice(-4)
        : "Connet Wallet";

    React.useEffect(() => {
        checkChainId();
    }, [wallet.status]);

    const checkChainId = async () => {
        if (wallet.status === "connected" && wallet.ethereum) {
            setOpen(false);
            const provider = new ethers.providers.Web3Provider(wallet.ethereum);

            if (wallet.chainId != 4002) {
                await provider.send("wallet_switchEthereumChain", [
                    { chainId: "0xFA2" },
                ]);
            }

            await provider.send("wallet_addEthereumChain", [
                NETWORK_METADATA[4002],
            ]);
        }
    };

    const connectWallet = (param: string) => {
        try {
            wallet.connect(param);
        } catch (err: any) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className="container mx-auto">
                <div className="h-5"></div>
                <button
                    className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-50 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
                    onClick={() => setOpen(true)}
                >
                    <Image
                        src={"/assets/link.svg"}
                        alt=""
                        className="mr-2"
                        width={15}
                        height={15}
                    />
                    {styledAddress}
                </button>

                <div className="flex gap-2 pt-10 text-[30px]">
                    <label>FTM balance: </label>
                    <h3 className="font-bold">
                        {parseFloat(
                            Number(
                                ethers.utils.formatEther(wallet.balance)
                            ).toFixed(3)
                        )}{" "}
                        FTM
                    </h3>
                </div>

                {/*  Main modal */}
                <div
                    className={
                        open
                            ? "fixed top-0 left-0 w-[100%] h-[100vh] animate-fadeIn"
                            : "hidden"
                    }
                >
                    <div className="relative w-full h-full">
                        {/* Modal content */}
                        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow z-50">
                            <button
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                onClick={() => setOpen(false)}
                            >
                                <Image
                                    src={"/assets/close.svg"}
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                            </button>

                            {/* <!-- Modal header --> */}
                            <div className="py-4 px-6 rounded-t border-b">
                                <h3 className="text-base font-semibold text-gray-900 lg:text-xl">
                                    Connect wallet
                                </h3>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div className="p-6">
                                <p className="text-sm font-normal text-gray-500">
                                    Connect with one of our available wallet
                                    providers or create a new one.
                                </p>
                                <ul className="my-4 space-y-3">
                                    <li>
                                        <div
                                            className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-300 group hover:shadow cursor-pointer"
                                            onClick={() =>
                                                connectWallet("injected")
                                            }
                                        >
                                            <Image
                                                src="/assets/metamask.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                            <span className="flex-1 ml-3 whitespace-nowrap">
                                                MetaMask
                                            </span>
                                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">
                                                Popular
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-300 group hover:shadow cursor-pointer"
                                            onClick={() =>
                                                connectWallet("walletconnect")
                                            }
                                        >
                                            <Image
                                                src={
                                                    "/assets/walletconnect.svg"
                                                }
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                            <span className="flex-1 ml-3 whitespace-nowrap">
                                                WalletConnect
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-300 group hover:shadow cursor-pointer"
                                            onClick={() =>
                                                connectWallet("walletlink")
                                            }
                                        >
                                            <Image
                                                src="/assets/coinbase.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                            <span className="flex-1 ml-3 whitespace-nowrap">
                                                Coinbase Wallet
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-300 group hover:shadow cursor-pointer"
                                            onClick={() =>
                                                connectWallet("portis")
                                            }
                                        >
                                            <Image
                                                src={"/assets/portis.svg"}
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                            <span className="flex-1 ml-3 whitespace-nowrap">
                                                Portis
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-300 group hover:shadow cursor-pointer"
                                            onClick={() =>
                                                connectWallet("fortmatic")
                                            }
                                        >
                                            <Image
                                                src={"/assets/fortmatic.svg"}
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                            <span className="flex-1 ml-3 whitespace-nowrap">
                                                Fortmatic
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                                <div>
                                    <div className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline cursor-pointer">
                                        <Image
                                            src={"/assets/info.svg"}
                                            alt=""
                                            width={13}
                                            height={13}
                                            className="mr-2"
                                        />
                                        Why do I need to connect with my wallet?
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Background */}
                        <div
                            className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] z-20"
                            onClick={() => setOpen(false)}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="h-[40px]"></div>
            <h1 className="font-bold text-[50px] text-center drop-shadow-sm">
                Game Advertisement
            </h1>
            <Animation />
        </div>
    );
}
