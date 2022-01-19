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

const Globe = () => {
    const earthTexture = React.useMemo(() => new THREE.TextureLoader().load(earthmap), [earthmap]);
    const ringsTexture = React.useMemo(() => new THREE.TextureLoader().load(ringmap), [ringmap]);
    const cloudsTexture = React.useMemo(() => new THREE.TextureLoader().load(cloudsmap), [cloudsmap]);

    const gpref = React.useRef(null);

    React.useEffect(() => {
        if (gpref.current) {
            gpref.current.lookAt(new THREE.Vector3(0.0, 1.0, 0.35));
        }
    }, [gpref]);
    return (
        <group position={[0, -4, 2]} rotation={[0, 0, 0]} ref={gpref}>
            <mesh>
                <sphereGeometry attach="geometry" args={[2, 16, 16]} />
                <meshLambertMaterial attach="material" map={earthTexture} />
            </mesh>
            <mesh>
                <sphereGeometry attach="geometry" args={[2.06, 16, 16]} />
                <meshLambertMaterial attach="material" map={cloudsTexture} blending={THREE.AdditiveBlending} />
            </mesh>
            <mesh>
                <ringGeometry attach="geometry" args={[2.5, 8, 30]} />
                <meshLambertMaterial
                    attach="material"
                    map={ringsTexture}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </group>
    );
};

const Demo = () => {
    return (
        <div id="canvas-container">
            <Header />
            {/* Our Scene & Camera is already built into our canvas */}
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 55 }}>
                {/* This light makes things look pretty */}
                <ambientLight intensity={0.8} />
                {/* Our main source of light, also casting our shadow */}
                <pointLight position={[0, 100, 0]} intensity={0.2} />
                <Globe />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Demo;
