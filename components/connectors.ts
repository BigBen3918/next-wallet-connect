export const connectors = {
    injected: {
        properties: {
            chainId: [1, 4002, 56, 97], // add here to handle more injected chains
        },
    },
    walletlink: {
        url: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
        appName: "WalletConnect",
        chainId: 1,
        appLogoUrl:
            "https://cdn.icon-icons.com/icons2/2407/PNG/512/coinbase_icon_146203.png",
    },
    frame: {
        chainId: 1,
    },
    fortmatic: {
        chainId: 1,
        apiKey: "pk_live_F95FEECB1BE324B5",
    },
    portis: {
        dAppId: "211b48db-e8cc-4b68-82ad-bf781727ea9e",
        chainId: [1],
    },
    squarelink: {
        clientId: "5f2a2233db82b06b24f9",
        networks: [1],
    },
    walletconnect: {
        chainId: [1], // add here to handle more injected chains
        rpc: {
            "1": "https://mainnet.eth.aragon.network",
        },
    },
};
