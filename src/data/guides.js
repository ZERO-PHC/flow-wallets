export const guides = [
  {
    id: "0",
    name: "What is a Wallet?",
    selected: false,
    type: "guide",
    src: "/assets/guides/guide-0.png",
    text: 
    [
      {
        paragraph: "A wallet is a software program that stores your private and public keys, which can be used to receive and spend cryptocurrencies. It also allows you to interact with decentralized applications on the blockchain.",
      },
      {
        paragraph: "It is a user interface through which one proves and can also use to sign off the ownership of the assets to others on the ledger. The digital assets on the blockchain that one owns and controls through a wallet include cryptocurrencies, utility tokens, and non-fungible tokens (NFTs). ",
      },
      {
        paragraph: "The word wallet (e-wallet) has also often been used to describe accounts that one can use to receive and send money on centralized online payment platforms such as PayPal, Payoneer, and Wise. Contrary to a common belief, no actual assets are sent into or out of crypto or any other digital wallet. The digital assets are only recorded and assigned to the addresses of users on a common ledger of transactions."
      },
      {
        paragraph: "The ledger in the conventional payment system is stored in a server. A central authority updates it either through its agents or automated systems it has in place. On the other hand, the blockchain ledger is distributed on a peer-to-peer network and updated through a consensus mechanism. In both cases, however, a wallet is just a window through which a user can read the ledger and, in particular, be informed about data that relates to the assets assigned to them. Through it, they can digitally sign a transaction authorizing those who maintain the common ledger to take some of the assets they own and assign them to another address or owner.  "
      },
      {
        paragraph: "A wallet with an elaborate user interface (UI) does not come standard with the blockchain. What comes as standard is the public and private keys, basic components of a wallet. This cryptography feature is part of the core software that one installs on their computer to be part of a blockchain’s peer-to-peer network."
      },
      {
        paragraph: "It is often the centralized businesses that emerge around a blockchain, in particular exchanges, that design and make available easy-to-use wallets for the general public. Other wallets are also built as open-source projects by the community that emerges around a blockchain."
      },
      {
        paragraph: "Meanwhile, tech-savvy users can use the rudimentary public and private keys capacity that comes with the core software of a blockchain. Indeed, those highly skilled in blockchain development can build their own blockchain user interfaces."
      },
      {
        paragraph: "It is important to point out that developers behind some blockchains, such as Flow, start with an elaborate wallet as part of the basic infrastructure. Whatever the case, as an ordinary user, the first thing you need to use a blockchain is a wallet."
      }
    ]
  },
  {
    id: "1",
    selected: false,
    type: "guide",
    src: "/assets/guides/guide-1.png",
    name: "Why do you need a Wallet?",
    text: [
      {
        paragraph: "To have a meaningful interaction with a blockchain, you first need a wallet. You can have it installed as an application on your smartphone, client software on your desktop, or a special device (hardware wallet). In particular, a wallet will serve as the interface through which you can perform the following functions:"
      },
      {
        title: "Receive payment",
        paragraph: "You need a wallet if someone wants to pay you in crypto. Through it, you will generate an address and share it with them. They will input the address into their own wallet and make the payment."
      },
      {
        title: "Check your balances",
        paragraph: "It is through your wallet that you can know how much crypto you have on the blockchain. Most wallets are designed to indicate the value in fiat currency, particularly the US dollar. The wallet can also indicate the reigning exchange rate between the crypto assets you have and fiat currencies."
      },
      {
        title: "Sign transactions",
        paragraph: "It is through the wallet that you transfer ownership of assets on the blockchain to others. Your wallet is built with a private key through which you can approve such transactions. You don't need to know the details of the private key as it usually works behind the scenes once you hit ‘send.’ "
      },
      {
        title: "Receiving mining/staking reward",
        paragraph: "It takes a collaboration of nodes on a peer-to-peer network through a consensus protocol to update transactions on the blockchain’s shared ledger. If you have a node that participates in maintaining the shared ledger, you will receive a reward, which can only go to a wallet that is part of the node.  "
      },
      {
        title: "Manage NFTs",
        paragraph: "Non-fungible tokens (NFTs) are photos, videos, audio, digital art, and documents stored on the blockchain. You need a wallet to create (mint), acquire, and trade these assets. You not only exercise ownership of NFTs through the wallet but also pay transaction fees for creating and transferring the assets on the blockchain. "
      },
      {
        title: "Manage your identity and data",
        paragraph: "Transactions on the blockchain are usually recorded using pseudonymous identities. However, blockchain is also used to build identity and data management systems. For example, Electronic Health Record (EHR) systems are being built on the blockchain. Such systems are designed to give patients full control over their data. The end-user gives health service providers and researchers access to their data through wallets. "
      },
      {
        title: "Interact with smart contracts",
        paragraph: "Smart contracts on the blockchain are being used to automate processes and systems. In many instances, a user can only interact with such systems through wallets that connect to the blockchain on which the smart contracts execute. "
      }
    ]
  },
  {
    id: "2",
    selected: false,
    type: "guide",
    src: "/assets/guides/guide-2.png",
    name: "What are wallet keys?",
    text: [
      {
        paragraph: "To the ordinary end-user, a wallet is a mobile application, software on a computer, an account on a website, or a special electronic device (hardware wallet). In technical terms, however, a crypto wallet is a pair of private and public keys. "
      },
      {
        paragraph: "Private and public keys are the major components of a type of cryptography known as asymmetric cryptography, invented in the 1970s by Martin Hellman, Whitfield Diffie, and Ralph Merkle. For thousands of years, societies have used symmetric cryptography to secure communication in the presence of adversaries. It was expected for a king, emperor, general, or consul to use a key (code or cipher) to encrypt their messages so that they don't fall into the wrong hands. "
      },
      {
        paragraph: "For anyone else to read the message, they needed to have the same key (cipher). That meant the receiver had to have a copy of the key before the message was even composed and sent. As you can imagine, this created a major challenge, especially when the sender and the recipient were far apart. Sending the key through channels accessible to adversaries exposed it to the risk of being intercepted. When the actual message was relayed, the person who intercepted the code could easily decipher it. "
      },
      {
        paragraph: "Asymmetric cryptography solves this problem. Instead of having the same key used to encrypt and decrypt the message, different keys are used for each of the actions. The key used to encrypt the message cannot decrypt it. The key used to encrypt is the public key, and the one used to decrypt is the private key. The recipient of the message generates them as a pair before sharing the public key with anyone who needs to send them encrypted messages. Meanwhile, they keep the private key known only to them."
      },
      {
        paragraph: "They don't have to worry about who gets or intercepts the public key. That is because all one can do with it is encrypt a message. Only the person with the corresponding private key can decipher the message. Satoshi Nakamoto made asymmetric cryptography a critical component of the Bitcoin infrastructure. However, instead of using it to secure messages, Bitcoin used it to secure digital value transfers between two individuals. "
      },
      {
        paragraph: "To receive Bitcoin, you must generate a pair of public and private keys. You then share the public key with anybody who wants to send you coins. This basically means the sender asks the peer-to-peer network to take some of the coins assigned to them on the shared ledger and assign them to the public key you provided. Indeed, on the blockchain, the public key is also an address to which coins are sent. The actual key is a string of seemingly random alphanumerics. It can also be expressed as a QR code that a smart device can scan."
      },
      {
        paragraph: "Since you are the only one who possesses the corresponding private key, only you can approve (decrypt) the transfer of the coins on the public ledger to another address. That means only you can transfer or spend the coins. The public-private key encryption is standard for all public blockchains, including the Flow blockchain."
      }
    ]
  },
  {
    id: "3",
    selected: false,
    type: "guide",
    src: "/assets/guides/guide-4.png",
    name: "What types of wallets are there?",
    text: [
      {
        paragraph: "Wallets come in various types, but all fall in either cold or hot categories. "
      },
      {
        paragraph: "A hot wallet is connected to the internet, or the private keys are exposed to the internet during the signing of transactions on the blockchain. On the other hand, a cold wallet is not connected to the internet, or the private keys are not exposed to the internet during the signing of transactions on the blockchain. "
      },
      {
        paragraph: "The public and private keys of a cold wallet are generated offline. The public key can be shared online, but the private key is not even stored in a device that connects to the internet. The moment a private key is used to sign a transaction online and is exposed, the wallet ceases to be a cold wallet. That means a new cold wallet has to be generated, and the balance from the exposed wallet is transferred."
      },
      {
        paragraph: "The following are common types of crypto wallets:"
      },
      {
        title: "Desktop wallets",
        paragraph: "This a wallet that exists as client software installed on a desktop. The earliest Bitcoin wallets were of this type. They are often part of the client core software a computer or node has to run to be part of a blockchain's peer-to-peer network."
      },
      {
        paragraph: "A desktop wallet can be cold or hot depending on whether the desktop it is installed is connected to the internet. If a pair of public and private keys are generated offline, and the desktop is never connected to the internet, it can be described as a cold wallet."
      },
      {
        paragraph: "On the other hand, if the computer is connected to the internet, even if it is for a short while, then the wallet is hot. "
      },
      {
        title: "Browser wallets",
        paragraph: "As the name suggests, these are wallets you access and use through a browser. Generally, wallets on exchanges such Coinbase and Localbitcoins fall into this category. Blocto, Dapper Wallet, and Lilico are browser wallets used for assets on the Flow blockchain."
      },
      {
        paragraph: "Given that they are used through a browser, these wallets are hot. It is important to point out that many browser wallets can also be accessed through smartphone application wallets."
      },
      {
        title: "Smartphone application",
        paragraph: "This is basically an application you download and install on your smartphone. The wallets are usually by exchanges and payment processors. A few are community projects. Blocto is an example of a Flow blockchain wallet used through a mobile app."
      },
      {
        paragraph: "The mobile wallet is convenient as you can walk around with it and spend your crypto in physical stores that accept crypto. Mobile wallets are hot wallets as the phone is often connected to the internet."
      },
      {
        title: "Hardware Wallet",
        paragraph: "This special electronic device is designed to help users access and use their balances on the blockchain. The devices are usually used alongside an online portal or client software installed on a desktop. The most popular hardware wallet brands include Ledger and Trezor. While connected to the internet, hardware wallets are generally considered cold wallets. That is because they can keep private keys offline when signing transactions."
      },
      {
        title: "Paper wallet",
        paragraph: "This is a paper on which details of a wallet are printed. The details are in the form of strings of alphanumeric letters and numbers or QR codes. You can install software on your computer to help generate this type of wallet offline."
      },
      {
        paragraph: "Some websites will help you do this. One such website is Bitaddress.org. Once on the site, you can disconnect the internet, and the website will still work offline. That makes it possible to generate a wallet that has not been exposed to the internet."
      },
      {
        paragraph: "Paper wallets are generally considered cold wallets, especially if they are generated and printed offline. "
      },
      {
        title: "Brain Wallet",
        paragraph: "If you generate a wallet and instead of recording it, you memorize it and then delete it from your computer, it becomes a brain wallet. When you want to sign a transaction, you must recover the keys from your brain memory."
      },
      {
        paragraph: "This type of wallet is not popular obviously because people forget easily. No one wants to risk forgetting keys to a wallet holding a significant amount of their coin possession."
      }
    ]
  },
  {
    id: "4",
    selected: false,
    type: "guide",
    src: "/assets/guides/guide-5.png",
    name: "What are Custodial Wallets?",
    text: [
      {
        paragraph: "A custodial wallet is a wallet you can use to transact crypto, but you don't have control over its private keys. The private keys remain in the control of a trusted third-party service provider, such as a centralized exchange. "
      },
      {
        paragraph: "The Dapper Wallet, Blocto, and Finoa used with assets on the Flow blockchain are custodial wallets."
      },
      {
        title: "Advantages of custodial wallets",
        paragraph: "A custodial wallet has several advantages and benefits. The following are the most notable:"
      },
      {
        title: "The burden of security is not entirely on you.",
        paragraph: "Since it is the trusted third-party service provider that controls the private keys, you don't have to worry much about it. Indeed, the service provider often has more capacity to secure the wallets as they can hire experts."
      },
      {
        title: "It is easy to recover forgotten passwords.",
        paragraph: "If you ever happen to misplace or forget the password to the wallet, you can easily reach out to support, and they can easily reset it for you, and you regain access to your funds. The wallet code is actively kept up to date."
      },
      {
        paragraph: "The service provider is directly in charge of the wallet and the funds. That means if the funds are lost, they are held responsible and can even be sued for it. Also, the service provider is a business in direct competition with others.  These are some of the facts that will motivate the service provider to keep the wallet up to date."
      },
      {
        title: "Custodial wallets offer convenience. ",
        paragraph: "It is often easy to use custodial wallets, especially when trading crypto and other blockchain assets on exchanges. Also, they tend to have user-friendly interfaces to make transacting easy, especially for those who are not tech-savvy."
      },
      {
        title: "Disadvantages of custodial wallets",
        paragraph: "The following are downsides and risks that come with using custodial wallets:"
      },
      {
        title: "High risk of being hacked",
        paragraph: "It is common for custodial wallet service providers to keep significant amounts of funds in a few hot wallets. The fact that they carry large amounts of assets and their private keys can be accessed remotely often attracts highly skilled hackers."
      },
      {
        paragraph: "Indeed, the crypto space has experienced hundreds of millions of dollars worth of crypto assets stolen annually from hot custodial wallets on exchanges."
      },
      {
        title: "Possibility of wallets being frozen",
        paragraph: "Custodial wallets are in many ways similar to bank accounts. The service provider may decide to freeze your wallet if, for example, they conclude that you have breached terms of use. It is also possible for the service provider to take similar measures if directed by authorities. "
      },
      {
        title: "Risky investments without permission",
        paragraph: "Since the funds are in full control of the service provider, they might decide to invest in a risky investment. If they might lose the funds in the process and if they file bankruptcy, you are unlikely to get your assets back. "
      },
      {
        paragraph: "Indeed, if you wake up one morning and the website is offline, there is often no recourse. In early 2019, the Canadian exchange QuadrigaCX was shut down, and investors lost over $150 million."
      },
      {
        paragraph: "It is easy to be censored."
      },
      {
        paragraph: "The custodial wallet service providers are centralized and hugely regulated. That makes it possible that they can deny you a service either on their own or following demands from authorities in the countries where they operate. For example, in 2021, the Canadian government directed service providers to shut down custodial wallets of protesting truckers."
      },
      {
        title: "They have low privacy.",
        paragraph: "Users of custodial wallets are often required to share personally identifying information such as names and addresses to use custodial wallets. The service providers must meet know your customer (KYC) and anti-money laundering (AML) requirements."
      }
    ]
  },
  {
    id: "5",
    selected: false,
    type: "guide",
    src: "/assets/guides/guide-5.png",
    name: "What are Non-Custodial Wallets?",
    text: [
      {
        paragraph: "A non-custodial wallet is one where the end-user has full control of the private keys. That means no one else has access to the wallet and the funds received and secured through it. Indeed,  a non-custodial wallet is designed to make the end-user their own bank, a primary benefit of blockchain technology."
      },
      {
        paragraph: "The Lilico and Blocto wallet used on the Flow blockchain are examples of a non-custodial wallet."
      },
      {
        title: "Advantages of non-custodial wallets",
        paragraph: "The following are the advantages of using a non-custodial wallet:"
      },
      {
        title: "It gives you full control",
        paragraph: "When you create a non-custodial wallet, you make yourself basically free to do as you please with your assets. There are no terms of use to observe, and you are not limited by the regulations a service provider has to comply with to be in business."
      },
      {
        title: "Offers better security",
        paragraph: "As the end-user of a non-custodial wallet, you can easily protect your funds from hacking that is common online. All you need to do is ensure that your wallet is cold storage; therefore, its private keys cannot be accessed remotely."
      },
      {
        title: "You cannot be censored.",
        paragraph: "Since you have full control of the wallet, nobody can stop you from receiving or making payments. You can send and receive funds from anywhere on the globe. That is in particular because regulatory jurisdictions do not limit the wallet."
      },
      {
        title: "Fast records on the blockchain",
        paragraph: "Transactions from non-custodial wallets register on the blockchain almost immediately. In contrast, it might take longer when it is done from a custodial wallet as the transaction has to go through an internal process before it is submitted to the network for addition to the public ledger. "
      },
      {
        title: "Offers high privacy",
        paragraph: "Users do not have to share any personally-identifying information to use the non-custodial wallet. That is because you are not subject to the regulatory requirements a third-party service provider has to meet, such as know your customer (KYC) and anti-money laundering (AML)."
      },
      {
        title: "Disadvantages of using non-custodial wallets",
        paragraph: "The following are some of the drawbacks of using non-custodial wallets:"
      },
      {
        title: "No help to recover lost keys",
        paragraph: "If you lose the private keys, there is no support to reach out to help you recover them. That also means the coins are lost forever or until you recover the private keys. Indeed, the safety of your private keys is your sole personal responsibility. You might need to take extra steps to ensure you never lose the private keys. That includes generating and storing mnemonics, strings of words easily remember, and can help you recover your wallet’s private keys."
      },
      {
        title: "They offer little convenience. ",
        paragraph: "Non-custodial wallets are often inconvenient to use, especially when trading on exchanges. You often have to first transfer the coins to a custodial wallet on an exchange before you can sell them."
      },
      {
        title: "Clunky and not user friendly",
        paragraph: "Most non-custodial wallets have less smooth user interfaces, especially when compared to custodial wallets. That is because they are open-source projects and not profit-making enterprises. This can be a challenge, especially for users who are not tech-savvy."
      }
    ]
  },
];
