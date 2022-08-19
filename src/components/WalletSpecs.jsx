import React from 'react'

export default function WalletSpecs({ wallet, view }) {
    return (
        <section className={view === "home" ? "home-wallet-specs" : "wallet-specs"}>
            <div className="spec">{wallet.specs.security}</div>
            <div className="spec">{wallet.specs.anonymity}</div>
            <div className="spec">{wallet.specs.usability}</div>
        </section>)
}
