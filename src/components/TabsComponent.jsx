import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import { useTable } from '../providers/table/TableProvider';

export default function TabsComponent() {
    const { categories, tabIndex, handleTabsChange, setTabIndex } = useTable();

    return (<Wrapper>
        <Box>
            <Tabs index={tabIndex} onChange={(i) => handleTabsChange(i, setTabIndex)}>
                <TabList>
                    {categories.map((category, index) => <Tab key={index}>{category.name}</Tab>)}
                </TabList>
            </Tabs>
        </Box>
    </Wrapper>)
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;`
