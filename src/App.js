import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Html, Stats, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import avocado from './Avocado.glb'
import squid_model from './SquidGameAllScene03_NoLightsCamera.glb'


function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


const App = () => {

  // const gltf = useLoader(GLTFLoader, avocado)
  const gltf_squid = useLoader(GLTFLoader, squid_model)
  // <Box position={[-3, 0, 0]} />
  // <axesHelper args={[3]} />
  // <pointLight position={[10, 10, 10]} />
//
  return (
    <div
      id="canvas"
      style={{ width: '100%', height: '100%' }}
    >
          <Canvas camera={{ position: [-1, 2, -.5] }}>
              <OrbitControls />



              <ambientLight intensity={0.55} />
              <directionalLight intensity={0.4} />

              <primitive object={gltf_squid.scene} position={[-2, -2, 1]} scale={[0.1,0.1,0.1]}  />
          </Canvas>
    </div>
  );
}

export default App;
