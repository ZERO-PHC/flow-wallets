import '@google/model-viewer'
import React, {useRef} from "react";

const WalletWrapper = ({path}) => {

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
            disable-zoom
            camera-orbit="calc(-6.2rad + env(window-scroll-y) * 15rad) calc(90deg + env(window-scroll-y) * 30deg) "
            >
            </model-viewer>
        </div>
        </>
    )
}

export default WalletWrapper