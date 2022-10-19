import { Container, Text, Button, Spacer, Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useDialog } from "../providers/DialogProvider";
import { handleAction } from "../utils/generalUtils";

export default function OverviewCard({ title, subtitle, btnText }) {
  const router = useRouter();
  const { setOpenSearch } = useDialog();
  // destructure colorMode from useColorMode hook
  const { colorMode } = useColorMode();

  function scrollToPreferences() {
  // scroll down 100% of the window height
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });

  }

  return (
    <Container
      flexDir="row"
      alignItems="center"
      variant="overview"
      p={{ sm: "10px", md: "10px 20px", lg: "15px 30px" }}
      w="auto"
      _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
      onClick={title == "Get started" ? () => scrollToPreferences() :  () => handleAction("guide", "_", router, setOpenSearch, "_", "_", "what-is-a-wallet")}
    >
      <Text>{title}</Text>
      <Box w="10%" />
      {title === "Get started" ? (
        <svg
          width="2rem"
          height="2rem"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25.5015"
            cy="25"
            r="24"
            stroke={colorMode === "dark" ? "#6345ED" : "#16FF99"}
            stroke-width="2"
          />
          <path
            d="M25.5 38L38.0574 16.25L12.9426 16.25L25.5 38Z"
            stroke={colorMode === "dark" ? "#6345ED" : "#16FF99"}
            stroke-width="2"
          />
        </svg>
      ) : (
        // an svg icon with a question mark
        <svg
          width="2rem"
          height="2rem"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="24" stroke={colorMode === "dark" ? "#6345ED" : "#16FF99"} stroke-width="2" />
          <path
            d="M25.078 13.2999C28.9 13.2999 31.5 15.7569 31.5 19.1889C31.525 20.2587 31.2618 21.3155 30.7381 22.2487C30.2143 23.1818 29.4493 23.957 28.523 24.4929C26.677 25.6889 26.157 26.4819 26.157 28.0159V28.8999H22.894V27.8469C22.7751 26.8498 22.9596 25.8401 23.4234 24.9495C23.8873 24.0589 24.6089 23.3289 25.494 22.8549C27.236 21.6849 27.821 20.8659 27.821 19.3319C27.8279 18.9712 27.7633 18.6127 27.6308 18.2772C27.4983 17.9416 27.3006 17.6357 27.0492 17.377C26.7978 17.1183 26.4975 16.912 26.1659 16.77C25.8343 16.6281 25.4778 16.5532 25.117 16.5499H24.896C24.5033 16.536 24.1117 16.5996 23.7436 16.7372C23.3755 16.8747 23.0382 17.0835 22.7508 17.3515C22.4635 17.6196 22.2318 17.9416 22.069 18.2993C21.9062 18.6569 21.8155 19.0431 21.802 19.4359V19.6569H18.5C18.4367 18.037 19.0183 16.458 20.1174 15.2664C21.2165 14.0747 22.7433 13.3675 24.363 13.2999C24.6012 13.2868 24.8399 13.2868 25.078 13.2999Z"
            fill={colorMode === "dark" ? "#6345ED" : "#16FF99"}
          />
          <path
            d="M24.9999 36.7C26.4358 36.7 27.5999 35.5359 27.5999 34.1C27.5999 32.6641 26.4358 31.5 24.9999 31.5C23.564 31.5 22.3999 32.6641 22.3999 34.1C22.3999 35.5359 23.564 36.7 24.9999 36.7Z"
            fill={colorMode === "dark" ? "#6345ED" : "#16FF99"}
          />
        </svg>
      )}
    </Container>
  );
}
