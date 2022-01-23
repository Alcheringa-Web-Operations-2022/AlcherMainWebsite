import * as React from 'react';
//R3F
import { Canvas, extend, ReactThreeFiber, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// Deai - R3F
import { softShadows, MeshWobbleMaterial, OrbitControls, shaderMaterial, useHelper } from '@react-three/drei';
import { DirectionalLightHelper, ShaderMaterial } from 'three';
// React Spring
import { useSpring, animated } from '@react-spring/three';
// Styles
import '@pages/demo/Banner.scss';
import Header from '@components/Header/Header';
import earthmap from '@assets/images/globe.png';
import ringmap from '@assets/images/rings.png';
import spacemap from '@assets/images/space_bg.png';
import cloudsmap from '@assets/images/globe_clouds.png';
import glsl from 'babel-plugin-glsl/macro';

class GlobeShaderMaterial extends ShaderMaterial {
    constructor() {
        super({
            vertexShader: glsl`
                            precision mediump float;
                            varying vec2 vUv;

                            void main(){
                                vUv = uv;
                                vec3 pos = position;
                                gl_Position = projectionMatrix*modelViewMatrix*vec4(pos,1.0);
                            }
                        `,
            fragmentShader: glsl`
                            precision mediump float;
                            uniform sampler2D uTexture;
                            varying vec2 vUv;

                            void main(){
                                vec3 texture = texture2D(uTexture,vUv).rgb;
                                gl_FragColor = vec4(texture,1.0);
                            }
                        `,
            uniforms: {
                uTexture: { value: new THREE.Texture() },
            },
        });
    }
}

class CloudShaderMaterial extends ShaderMaterial {
    constructor() {
        super({
            vertexShader: glsl`
                            precision mediump float;
                            varying vec2 vUv;

                            void main(){
                                vUv = uv;
                                vec3 pos = position;
                                gl_Position = projectionMatrix*modelViewMatrix*vec4(pos,1.0);
                            }
                        `,
            fragmentShader: glsl`
                            precision mediump float;
                            uniform sampler2D uTexture;
                            varying vec2 vUv;

                            void main(){
                                vec3 texture = texture2D(uTexture,vUv).rgb;
                                gl_FragColor = vec4(texture,1.0);
                            }
                        `,
            uniforms: {
                uTexture: { value: new THREE.Texture() },
            },
        });
    }
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            globeShaderMaterial: ReactThreeFiber.Object3DNode<GlobeShaderMaterial, typeof GlobeShaderMaterial>;
            cloudShaderMaterial: ReactThreeFiber.Object3DNode<CloudShaderMaterial, typeof CloudShaderMaterial>;
        }
    }
}

extend({ GlobeShaderMaterial });
extend({ CloudShaderMaterial });

// soft Shadows
softShadows();

const Light = () => {
    const ref = React.useRef();
    useHelper(ref, DirectionalLightHelper, 1);

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                ref={ref}
                intensity={0.2}
                position={[0, 1, 0]}
                // shadow-camera-far={50}
                // shadow-camera-left={-100}
                // shadow-camera-right={100}
                // shadow-camera-top={100}
                shadow-camera-bottom={-100}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                castShadow
            />
        </>
    );
};

const Globe = () => {
    const earthTexture = React.useMemo(() => new THREE.TextureLoader().load(earthmap), [earthmap]);
    const ringsTexture = React.useMemo(() => new THREE.TextureLoader().load(ringmap), [ringmap]);
    const cloudsTexture = React.useMemo(() => new THREE.TextureLoader().load(cloudsmap), [cloudsmap]);

    const gpref = React.useRef(null);

    React.useEffect(() => {
        if (gpref.current) {
            gpref.current.lookAt(new THREE.Vector3(0.0, 1.0, 1.0));
        }
    }, [gpref]);

    useFrame(({}) => {
        gpref.current.rotation.x -= 0.02;
        if (gpref.current.position.y < 0) {
            gpref.current.position.y += 0.02;
        }
        if (gpref.current.position.z > -6) {
            gpref.current.position.z -= 0.02;
        }
    });
    return (
        <animated.group position={[0, -3.3, 2.5]} rotation={[0, 0, 0]} ref={gpref}>
            <mesh castShadow receiveShadow>
                <sphereGeometry attach="geometry" args={[2.5, 100, 100]} />
                <globeShaderMaterial uniforms={{ uTexture: { value: earthTexture } }} />
            </mesh>
            <mesh castShadow receiveShadow>
                <sphereGeometry attach="geometry" args={[2.52, 100, 100]} />
                <cloudShaderMaterial
                    uniforms={{ uTexture: { value: cloudsTexture } }}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
            <mesh castShadow receiveShadow>
                <ringGeometry attach="geometry" args={[2, 8, 30]} />
                <meshLambertMaterial
                    attach="material"
                    map={ringsTexture}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </animated.group>
    );
};

const Demo = () => {
    return (
        <div id="canvas-container">
            <Header />

            {/* Our Scene & Camera is already built into our canvas */}
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 60 }}>
                <mesh castShadow receiveShadow>
                    <boxBufferGeometry attach="geometry" args={[0, 10, 0]} />
                    <MeshWobbleMaterial
                        color="red"
                        speed={6}
                        attach="material"
                        factor={0.6}
                        skinning={undefined}
                        vertexTangents={undefined}
                        morphTargets={undefined}
                        morphNormals={undefined}
                    />
                </mesh>

                {/* This light makes things look pretty */}
                {/* <ambientLight intensity={0.4} /> */}
                <Light />
                {/* Our main source of light, also casting our shadow */}
                {/* <pointLight position={[0, 100, 0]} intensity={0.2} /> */}
                <Globe />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Demo;
