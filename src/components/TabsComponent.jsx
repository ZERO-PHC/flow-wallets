import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'

export default function TabsComponent({ categories, tabIndex, setTabIndex, handleTabsChange, }) {


    const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;`

    return (<Wrapper>
        <Box>
            {/* <input
                type='range'
                min='0'
                max='2'
                value={tabIndex}
                onChange={() => handleSliderChange()}
            /> */}

            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                    {categories.map((category, index) => <Tab key={index}>{category.title}</Tab>)}
                </TabList>
                {/* <TabPanels>
                    <TabPanel>
                        <p>Click the tabs or pull the slider around</p>
                    </TabPanel>
                    <TabPanel>
                        <p></p>
                    </TabPanel>
                    <TabPanel>
                        <p>Oh, hello there.</p>
                    </TabPanel>
                </TabPanels> */}
            </Tabs>
        </Box>
    </Wrapper>)


}