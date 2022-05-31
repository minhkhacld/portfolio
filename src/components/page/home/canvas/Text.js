import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect } from 'react'
import boldUrl from './fonts/bold.blob';
import newFont from './fonts/MgOpen Canonica_Bold.json'
import { Text3D } from '@react-three/drei'

export default function Text({ children, vAlign = 'center', hAlign = 'center', size = 1.5, color = '#000000', ...props }) {
  const config = useMemo(
    () => ({ size: 30, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    []
  )
  const ref = useRef();

  useLayoutEffect(() => {
    const size = new THREE.Vector3()
    ref.current.geometry.computeBoundingBox()
    ref.current.geometry.boundingBox.getSize(size)
    ref.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    ref.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  }, [children]);

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D
        ref={ref}
        // font={boldUrl}
        // font={`https://threejs.org/examples/fonts/helvetiker_regular.typeface.json`}
        font={newFont}
        {...config}
      >
        {children}
        <meshNormalMaterial />
      </Text3D>
    </group>
  )
}
