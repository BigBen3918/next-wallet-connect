import React from "react";
import { useWallet } from "use-wallet2";
import Image from "next/image";

export default function Home() {
    const wallet = useWallet();
    const [open, setOpen] = React.useState(false);

    return (
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
                Connect wallet
            </button>

            {/*  Main modal */}
            {open && (
                <div className="fixed top-0 left-0 w-[100%] h-[100vh]">
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
                                                wallet.connect("injected")
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
                                                wallet.connect("walletconnect")
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
                                                wallet.connect("walletlink")
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
                                                wallet.connect("portis")
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
                                                wallet.connect("fortmatic")
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
                                        <svg
                                            className="mr-2 w-3 h-3"
                                            focusable="false"
                                            data-prefix="far"
                                            data-icon="question-circle"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                                            ></path>
                                        </svg>
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
            )}
        </div>
    );
}
