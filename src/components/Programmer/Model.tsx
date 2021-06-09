import { memo, useMemo, useRef } from "react";
import { useLoader } from "react-three-fiber";
import { Euler, Group, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Modal = ({
  url = "/models/programmer/scene.gltf",
  slice = 0,
  scale = new Vector3(1, 1, 1),
  position = new Vector3(0, 0, 0),
  rotation = new Euler(0, 0, 0),
}) => {
  const { nodes } = useLoader<any>(GLTFLoader, url);
  const group = useRef<Group>();

  const meshes: any = useMemo(
    () =>
      Object.values(nodes).reduce(
        (acum: [], curr: { children?: [] }, index) => {
          let children = [];
          let mesh = [];

          if ("material" in curr && "geometry" in curr && index > 4) {
            mesh.push(curr);
          }

          curr.children.forEach((element) => {
            if ("material" in element && "geometry" in element) {
              children.push(element);
            }
          });
          return [...acum, ...children, ...mesh];
        },
        []
      ),
    []
  );

  return (
    <group ref={group} rotation={rotation} position={position} scale={scale}>
      {meshes.slice(slice).map((item, index) => (
        <mesh key={index} {...item} />
      ))}
    </group>
  );
};

export default memo(Modal);
