import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, useColorMode } from "@chakra-ui/react";

export default function Logo() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <Button
    onClick={() => router.push("/")}
    >
      <Image
        src={
          colorMode === "light"
            ? "/logos/flowWalletsBlack.png"
            : "/logos/flowWalletsWhite.png"
        }
        layout="fixed"
        width={140}
        height={40}
        minH={"none"}
        alt="logo"
      />
    </Button>
  );
}
