import React from 'react'
import { WalletComponent } from './WalletComponent'
import { FeatureComponent } from './FeatureComponent'
import styled from 'styled-components'
import { Icon, IconButton } from '@chakra-ui/react';


export default function ElementComponent({ element, handleAction }) {

  return (
    <Wrapper>

      <main className='element-search-container' onClick={() => handleAction(element.type, element.id)}>
        <section className='element-search'>

          <main style={{ display: "flex", height: "100%", alignItems: "center", width: "16%", justifyContent: "space-around" }}>
            <div style={{}}>

              <Icon />
            </div>
            <div>
              <h1>{element.title}</h1>
              <small>{element.type}</small>
            </div>

          </main>
          <div>
            <IconButton>
              <Icon />
            </IconButton>
          </div>
        </section>
      </main>
    </Wrapper>

  )
}




const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
height: 100%;

.feature-container {
    padding: 1rem;
}

.wallets-container {
    width: 80%;
    height: 100%;
    border-right: 1px solid #e0e0e0;
}

.element-search-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
}

.element-search {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 0.5rem;
}

.features-container {
    width: 20%;
    height: 100%;
`
