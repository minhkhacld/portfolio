import { Billboard, Stars, Text, TrackballControls, ScreenQuad, useCursor, Bounds, Center, Html } from '@react-three/drei'
import { Canvas, useFrame, } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import RotateInstruction from '../../../kits/animated/focus'



function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': true }
    const ref = useRef();

    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);
    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = 'pointer'
        }
        return () => (document.body.style.cursor = 'auto')
    })
    // Tie component to the render-loop
    useFrame(({ camera, clock }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion)
        // Animate font color
        ref.current.material.color.lerp(color.set(hovered ? '#08fdd8' : 'white'), 0.9)
    })

    return (
        <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children}
            color={'#EC2D2D'}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
        />
    )
}

function Cloud({ count, radius }) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        const data = ["HTML", "CSS", "Javascript", "ReactJS", "React Native", "MYSQL", "MSSQL", "NodeJS", "Figma", "JSON", "npm", "Git", "ES5/ES6"];
        data.forEach((v, index) => {
            temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * index, thetaSpan * index)), v])
        })
        return temp
    }, [count, radius])

    return words.map(([pos, word], index) => {
        return (
            <Word position={pos} children={word} />
        )
    })
}


// const BoxContain = () => {
//     const ref = useRef()
//     const [boxHover, setBoxHover] = React.useState(false);
//     useFrame(({ clock, state, delta, camera }) => {
//         if (!boxHover) {
//             ref.current.rotation.y += 0.002
//         }
//     })

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

//     )
// }



export default function HomeCanvas() {
    return (
        <div className="home-canvas">
            <RotateInstruction />
            <React.Suspense fallback={null}>
                <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 35], fov: 90 }} className="chart-canvas"
                >
                    <Center position={[5, 5, 10]}>
                        <fog attach="fog" args={['#202025', 0, 500]} />
                        <Cloud count={6} radius={20} />
                        {/* <BoxContain /> */}
                        <TrackballControls />
                        <Stars radius={100} depth={50} count={1000} factor={5} saturation={1} fade speed={5} />
                    </Center>
                </Canvas>
            </React.Suspense>
        </div>

    )
}
