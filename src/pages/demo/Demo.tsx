import * as React from 'react';
//R3F
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// Deai - R3F
import { softShadows, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
// React Spring
import { useSpring, animated } from '@react-spring/three';
// Styles
import '@pages/demo/Demo.scss';
import Header from '@components/Header/Header';
import earthmap from '@assets/images/mars_uv_map.jpeg';
import ringmap from '@assets/images/rings.jpeg';
import spacemap from '@assets/images/space_bg.png';

// soft Shadows
softShadows();

const Demo = () => {
    const earthTexture = React.useMemo(() => new THREE.TextureLoader().load(earthmap), [earthmap]);
    const ringsTexture = React.useMemo(() => new THREE.TextureLoader().load(ringmap), [ringmap]);
    const spaceTexture = React.useMemo(() => new THREE.TextureLoader().load(spacemap), [spacemap]);

    const meshRef = React.useRef();

    return (
        <div id="canvas-container" style={{ backgroundImage: `url(${spacemap})` }}>
            <Header />
            {/* Our Scene & Camera is already built into our canvas */}
            <Canvas shadows camera={{ position: [-1, 2, 10], fov: 60 }}>
                {/* This light makes things look pretty */}
                <ambientLight intensity={0.3} />
                {/* Our main source of light, also casting our shadow */}
                <pointLight position={[0, 100, 0]} intensity={0.3} />

                <group>
                    {/* This mesh is the plane (The floor) */}
                    <mesh rotation={[0, 0, 0]} position={[0, -3, 0]} receiveShadow>
                        <planeBufferGeometry attach="geometry" args={[100, 100]} />
                        <shadowMaterial attach="material" />
                    </mesh>
                    <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh ref={meshRef}>
                            <sphereGeometry attach="geometry" args={[2, 100, 100]} />
                            <meshLambertMaterial attach="material" map={earthTexture} />
                        </mesh>
                        <mesh ref={meshRef}>
                            <ringGeometry attach="geometry" args={[3, 6, 40]} />
                            <meshLambertMaterial attach="material" map={ringsTexture} side={THREE.DoubleSide} />
                        </mesh>
                    </group>
                </group>
                {/* Allows us to move the canvas around for different prespectives */}
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Demo;
