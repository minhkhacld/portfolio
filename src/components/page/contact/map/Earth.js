import React, { useRef, Suspense } from 'react'
import { OrbitControls, Html, useGLTF } from '@react-three/drei'
import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Earth from '../../../../assets/picture/model/Earth.glb';
import NewEarth from '../../../../assets/picture/model/NewEarth.glb';
import { ColLeft } from '../../../kits/stucture/component.stucture'
import { FaMapMarkerAlt } from 'react-icons/fa';



const Marker = ({ children, ...props }) => {
    // This holds the local occluded state
    const [occluded, occlude] = React.useState()
    return (
        <Html
            // 3D-transform contents
            transform
            // Hide contents "behind" other meshes
            occlude
            // Tells us when contents are occluded (or not)
            onOcclude={occlude}
            distanceFactor={20}
            // We just interpolate the visible state into css opacity and transforms
            style={{
                transition: 'all 0.2s', opacity: occluded ? 0 : 1, transform: `scale(${occluded ? 0.25 : 1})`,
                position: 'absolute', zIndex: 100
            }}
            {...props}>
            {children}
        </Html>
    )
}



const EarthModel = ({ props }) => {

    // const [hovered, setHovered] = React.useState(false);
    // const onPointerOver = (e) => (
    //     setHovered(true));
    // const onPointerLeave = () => setHovered(false);

    const { nodes, materials } = useLoader(GLTFLoader, Earth);
    // const { nodes, materials } = useGLTF(Earth)

    const mesh = useRef();
    const group = useRef();

    // useFrame((state, delta) => {
    //     if (mesh.current.rotation.y <= 6) {
    //         mesh.current.rotation.y += 0.1
    //         mesh.current.rotation.x = 0.3
    //         state.camera.zoom = THREE.MathUtils.lerp(state.camera.zoom, state.camera.zoom + 0.04, 0.7)
    //         state.camera.updateProjectionMatrix();
    //     }
    // });


    return (
        <group ref={group}
            rotation={[0, 0, Math.PI]}
        >
            <mesh
                ref={mesh}
                scale={1}
                {...props} dispose={null}
                // onPointerLeave={(e) => onPointerLeave(e)}
                // onPointerOver={(e) => onPointerOver(e)}
                // name="node_id31"
                // geometry={nodes.node_id31.geometry}
                // material={materials['45']}
                // morphTargetDictionary={nodes.node_id31.morphTargetDictionary}
                // morphTargetInfluences={nodes.node_id31.morphTargetInfluences}
                name="node_id30"
                geometry={nodes.node_id30.geometry}
                material={materials['47']}
                morphTargetDictionary={nodes.node_id30.morphTargetDictionary}
                morphTargetInfluences={nodes.node_id30.morphTargetInfluences}
            >
                <group position={[0, 0, 1.3]} rotation={[0, 0, Math.PI]}>
                    <Marker rotation={[0, Math.PI / 2, Math.PI / 2]}>
                        <div style={{ position: 'absolute', fontSize: 20, letterSpacing: -0.5, left: 17.5, width: 'auto', color: 'var(--lightBlue)' }}>Cai Lay, Tien Giang, Viet Nam</div>
                        <FaMapMarkerAlt style={{ color: 'indianred' }} size={20} />
                    </Marker>
                </group>
            </mesh>
            {/* <group position={[0, 0, 1.1]} rotation={[0, 0, Math.PI]}>
                <Marker rotation={[0, Math.PI / 2, Math.PI / 2]}>
                    <div style={{ position: 'absolute', fontSize: 50, color: 'red', letterSpacing: -0.5, left: 17.5 }}>Cai Lay, Tien Giang, Viet Nam</div>
                    <FaMapMarkedAlt style={{ color: 'indianred' }} size={100} />
                </Marker>
            </group> */}

            {/* <Html distanceFactor={10}>
                <div class="content">
                    hello <br />
                    world
                </div>
            </Html> */}

            <OrbitControls />

        </group>

    )
}

export default function EarthRound() {
    const ref = useRef();
    return (
        <div className="contact-map">
            <Canvas camera={{ position: [0, 0, 35], fov: 50 }} dpr={[1, 2]} style={{ width: '100%', height: '100%' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[40, 40, 40]} />
                <Suspense fallback={null}>
                    <EarthModel
                    />
                </Suspense>
                <OrbitControls ref={ref} dampingFactor={0.5} panSpeed={0.5} position0={[0, 1, 0]} />
            </Canvas>
        </div>

    )
}