import React from "react";
import styled from "styled-components";
import { Flex, Heading, Icon, IconButton, Text, Container } from "@chakra-ui/react";
import { handleAction } from "../utils/generalUtils";
import { useRouter } from "next/router";
import { useDialog } from "../providers/DialogProvider";
import { useTable } from "../providers/table/TableProvider";

export default function ElementComponent({ element }) {
  const router = useRouter();
  const { setOpenSearch } = useDialog();
  const { setSelectedFeatures, SelectedFeatures } = useTable();

  return (
    <Container justifyContent="space-between" h="auto" alignItems={"center"} flexDir="row" p={5} gap={5} my={2}>
      <Flex flexDir="column">
        <Heading fontSize="1.4rem">{element.name}</Heading>
        <Text>{element.type}</Text>
      </Flex>
      <IconButton>
        <Icon />
      </IconButton>
    </Container>
  );
}