import React from 'react'
import { Skeleton, Flex } from "@chakra-ui/react";
import OverviewCard from '../components/OverviewCard';

export default function HeroSection() {
    return (
        <main style={{ position: "relative", height: "90vh", width: "100%" }}>
            <Skeleton height="90vh" />
            <section style={{ position: "absolute", bottom: -60, left: "60%" }}>
                <OverviewCard 
                title="Are you a new Flow Developer?"
                subtitle="Here is an overview to get you started."
                btnText="Flow Wallets"
                />
            </section>
            <section style={{ position: "absolute", bottom: -60, left: "20%" }}>
                <OverviewCard 
                title="Are you a new Flow User?"
                subtitle="Here is an overview to get you started."
                btnText="Flow Wallets"
                />
            </section>
        </main>
    )
}
