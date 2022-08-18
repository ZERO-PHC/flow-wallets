import React from 'react'
import { Skeleton } from "@chakra-ui/react";
import Card from '../components/Card';

export default function HeroSection() {
    return (
        <main style={{ position: "relative", height: "90vh", width: "100%" }}>
            <Skeleton height="90vh" />
            <section style={{ position: "absolute", bottom: -60, left: "60%" }}>
                <Card type="guide" resource="wallet" > users </Card>
            </section>
            <section style={{ position: "absolute", bottom: -60, left: "20%" }}>
                <Card type="guide" resource="wallet-discovery" > users </Card>
            </section>
        </main>
    )
}
