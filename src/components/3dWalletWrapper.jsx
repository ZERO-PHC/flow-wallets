import '@google/model-viewer'
import styled from 'styled-components'
import { useInView } from "react-intersection-observer";
import React, {useEffect, useRef} from "react";

const ModelViewer = ({inView, path}) => {

    const group = useRef()
    return (
        <>
        <div style={{height:'10rem'}}>
            <model-viewer
            ref={group}
            src={path}
            alt="wallet"
            shadow-intensity="1"
            camera-controls
            // auto-rotate
            disable-zoom
            camera-orbit="calc(-6.2rad + env(window-scroll-y) * 15rad) calc(90deg + env(window-scroll-y) * 30deg) "
            class={ inView ? 'teste2' : 'teste1' }
            >
            </model-viewer>
        </div>
        </>
    )
}

export default ModelViewer