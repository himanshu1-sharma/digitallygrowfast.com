import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Vanta from 'vanta/dist/vanta.globe.min';

export default function VantaGlobe(props) {
    const vantaRef = useRef(null);
    const { children, ...rest } = props;
    useEffect(() => {
        const vantaEffect = Vanta({
            THREE,
            el: vantaRef.current,
            backgroundColor: 0x111111,
            color: 0xffffff,
            size: 1.50,
            speed: 1.20,
            zoom: 0.70
        });
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
        <>
            <div
                ref={vantaRef} {...rest}
            >
                {children}
            </div>
        </>
    )
};
