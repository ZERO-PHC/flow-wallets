export const wallets = [
  {
    id: 'dapper',
    name: "Dapper",
    selected: false,
    type: "wallet",
    categories:[ "ease","all", "security"],
    custodial: true,
    similarWallets: ["blocto", "nufi", "lilico"],
    specs: {
      crypto: "Medium",
      security: "High",
      anonymity: "Low",
      swap: "Low",
      usability: "High",
    },
    platforms: ["web"],
    text:[
      { paragraph: "Dapper is the gateway introducing the next billion people to the benefits of blockchain and the open Metaverse."},
      { paragraph: "With easy-to-use deposit and withdrawal options, streamlined sign up, and advanced security and fraud protection, Dapper offers the robust infrastructure needed to fuel the growth of your product."}
    ],
    path:"/wallet_dapper.glb",
    url: "dapperWallet.png",
    logo: "logo/dapper.png",
    linearBg: "linear-gradient(180deg, rgba(132, 34, 224, 0.56) -93.6%, rgba(173, 181, 184, 0) 103.6%);",
    website: "https://meetdapper.com/",
    features: [
      "email-auth",
      "nft-support"
    ]
  },
  {
    id: 'lilico',
    path:"/wallet_lilico.glb",

    name: "Lilico",
    selected: false,
    type: "wallet",
    categories:[ "security", "anon", "all"],
    nonCustodial: true,
    similarWallets: ["ledger", "blocto"],
    specs: {
      crypto: "Low",
      security: "High",
      anonymity: "High",
      swap: "Low",
      usability: "Medium",
    },
    platforms: ["web", "chrome", "playstore", "appstore", "hardware"],
    text:[
      { paragraph: "Lilico is not your ordinary wallet."},
      { paragraph: "It is a playground for all your assets related to gaming, fashion and art that transcends the current web3 experience. "},
      { paragraph: "Lilico lives in your devices and is playing #onFlow, home to the most creative NFT and crypto projects. "},
      { paragraph: "Built for new users as well as the more experienced players, Lilico brings more fun to the web3 experience while letting you take total control of the security of your assets."},
      { paragraph: "Some advantages of using it are:"},
      { paragraph: "• Fully on your control"},
      { paragraph: "• More fun"},
      { paragraph: "• Better UX."}
    ],
    url: "lilicoWallet.png",
    logo: "logo/lilico.png",
    linearBg: "linear-gradient(180deg, #F1C7A1 -24.16%, rgba(173, 181, 184, 0) 103.6%)",
    website: "https://lilico.app/",
    features: [
      "email-auth",
      "nft-support",
    ]
  },
  {
    id: 'blocto',
    path:"/wallet_blocto.glb",

    name: "Blocto",
    selected: false,
    type: "wallet",
    categories:[ "ease", "security", "all"],
    custodial: true,
    nonCustodial: true,
    similarWallets: ["dapper", "lilico"],
    specs: {
      crypto: "Medium",
      security: "High",
      anonymity: "Low",
      swap: "High",
      usability: "High",
    },
    platforms: ["web", "playstore", "appstore"],
    text:[
      { paragraph: "Blocto’s cross-device SDK solutions and seamless UI/UX experiences with NFTs are just too friendly for devs/projects! "},
      { paragraph: "Some advantages of using Blocto Wallet are:"},
      { paragraph: "• User-friendly onboarding experience"},
      { paragraph: "• Email login"},
      { paragraph: "• Universal Gas fee"},
      { paragraph: "• Cross device experience (SDK - APP)"}
    ],
      url: "bloctoWallet.png",

      logo: "logo/blocto.png",
      linearBg: "linear-gradient(174.59deg, #449AFD -120.11%, rgba(173, 181, 184, 0) 98.96%);",
      website: "https://blocto.app/",
      features: [
        "email-auth",
        "staking",
        "buy-crypto",
        "nft-support"
      ]
    },
    
  {
    id: 'ledger',
    name: "Ledger",
    path:"/wallet_ledger.glb",

    selected: false,
    type: "wallet",
    categories:[ "security","all"],
    nonCustodial: true,
    similarWallets: ["nufi"],
    specs: {
      crypto: "Low",
      security: "High",
      anonymity: "High",
      swap: "Low",
      usability: "Low",
    },
    platforms: ["web", "chrome", "playstore", "appstore"],
    text:[
      { paragraph: "Whether you’re looking to keep your crypto safe for the future or manage it on a daily basis, we’ve got the right product for you."},
    ],
    url: "ledgerWallet.png",
    logo: "logo/ledger.png",
    linearBg: "linear-gradient(180deg, #F8F3EF -82.81%, rgba(173, 181, 184, 0) 103.6%);",
    website: "https://ledger.com/",
    features: [
      "hardware-support",
      "staking",
    ]
  },
  {
    id: 'nufi',
    path:"/wallet_nufi.glb",

    name: "NuFi",
    selected: false,
    type: "wallet",
    categories:[ "security", "anon", "ease", "all"],
    nonCustodial: true,
    similarWallets: ["ledger", "blocto", "dapper"],
    specs: {
      crypto: "High",
      security: "High",
      anonymity: "High",
      swap: "High",
      usability: "High",
    },
    platforms: ["web", "chrome"],
    text:[
      { paragraph: `
      NuFi is a non-custodial Web3 wallet to manage Flow tokens and NFTs, stake and earn FLOW, and connect to Dapps to buy/sell Flow NFTs, trade Flow tokens, discover DeFi and more.
      `},
      {paragraph: "Wallet Features:"},
    { paragraph: "• Non-custodial: no middleman or restrictions, and full asset ownership",},
    {paragraph: "• Stake FLOW to earn FLOW while you sleep"},
    {paragraph: "• Connect to Dapps like NFT marketplaces and decentralized exchanges"},
    {paragraph: "• Visually manage NFTs with an integrated NFT gallery"},
    {paragraph: "• Hardware wallet compatible: manage your Ledger's Flow accounts"},
    {paragraph: "• Buy and sell FLOW using card or bank transfer, and trade cross-chain"},
    {paragraph: "• Multi-chain: use NuFi to manage Flow, Cardano and Solana assets side by side"},
    ],
    url: "nufiWallet.png",
    logo: "logo/nufi.png",
    linearBg: "linear-gradient(180deg, #F1C7A1 -24.16%, rgba(173, 181, 184, 0) 103.6%)",
    website: "https://nu.fi/",
    features: [
      "email-auth",
      "buy-crypto",
      "staking",
      "hardware-support",
      "nft-support"
    ]
  },
  {
    id: 'finoa',
    name: "Finoa",
    path:"/wallet_finoa.glb",

    selected: false,
    type: "wallet",
    categories:["all", "security"],
    custodial: true,
    similarWallets: ["dapper", "blocto"],
    specs: {
      crypto: "High",
      security: "High",
      anonymity: "Low",
      swap: "High",
      usability: "Medium",
    },
    platforms: ["web", "chrome", "playstore", "appstore", "hardware"],
    text:[
      { paragraph: "The curated crypto-asset platform for institutions."},
      { paragraph: "Finoa it's a simple and secure institutional crypto custody and staking solutions across a range of carefully selected assets."}
    ],
    url: "finoa.png",
    logo: "logo/finoa.png",
    linearBg: "linear-gradient(180deg, #32C7A1 -82.81%, rgba(173, 181, 184, 0) 103.6%);",
    website: "https://www.finoa.io/custody/",
    features: [
      "buy-crypto",
    ]
  },
  {
    id: 'flipper',
    name: "Flipper",
    path:"/wallet_flipper.glb",
    comingSoon: true,
    selected: false,
    type: "wallet",
    categories:["all"],
    nonCustodial: true,
    similarWallets: [],
    specs: {
      crypto: "-",
      security: "-",
      anonymity: "-",
      swap: "-",
      usability: "-",
    },
    platforms: ["web", "chrome"],
    text:[
      { paragraph: "We are collecting the information from this wallet and will be available soon!"}
    ],
    url: "flipperWallet.png",
    logo: "logo/flipper.png",
    linearBg: "linear-gradient(180deg, #32C7A1 -82.81%, rgba(173, 181, 184, 0) 103.6%);",
    website: "https://flipper.org/",
    features: [
    ]
  },
];
