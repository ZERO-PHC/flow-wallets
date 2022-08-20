import React from 'react'
import { Skeleton, Flex } from "@chakra-ui/react";
import OverviewCard from '../components/OverviewCard';

export default function HeroSection() {
    return (
        <main style={{ position: "relative", height: "90vh", width: "100%" }}>
            <Skeleton height="90vh" />
            <Flex position={"relative"} top={-38} w={"100%"} p="0 15%" gap={10}>
                <OverviewCard 
                title="Are you a new Flow Developer?"
                subtitle="Here is an overview to get you started."
                btnText="Flow Wallets"
                />
                <OverviewCard 
                title="Are you a new Flow User?"
                subtitle="Here is an overview to get you started."
                btnText="Flow Wallets"
                />
            </Flex>
        </main>
    )
}
