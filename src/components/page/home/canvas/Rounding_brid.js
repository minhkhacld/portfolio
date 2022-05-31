import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame, } from '@react-three/fiber'
import { Sky, Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Text from './Text'
import './styles.css'
import Flamingo from './glb/Flamingo.glb';
import Parrot from './glb/Parrot.glb';
import Stork from './glb//Stork.glb';


const Jumbo = () => {
    const ref = useRef()
    useFrame(({ clock }) =>
        (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.cos(clock.getElapsedTime()) * 0.1)
    )

    return (
        <Suspense fallback={null}>
            <group
                ref={ref}
            >
                <Text hAlign="right" position={[-12, 6.5, 0]} children="WEB," />
                <Text hAlign="right" position={[-12, 0, 0]} children="MOBILE" />
                <Text hAlign="right" position={[-12, -6.5, 0]} children="DEV" />
            </group>
        </Suspense>
    )
}

// This component was auto-generated from GLTF by: https://github.com/react-spring/gltfjsx
const Bird = ({ speed, factor, url, ...props }) => {
    const { nodes, materials, animations } = useLoader(GLTFLoader, url);
    const group = useRef()
    const mesh = useRef()
    const [start] = useState(() => Math.random() * 5000)
    const [mixer] = useState(() => new THREE.AnimationMixer())
    useEffect(() => void mixer.clipAction(animations[0], group.current).play(), [])
    useFrame((state, delta) => {
        mesh.current.position.y = Math.sin(start + state.clock.elapsedTime) * 5
        mesh.current.rotation.x = Math.PI / 2 + (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 10
        mesh.current.rotation.y = (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 2
        group.current.rotation.y += Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5
        mixer.update(delta * speed)
    })

    return (
        <group ref={group} dispose={null} >
            <scene name="Scene" {...props}>
                <mesh
                    ref={mesh}
                    scale={1}
                    name="Object_0"
                    morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
                    rotation={[Math.PI / 2, 0, 0]}
                    geometry={nodes.Object_0.geometry}
                    material={materials.Material_0_COLOR_0}
                />
            </scene>
        </group>
    )
}

const Birds = () => {
    return new Array(50).fill().map((_, i) => {
        const x = (20 + Math.random() * 80) * (Math.round(Math.random()) ? -1 : 1)
        const y = -10 + Math.random() * 20
        const z = -5 + Math.random() * 10
        const bird = ['Stork', 'Parrot', 'Flamingo'][Math.round(Math.random() * 2)]
        let speed = bird === 'Stork' ? 0.25 : bird === 'Flamingo' ? 0.5 : 5
        let factor = bird === 'Stork' ? 0.5 + Math.random() : bird === 'Flamingo' ? 0.25 + Math.random() : 1 + Math.random() - 0.5
        // return <Bird key={i} position={[x, y, z]} rotation={[0, x > 0 ? Math.PI : 0, 0]} speed={speed} factor={factor} url={`/${bird}.glb`} />
        return <Bird key={i} position={[x, y, z]} rotation={[0, x > 0 ? Math.PI : 0, 0]} speed={speed} factor={factor} url={bird === 'Stork' ? Stork : bird === 'Flamingo' ? Flamingo : Parrot} />
    })
}

const RoundingBird = () => {
    return (
        <div className="home-canvas" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Canvas camera={{ position: [0, 0, 50] }} style={{
                width: '100vw',
                height: '100vh',
            }} >
                <ambientLight intensity={1} />
                <pointLight
                    position={[40, 40, 40]} />
                <Suspense fallback={null}>
                    <Jumbo />
                    <Birds />
                    {/* <Sky />
                <Environment
                    preset="city"
                /> */}
                    {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
                </Suspense>
            </Canvas>
        </div>

    )
}

export default RoundingBird