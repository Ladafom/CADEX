import { useRef, type FC } from 'react';
import { useDispatch } from 'react-redux';
import { BufferAttribute, BufferGeometry, Mesh, DoubleSide } from 'three';
import { createPrimitive } from './primitiveVertices';
import { type PrimitiveType } from "../../app/lib/types"
import { selectPrimitive } from '../../app/slices/PrimitiveSlice';

export const Primitive: FC<Omit<PrimitiveType, 'number'>> = (props) => {
  const {
    id,
    type,
    width,
    height,
    length,
    position,
    color,
    isSelected
  } = props;

  const dispatch = useDispatch();
  const meshRef = useRef<Mesh>(null);

  const vertices = new Float32Array(createPrimitive(type, width, height, length).vertices);
  const indices = createPrimitive(type, width, height, length).indices;

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  
  geometry.computeVertexNormals();

  return (
    <mesh 
      ref={meshRef} 
      geometry={geometry}
      position={position}
      castShadow 
      receiveShadow 
      onClick={() => dispatch(selectPrimitive({id}))}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
    >
      <meshStandardMaterial 
        color={isSelected ? '#5BFFD9' : color} 
        side={DoubleSide}
      />
    </mesh>
  );
};