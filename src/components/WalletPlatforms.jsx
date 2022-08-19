import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export const WalletPlatforms = ({wallet}) => {
    // return an array of 4 icon components
    return (
      <Flex>
        {wallet.platforms.map((platform) => (
          <Image
            src={"/assets/wallets/platform-0.png"}
            key={platform}
            height={30}
            width={30}
            alt="img"
          />
        ))}
      </Flex>
    );
  };
