import { useMemo, useLayoutEffect, useEffect } from "react";
import { AsciiEffect } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";

const Ascii = ({
  renderIndex = 1,
  bg = "#fff",
  textColor = "lightgray",
  characters = " .:-+*=:",
  invert = true,
  color = false,
  resolution = 0.15,
}) => {
  // Reactive state
  const { size, gl, scene, camera } = useThree();

  // Create effect
  const effect = useMemo(() => {
    const asciiEffect = new AsciiEffect(gl, characters, {
      invert,
      color,
      resolution,
    });

    asciiEffect.domElement.style.position = "absolute";
    asciiEffect.domElement.style.top = "0px";
    asciiEffect.domElement.style.left = "0px";
    asciiEffect.domElement.style.pointerEvents = "none";

    return asciiEffect;
  }, [characters, invert, color, resolution]);

  // Styling
  useLayoutEffect(() => {
    effect.domElement.style.color = textColor;
    effect.domElement.style.backgroudColor = bg;
  }, [textColor, bg]);

  // Append on mount, remove on unmount
  useEffect(() => {
    gl.domElement.style.opacity = "0";
    gl.domElement.parentNode.appendChild(effect.domElement);

    return () => {
      gl.domElement.style.opactiy = "1";
      gl.domElement.parentNode.removeChild(effect.domElement);
    };
  }, [effect]);

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height);
  }, [effect, size]);

  // Take over-render loop (that's what the index is for)
  useFrame(
    (state) => {
      effect.render(scene, camera);
    },
    [renderIndex]
  );
};

export default Ascii;
