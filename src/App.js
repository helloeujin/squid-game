import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Stats, OrbitControls } from '@react-three/drei'


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
  return (
    <div
      id="canvas"
      style={{ width: '100%', height: '100%' }}
    >
          <Canvas >
              <OrbitControls />
              <axesHelper args={[3]} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[-3, 0, 0]} />
              <Box position={[3, 0, 0]} />
          </Canvas>
    </div>
  );
}

export default App;
