import Model from "./Model";
import { memo, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import { Euler, Vector3, MathUtils } from "three";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { MdTouchApp, MdStop } from "react-icons/md";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useRouter } from "next/router";

const Programmer = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { push, route } = useRouter();
  const showFullScreen = route !== "/programador";

  return (
    <Flex flex={1} position="absolute" width="100%" height="100%">
      <div>
        <IconButton
          icon={!isOpen ? <MdTouchApp size="32px" /> : <MdStop size="32px" />}
          onClick={onToggle}
          aria-label={"Enable gestures"}
          variant="ghost"
        />
        {showFullScreen && (
          <IconButton
            icon={<AiOutlineFullscreen size="32px" />}
            onClick={() => push("/programador")}
            aria-label={"Enable gestures"}
            variant="ghost"
          />
        )}
      </div>
      <Canvas
        camera={{
          position: [0, 1, 12],
          fov: 50,
          near: 0.1,
          far: 100,
        }}
      >
        <ambientLight intensity={1.1} />
        <pointLight position={[40, 40, 20]} />

        <OrbitControls
          enablePan={isOpen}
          enableZoom={isOpen}
          enableRotate={isOpen}
        />
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
export default memo(Programmer);
