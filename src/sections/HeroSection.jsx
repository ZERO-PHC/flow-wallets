import React from 'react'
import { Skeleton } from "@chakra-ui/react";
import Card from '../components/Card';

export default function HeroSection({handleAction}) {
    return (
        <main style={{ position: "relative", height: "90vh", width: "100%" }}>
            <Skeleton height="90vh" />
            <section style={{position: "absolute", bottom: -60, left: "60%"}}>

                <Card handleAction={() => handleAction("guide", 0) }> users </Card>
            </section>
            <section style={{position: "absolute", bottom: -60, left: "20%"}}>

                <Card handleAction={() => handleAction("guide", 0) }> users </Card>
            </section>
        </main>
    )
}
