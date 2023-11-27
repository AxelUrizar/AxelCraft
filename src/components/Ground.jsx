import { usePlane } from '@react-three/cannon';
import { groundTexture } from '../images/textures';
import { useStore } from '../hooks/useStore'

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0]
    }));

    const [addCube] = useStore(state => [state.addCube])

    groundTexture.repeat.set(100, 100)

    const handleClickGround = e => {
    console.log('hola')
    console.log(e.button)
        e.stopPropagation()
        const [x, y, z] = Object.values(e.point)
            .map(n => Math.round(n))
        if (e.button === 2) {
            addCube(x, y, z)
        }
    }

    return (
        <mesh ref={ref} onClick={(handleClickGround)}>
            <planeGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' map={groundTexture} />
        </mesh>
    )
}
