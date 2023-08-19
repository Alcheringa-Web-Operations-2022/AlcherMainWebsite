import * as React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//R3F
import { Canvas, extend, ReactThreeFiber, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// Deai - R3F
import { softShadows, MeshWobbleMaterial, OrbitControls, shaderMaterial } from '@react-three/drei';
import { ShaderMaterial } from 'three';
// React Spring
import { useSpring, animated } from '@react-spring/three';
// Styles
import '@pages/demo/Banner.scss';
import Header from '@components/Header/Header';
import alcherlogo from '@assets/images/alcherlogo.png';
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

// Declare the global namespace
// eslint-disable-next-line no-redeclare
var global = global || window;

// Add the globeShaderMaterial and cloudShaderMaterial to the JSX IntrinsicElements
if (global.JSX) {
    global.JSX.IntrinsicElements.globeShaderMaterial = ReactThreeFiber.Object3DNode(
        GlobeShaderMaterial,
        typeof GlobeShaderMaterial,
    );
    global.JSX.IntrinsicElements.cloudShaderMaterial = ReactThreeFiber.Object3DNode(
        CloudShaderMaterial,
        typeof CloudShaderMaterial,
    );
}

extend({ GlobeShaderMaterial });
extend({ CloudShaderMaterial });

// soft Shadows
softShadows();

const Globe = React.forwardRef(function Globe(props, ref) {
    const earthTexture = React.useMemo(() => new THREE.TextureLoader().load(earthmap), [earthmap]);
    const ringsTexture = React.useMemo(() => new THREE.TextureLoader().load(ringmap), [ringmap]);
    const cloudsTexture = React.useMemo(() => new THREE.TextureLoader().load(cloudsmap), [cloudsmap]);

    const gpref = ref;
    const gpEarthref = React.useRef(null);
    const gpCloudsref = React.useRef(null);
    const gpRingsref = React.useRef(null);

    React.useEffect(() => {
        if (gpref.current) {
            gpref.current.lookAt(new THREE.Vector3(0.0, 1.7, 1.1));
        }
    }, [gpref]);

    useFrame(({}) => {
        gpEarthref.current.rotation.z -= 0.003;
        gpCloudsref.current.rotation.z -= 0.003;
        gpRingsref.current.rotation.z += 0.01;
    });
    return (
        <animated.group position={[0, -3.4, 2]} rotation={[0, 0, 0]} ref={gpref}>
            <mesh ref={gpEarthref}>
                <sphereGeometry attach="geometry" args={[3.8, 20, 20]} />
                <globeShaderMaterial uniforms={{ uTexture: { value: earthTexture } }} />
            </mesh>
            <mesh ref={gpCloudsref}>
                <sphereGeometry attach="geometry" args={[3.86, 20, 20]} />
                <cloudShaderMaterial
                    uniforms={{ uTexture: { value: cloudsTexture } }}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
            <mesh ref={gpRingsref}>
                <ringGeometry attach="geometry" args={[3, 11, 30]} />
                <meshLambertMaterial
                    attach="material"
                    map={ringsTexture}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </animated.group>
    );
});

const Banner = () => {
    const gpref = React.useRef(null);
    const mql = window.matchMedia('(max-width: 800px)').matches;

    React.useEffect(() => {
        if (!mql && gpref.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#hero-trigger',
                    pin: true,
                    start: 'top top',
                    end: mql ? '+=100%' : '+=150%',
                    scrub: true,
                    id: 'banner-trigger',
                },
            });
            tl.to(gpref.current.rotation, {
                duration: 0.5,
            });
            tl.to(gpref.current.rotation, {
                x: -0.45,
                duration: 10,
            });
            tl.to(
                gpref.current.position,
                {
                    y: -0.5,
                    duration: 10,
                },
                '<',
            );
            tl.to(
                gpref.current.scale,
                {
                    x: 0.45,
                    y: 0.45,
                    z: 0.45,
                    duration: 10,
                },
                '<',
            );
            // tl.to(gpref.current.position, {
            //     y: -0.5,
            //     duration: 3,
            // });
        }
    }, [gpref.current]);

    return (
        <section id="banner-image-wrapper">
            <div className="logo-container">
                <img src={alcherlogo} alt="" />
                <button style={{ display: 'none' }}>JOIN NOW</button>
            </div>
            {/* <img id="banner-img" alt="Alcheringa 2022" src={landingImage} ref={imageRef} /> */}
            <div id="canvas-container">
                {/* <Header /> */}
                {/* Our Scene & Camera is already built into our canvas */}
                <Canvas shadows camera={{ position: [0, 0, 10], fov: 55 }}>
                    {/* This light makes things look pretty */}
                    <ambientLight intensity={0.8} />
                    {/* Our main source of light, also casting our shadow */}
                    <pointLight position={[0, 100, 0]} intensity={0.2} />
                    <Globe ref={gpref} />
                    {/* <OrbitControls /> */}
                </Canvas>
            </div>
        </section>
    );
};

export default Banner;
