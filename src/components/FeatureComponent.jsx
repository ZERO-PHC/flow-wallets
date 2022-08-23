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
  handleAction,
  dialog,
  handleFeatureSelection,
}) => {
  const { handleDialogAction } = useDialog();
  const { SelectedFeatures } = useTable();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex justifyContent={"space-between"} p="0 20px">
        <Checkbox
          isChecked={SelectedFeatures.includes(feature.id)}
          onChange={() => handleFeatureSelection(feature.id)}
          size="lg"
        />
        <Flex flexDir="column" alignItems={"flex-end"}>
          <Text fontFamily={"Blinker SemiBold"} fontSize="1.1rem">
            {feature.name}
          </Text>
          <Button variant="semiBold" onClick={onOpen}>
            Learn More
          </Button>
        </Flex>
      </Flex>
      <Divider
        h="1px"
        w="90%"
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
