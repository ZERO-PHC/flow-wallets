import React from 'react'
import { Flex } from "@chakra-ui/react"
import Card from './Card'

export default function GridComponent({target,  data, handleAction, type}) {
    return (
        <main className='grid'>
            {data.map((element, index) => {
                return (
                    <Card key={index} target={target} element={element} handleAction={handleAction} type={type}  />
                )
            })}
        </main>

    )
}


