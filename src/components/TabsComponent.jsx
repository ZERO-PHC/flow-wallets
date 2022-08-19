import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
} from "@chakra-ui/react";
import { useTable } from "../providers/table/TableProvider";

export default function TabsComponent() {
  const { categories, tabIndex, handleTabsChange, setTabIndex } = useTable();

  return (
    <Container w="auto" h="auto" variant="overview" m={5} borderRadius={14} p={"0px 12px"}>
      <Tabs index={tabIndex} onChange={(i) => handleTabsChange(i, setTabIndex)} colorScheme='purple'>
        <TabList>
          {categories.map((category, index) => (
            <Tab 
            p=".8rem 2.2rem" 
            key={index}
            fontSize="1.3rem"
            >
              {category.name}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Container>
  );
}