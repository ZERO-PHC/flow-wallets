import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  Container,
} from "@chakra-ui/react";
import { useTable } from "../providers/table/TableProvider";
import { handleTabsChange } from "../utils/tableUtils";

export default function TabsComponent() {
  const { categories, tabIndex, setTabIndex } = useTable();

  return (
    <Container w={{sm: "max-content" ,md:"auto"}} h="auto" variant="overview" m={5} borderRadius={14} p={"0px 12px"}>
      <Tabs index={tabIndex} onChange={(i) => handleTabsChange(i, setTabIndex)} colorScheme='purple'>
        <TabList>
          {categories.map((category, index) => (
            <Tab 
            p={{sm: ".3rem 1rem", md: ".6rem 2rem",lg: ".8rem 2.2rem" }}
            key={index}
            fontSize={{sm: ".8rem",md: "1rem", lg: "1.3rem"}}
            >
              {category.name}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Container>
  );
}