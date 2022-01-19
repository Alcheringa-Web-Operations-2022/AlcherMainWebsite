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
import earthmap from '@assets/images/globe.png';
import ringmap from '@assets/images/rings.png';
import spacemap from '@assets/images/space_bg.png';
import cloudsmap from '@assets/images/globe_clouds.png';

// soft Shadows
softShadows();

const Demo = () => {
    const earthTexture = React.useMemo(() => new THREE.TextureLoader().load(earthmap), [earthmap]);
    const ringsTexture = React.useMemo(() => new THREE.TextureLoader().load(ringmap), [ringmap]);
    const cloudsTexture = React.useMemo(() => new THREE.TextureLoader().load(cloudsmap), [cloudsmap]);

    const meshRef = React.useRef();

    return (
        <div id="canvas-container">
            <Header />
            {/* Our Scene & Camera is already built into our canvas */}
            <Canvas shadows camera={{ position: [-1, 2, 10], fov: 55 }}>
                {/* This light makes things look pretty */}
                <ambientLight intensity={0.8} />
                {/* Our main source of light, also casting our shadow */}
                <pointLight position={[0, 100, 0]} intensity={0.3} />

                <group>
                    {/* This mesh is the plane (The floor) */}
                    <mesh rotation={[0, 0, 0]} position={[0, -3, 0]} receiveShadow>
                        <planeBufferGeometry attach="geometry" args={[100, 100]} />
                        <shadowMaterial attach="material" />
                    </mesh>
                    <group position={[0, -5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh ref={meshRef}>
                            <sphereGeometry attach="geometry" args={[2, 100, 100]} />
                            <meshLambertMaterial attach="material" map={earthTexture} />
                        </mesh>
                        <mesh ref={meshRef}>
                            <sphereGeometry attach="geometry" args={[2.06, 100, 100]} />
                            <meshLambertMaterial
                                attach="material"
                                map={cloudsTexture}
                                blending={THREE.AdditiveBlending}
                            />
                        </mesh>
                        <mesh ref={meshRef}>
                            <ringGeometry attach="geometry" args={[2.5, 8, 40]} />
                            <meshLambertMaterial
                                attach="material"
                                map={ringsTexture}
                                side={THREE.DoubleSide}
                                blending={THREE.AdditiveBlending}
                            />
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
