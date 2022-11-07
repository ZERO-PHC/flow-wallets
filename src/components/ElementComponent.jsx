import React from "react";
import { Flex, Heading, Button, Text, Container } from "@chakra-ui/react";
import { handleAction } from "../utils/generalUtils";
import { useRouter } from "next/router";
import { useDialog } from "../providers/DialogProvider";
import { useTable } from "../providers/table/TableProvider";
import { Icon } from "@iconify/react";

export default function ElementComponent({ element }) {
  const router = useRouter();
  const { setOpenSearch } = useDialog();
  const { setSelectedFeatures, SelectedFeatures } = useTable();
  // get the current page
  const currentPage = router.pathname;

  return (
    <Container
      justifyContent="space-between"
      h="auto"
      alignItems={"center"}
      flexDir="row"
      p={5}
      gap={5}
      my={2}
      cursor="pointer"
      onClick={() =>
        handleAction(
          element.type,
          element.id,
          router,
          setOpenSearch,
          setSelectedFeatures,
          SelectedFeatures,
          element.path,
          currentPage
        )
      }
    >
      <Flex flexDir="column">
        <Heading fontSize="1.4rem">{element.name}</Heading>
        <Text>{element.type}</Text>
      </Flex>
      {/* <Button onClick={() => handleAction(element.type, element.id, router, setOpenSearch, setSelectedFeatures,  SelectedFeatures)}> */}
      <Button >
        <Icon icon="bi:arrow-return-right" width="20" />
      </Button>
    </Container>
  );
}
