import { useContext, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ThemeContext } from "../../context/ThemeContext";
import "../../styles/galaxybackground/galaxybackground.css";

const THEME_COLORS = {
  dark: { point: "#7dd3fc", line: "#c4b5fd" },
  light: { point: "#a557a0", line: "#3a2492" },
};

const POINT_COUNT = 260;
const MOUSE_RADIUS = 2.6;
const LINK_DISTANCE = 1.3;
const MAX_SEGMENTS = 600;
const FOLLOW_EASE = 0.12;

function GalaxyField({ theme }) {
  const { viewport } = useThree();
  const colors = THEME_COLORS[theme] ?? THEME_COLORS.dark;

  const positions = useMemo(() => {
    const width = Math.max(viewport.width, 8) * 1.3;
    const height = Math.max(viewport.height, 8) * 1.3;
    const arr = new Float32Array(POINT_COUNT * 3);
    for (let i = 0; i < POINT_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * width;
      arr[i * 3 + 1] = (Math.random() - 0.5) * height;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return arr;
  }, [viewport.width, viewport.height]);

  const lineSegments = useMemo(
    () => new Float32Array(MAX_SEGMENTS * 2 * 3),
    []
  );

  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerWorld = useRef(new THREE.Vector2(9999, 9999));
  const lineGeometryRef = useRef();

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerTarget.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerTarget.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame(() => {
    const targetX = (pointerTarget.current.x * viewport.width) / 2;
    const targetY = (pointerTarget.current.y * viewport.height) / 2;
    pointerWorld.current.x += (targetX - pointerWorld.current.x) * FOLLOW_EASE;
    pointerWorld.current.y += (targetY - pointerWorld.current.y) * FOLLOW_EASE;

    const radiusSq = MOUSE_RADIUS * MOUSE_RADIUS;
    const linkSq = LINK_DISTANCE * LINK_DISTANCE;

    const active = [];
    for (let i = 0; i < POINT_COUNT; i++) {
      const dx = positions[i * 3] - pointerWorld.current.x;
      const dy = positions[i * 3 + 1] - pointerWorld.current.y;
      if (dx * dx + dy * dy < radiusSq) active.push(i);
    }

    let segmentIndex = 0;
    for (let a = 0; a < active.length && segmentIndex < MAX_SEGMENTS; a++) {
      for (
        let b = a + 1;
        b < active.length && segmentIndex < MAX_SEGMENTS;
        b++
      ) {
        const i = active[a];
        const j = active[b];
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        if (dx * dx + dy * dy < linkSq) {
          const base = segmentIndex * 6;
          lineSegments[base] = positions[i * 3];
          lineSegments[base + 1] = positions[i * 3 + 1];
          lineSegments[base + 2] = positions[i * 3 + 2];
          lineSegments[base + 3] = positions[j * 3];
          lineSegments[base + 4] = positions[j * 3 + 1];
          lineSegments[base + 5] = positions[j * 3 + 2];
          segmentIndex++;
        }
      }
    }

    const geometry = lineGeometryRef.current;
    if (geometry) {
      geometry.attributes.position.needsUpdate = true;
      geometry.setDrawRange(0, segmentIndex * 2);
    }
  });

  return (
    <group>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={POINT_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color={colors.point}
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry ref={lineGeometryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={MAX_SEGMENTS * 2}
            array={lineSegments}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={colors.line}
          transparent
          opacity={0.5}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function GalaxyBackground() {
  const { theme } = useContext(ThemeContext);

  return (
    <Canvas
      className="galaxy-background-canvas"
      camera={{ position: [0, 0, 5], fov: 55 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <GalaxyField theme={theme} />
    </Canvas>
  );
}
