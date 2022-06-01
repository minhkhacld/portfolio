import { Center,Stars, Text, TrackballControls, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import RotateInstruction from '../../../kits/animated/focus';
import useScreenSize from '../../../kits/media/Device.Measuring';


function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': true }
    const ref = useRef();

    const [hovered, setHovered] = useState(false);
    const over = (e) => (
        // e.stopPropagation(), 
        setHovered(true));
    const out = () => setHovered(false);
    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = 'pointer'
        }
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera, clock }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion)
        // Animate font color
        ref.current.material.color.lerp(color.set(hovered ? '#08fdd8' : '#03f3cf'), 1);
    })

    return (
        <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
        />
    )
}


function Cloud({ count, radius }) {
    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 10);
        const thetaSpan = (Math.PI * 2) / count;
        const data = ["HTML", "CSS", "Javascript", "ReactJS", "React Native", "MYSQL", "MSSQL", "NodeJS", "REST API", "Figma", "JSON", "npm", "Git", "GitHub", "ES5/ES6", "Firebase"];
        data.forEach((v, index) => {
            temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * index, thetaSpan * index)), v])
        })
        return temp
    }, [count, radius]);

    return words.map(([pos, word], index) => {
        return (
            <Word position={pos} children={word} key={index} />
        )
    })
};


// const BoxContain = () => {
//     const ref = useRef();
//     const [boxHover, setBoxHover] = React.useState(false);

//     useFrame(({ clock, state, delta, camera }) => {
//         if (!boxHover) {
//             ref.current.rotation.y += 0.002;
//         }
//     });

//     return (
//         <ScreenQuad ref={ref} args={[5, 5, 5]}
//             onPointerOver={(e) => {
//                 setBoxHover(true)
//             }}
//             onPointerOut={(e) => {
//                 setBoxHover(false)
//             }}
//         >
//             <Cloud count={6} radius={20} />
//         </ScreenQuad >
//     );
// }

export default function SkillCanvas() {
    const screenSize = useScreenSize();
    return (
        <div className="skill-canvas"
        // style={{ width: '49vw', height: '90vh', zIndex: 100 }}
        >
            <RotateInstruction screenSize={screenSize} />
            <React.Suspense fallback={null}>
                <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 50], fov: screenSize.isXSmall || screenSize.isSmall ? 120 : 90 }} className="chart-canvas"
                >
                    <Center position={[5, 5, 10]}>
                        <Cloud count={5} radius={22} />
                        {/* <BoxContain /> */}
                    </Center>
                    <fog attach="fog" args={['#202025', 0, 500]} />
                    <TrackballControls />
                    <OrbitControls />
                    <Stars radius={100} depth={50} count={1000} factor={5} saturation={1} fade speed={5} />
                </Canvas>
            </React.Suspense>
        </div>

    )
}
