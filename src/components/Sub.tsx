import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export const Sub = () => {
  const sub = useGLTF("/models/sub.glb");

  return (
    <RigidBody type="fixed" colliders="trimesh" position={[0, 0, 0]}>
      <primitive object={sub.scene} />
    </RigidBody>
  );
};

useGLTF.preload("/models/sub.glb");
