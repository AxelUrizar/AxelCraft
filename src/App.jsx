import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV as Fpv } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelect } from './components/TextureSelect'

function App() {
    return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <TextureSelect />
      <div className='pointer'>+</div>
      <div className='instructions'>
        <p>Use "WASD" to move around.</p>
        <p>"RightClick" to put a block and "LeftClick" to delete it.</p>
        <p>1-5 to select type of block.</p>
      </div>
    </>
    )
}

export default App
