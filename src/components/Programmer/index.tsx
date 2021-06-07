import Model from "./Model";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import { Euler, Vector3, MathUtils } from "three";
import { Flex } from "@chakra-ui/react";

const Programmer = () => {
  return (
    <Flex flex={1} position="absolute" width="100%" height="100%">
      <Canvas
        camera={{
          position: [0, 1, 12],
        }}
      >
        <ambientLight intensity={1.1} />
        <pointLight position={[40, 40, 20]} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <Suspense fallback={<>Cargando...</>}>
          <Model slice={18} position={new Vector3(0, 15, 0)} />
          <Model
            rotation={new Euler(0, 0, MathUtils.degToRad(15))}
            url="/models/Rocket/scene.gltf"
            scale={new Vector3(0.02, 0.02, 0.02)}
          />
        </Suspense>
      </Canvas>
    </Flex>
  );
};
export default Programmer;
