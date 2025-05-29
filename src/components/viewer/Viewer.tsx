import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Bounds } from '@react-three/drei'
import { Primitive } from '../primitive/Primitive'

export const Viewer = () => {
  const primitives = useSelector((state: RootState) => state.primitives.primitivesData)

  return (
    <Canvas>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[2, 1, 3]}
      />

      <Bounds observe fit clip margin={2}>
        <group position={[0, 0, 0]}>
          {primitives?.map(primitive => (
            <Primitive 
              key={primitive.id}
              {...primitive}
            />
          ))}
        </group>
      </Bounds>

      <OrbitControls
        makeDefault
        enableZoom
        enablePan
      />
    </Canvas>
  )
}