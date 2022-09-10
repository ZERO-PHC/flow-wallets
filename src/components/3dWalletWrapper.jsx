import '@google/model-viewer'
import React, {useRef} from "react";

const WalletWrapper = ({path, posterPath}) => {

    const group = useRef()
    return (
        <>
        <div style={{height:'10rem'}}>
            <model-viewer
            ref={group}
            src={path}
            alt="wallet"
            shadow-intensity="0"
            disable-zoom
            // poster={posterPath}
            camera-orbit="calc(-1.2rad + env(window-scroll-y) * 1rad) calc(90deg + env(window-scroll-y) * 1deg) "
            >
            </model-viewer>
        </div>
        </>
    )
}

export default WalletWrapper