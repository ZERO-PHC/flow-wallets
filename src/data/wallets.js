export const wallets = [
  {
    // id: 0,
    id: 'dapper',
    name: "Dapper",
    selected: false,
    type: "wallet",
    categories:[ "ease","all"],
    custodial: true,
    similarWallets: [2, 3],
    specs: {
      crypto: "High",
      security: "High",
      anonymity: "Low",
      swap: "Low",
      usability: "Medium",
    },
    platforms: ["web"],
    text:[
      { paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eget consectetur consectetur, nisi nisi consectetur nisi, egetconsectetur nisi nisi eget consectetur consectetur, nisi nisi consectetur nisi, eget consectetur nisi nisi eget consectetur consectetur consectetur nisi, eget consectetur nisi nisi egetconsectetur consectetur, nisi nisi consectetur nisi, eget consecteturnisi nisi eget consectetur consectetur"}
    ],
    path:"/wallet_dapper.glb",
    url: "dapperWallet.png",
    urlBig: "/wallets/dapperBig.png",
    logo: "logo/dapper.png",
    linearBg: "linear-gradient(180deg, rgba(132, 34, 224, 0.56) -93.6%, rgba(173, 181, 184, 0) 103.6%);",
    website: "https://meetdapper.com/",
    features: [
      "fiat-token"
    ]
  },
  {
    id: 'lilico',
    path:"/wallet_lilico.glb",

    name: "Lilico",
    selected: false,
    type: "wallet",
    categories:[ "security","all"],
    custodial: false,
    similarWallets: [1, 3],
    specs: {
      crypto: "Low",
      security: "Medium",
      anonymity: "High",
      swap: "Low",
      usability: "High",
    },
    platforms: ["web", "chrome", "playstore", "appstore", "hardware"],
    text:[
      { paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eget consectetur consectetur, nisi nisi consectetur nisi, egetconsectetur nisi nisi eget consectetur consectetur, nisi nisi consectetur nisi, eget consectetur nisi nisi eget consectetur consectetur consectetur nisi, eget consectetur nisi nisi egetconsectetur consectetur, nisi nisi consectetur nisi, eget consecteturnisi nisi eget consectetur consectetur"}
    ],
    url: "lilicoWallet.png",
    urlBig: "/wallets/lilicoBig.png",
    logo: "logo/lilico.png",
    linearBg: "linear-gradient(180deg, #F1C7A1 -24.16%, rgba(173, 181, 184, 0) 103.6%)",
    website: "https://lilico.app/",
    features: [
      "nft-support"
    ]
  },
  {
    id: 'blocto',
    path:"/wallet_blocto.glb",

    name: "Blocto",
    selected: false,
    type: "wallet",
    categories:[ "ease","all"],
    custodial: true,
    similarWallets: [0, 4],
    specs: {
      crypto: "High",
      security: "Medium",
      anonymity: "Medium",
      swap: "High",
      usability: "High",
    },
    platforms: ["web", "playstore", "appstore"],
    text:[
      { paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eget consectetur consectetur, nisi nisi consectetur nisi, egetconsectetur nisi nisi eget consectetur consectetur, nisi nisi consectetur nisi, eget consectetur nisi nisi eget consectetur consectetur consectetur nisi, eget consectetur nisi nisi egetconsectetur consectetur, nisi nisi consectetur nisi, eget consecteturnisi nisi eget consectetur consectetur"}
    ],
      url: "bloctoWallet.png",
      urlBig: "/wallets/bloctoBig.png",
      logo: "logo/blocto.png",
      linearBg: "linear-gradient(174.59deg, #449AFD -120.11%, rgba(173, 181, 184, 0) 98.96%);",
      website: "https://blocto.app/",
      features: [
        "email-auth"
      ]
    },
    
  {
    id: 'ledger',
    name: "Ledger",
    path:"/wallet_ledger.glb",

    selected: false,
    type: "wallet",
    categories:[ "security","all"],
    custodial: false,
    similarWallets: [1, 2],
    specs: {
      crypto: "Low",
      security: "High",
      anonymity: "High",
      swap: "Low",
      usability: "Low",
    },
    platforms: ["web", "chrome", "playstore", "appstore", "hardware"],
    text:[
      { paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eget consectetur consectetur, nisi nisi consectetur nisi, egetconsectetur nisi nisi eget consectetur consectetur, nisi nisi consectetur nisi, eget consectetur nisi nisi eget consectetur consectetur consectetur nisi, eget consectetur nisi nisi egetconsectetur consectetur, nisi nisi consectetur nisi, eget consecteturnisi nisi eget consectetur consectetur"}
    ],
    url: "ledgerWallet.png",
    urlBig: "/wallets/ledgerBig.png",
    logo: "logo/ledger.png",
    linearBg: "linear-gradient(180deg, #F8F3EF -82.81%, rgba(173, 181, 184, 0) 103.6%);",
    website: "https://ledger.com/",
    features: [
      "hardware-support"
    ]
  },
  {
    id: 'finoa',
    name: "Finoa",
    path:"/wallet_finoa.glb",

    selected: false,
    type: "wallet",
    categories:[ "anon","all"],
    custodial: true,
    similarWallets: [0, 3],
    specs: {
      crypto: "High",
      security: "High",
      anonymity: "High",
      swap: "Low",
      usability: "High",
    },
    platforms: ["web", "chrome", "playstore", "appstore", "hardware"],
    text:[
      { paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eget consectetur consectetur, nisi nisi consectetur nisi, egetconsectetur nisi nisi eget consectetur consectetur, nisi nisi consectetur nisi, eget consectetur nisi nisi eget consectetur consectetur consectetur nisi, eget consectetur nisi nisi egetconsectetur consectetur, nisi nisi consectetur nisi, eget consecteturnisi nisi eget consectetur consectetur"}
    ],
    url: "finoa.png",
    urlBig: "/wallets/finoa.png",
    logo: "logo/finoa.png",
    linearBg: "linear-gradient(180deg, #32C7A1 -82.81%, rgba(173, 181, 184, 0) 103.6%);",
    website: "https://www.finoa.io/custody/",
    features: [
      "staking"
    ]
  },
];
