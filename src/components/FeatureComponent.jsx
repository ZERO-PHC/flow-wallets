import React from "react";
import { useDialog } from "../providers/DialogProvider";
import {
  Checkbox,
  Flex,
  Button,
  Divider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useTable } from "../providers/table/TableProvider";
import FeatureModal from "./FeatureModal";

export const FeatureComponent = ({
  feature,
  dialog,
  handleFeatureSelection,
}) => {
  const { SelectedFeatures } = useTable();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        flexDir={{ sm: "column-reverse", md: "column-reverse", lg: "row" }}
        justifyContent={{sm: "space-between", md: "space-between", lg: "space-between"}}
        alignItems={{ sm: "center", md: "center" }}
        gap={{ sm: "10px", md: "10px", lg: "0" }}
        p={{ sm: "8px", md: "12px", lg: "15px" }}
      >
        <Checkbox
          isChecked={SelectedFeatures.includes(feature.id)}
          onChange={() => handleFeatureSelection(feature.id)}
          size={{ sm: "md", md: "lg", lg: "lg" }}
        />
        <Flex
          flexDir={"column"}
          alignItems={{ sm: "center", md: "center", lg: "flex-end" }}
          gap="5px"
        >
          <Text
            fontFamily={"Blinker SemiBold"}
            fontSize={{ sm: ".8rem", md: "1rem", lg: "1.1rem" }}
            textAlign={{sm: "center" ,md: "inherit",lg: "inherit"}}
          >
            {feature.name}
          </Text>
          <Button
            variant="semiBold"
            onClick={onOpen}
            fontSize={{ sm: ".6rem", md: ".8rem", lg: "1rem" }}
          >
            Learn More
          </Button>
        </Flex>
      </Flex>
      <Divider
        orientation={{ sm: "vertical", md: "vertical", lg: "vertical" }}
        h={{ sm: "90%", md: "90%", lg: "1px" }}
        w={{ sm: "1px", md: "1px", lg: "90%" }}
        bg={"gray.200"}
        borderRadius={3}
        boxShadow={0}
        border="none"
        m={"5px auto"}
        mt={0}
      />
      <FeatureModal isOpen={isOpen} onClose={onClose} feature={feature} />
    </>
  );
};
