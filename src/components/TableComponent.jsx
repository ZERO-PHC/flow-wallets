import { Container, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import { useTable } from "../providers/table/TableProvider";
import { handleAction } from "../utils/generalUtils";
import { handleFeatureSelection } from "../utils/tableUtils";
import { FeatureComponent } from "./FeatureComponent";
import { WalletComponent } from "./WalletComponent";

export default function TableComponent() {
  const { Wallets, SelectedFeatures, setSelectedFeatures, Features } =
    useTable();
  return (
    <Container
      flexDir={{ sm: "column-reverse", md: "column-reverse", lg: "row" }}
      alignItems={"stretch"}
      w="100%"
      p={0}
    >
      <Container p={0} boxShadow={0}>
        <Container
          p={2}
          borderRadius={"10px 0 0 10px"}
          boxShadow={0}
          justifyContent="flex-start"
        >
          {Wallets.length > 0 ? (
            Wallets.map((wallet, i) => (
              <WalletComponent
                key={i}
                wallet={wallet}
                handleAction={handleAction}
              />
            ))
          ) : (
            <Container
              textAlign="center"
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              justifyContent={"center"}
              alignItems={"center"}
              height="6rem"
            >
              No Wallets Found
            </Container>
          )}
        </Container>
      </Container>
      <Container variant="tableFeatures">
        <Heading
          fontSize={"18px"}
          pb={3}
          textAlign="center"
          fontFamily={"Blinker Bold"}
          borderBottom="1px solid"
          borderColor={"purple.100"}
        >
          FEATURES
        </Heading>
        <Flex
          flexDir={{ sm: "row", md: "row", lg: "column" }}
          justifyContent="center"
        >
          {Features.map((feature, i) => (
            <FeatureComponent
              key={i}
              feature={feature}
              handleAction={handleAction}
              dialog={true}
              handleFeatureSelection={(feature) =>
                handleFeatureSelection(
                  feature,
                  SelectedFeatures,
                  setSelectedFeatures
                )
              }
            />
          ))}
        </Flex>
      </Container>
    </Container>
  );
}
