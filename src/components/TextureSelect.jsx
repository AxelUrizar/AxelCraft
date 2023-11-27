import * as images from '../images/images'
import { useKeyboard } from '../hooks/useKeyboard'
import { useStore } from '../hooks/useStore'

import { useEffect } from 'react'

export const TextureSelect = () => {
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

    const {
        dirt,
        grass,
        glass,
        wood,
        log,
    } = useKeyboard()

    useEffect(() => {
        const options = {
            dirt,
            grass,
            glass,
            wood,
            log
        }

        const selectedTexture = Object
            .entries(options)
            .find(([texture, isEnabled]) => isEnabled)

        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }

    }, [dirt, grass, glass, wood, log])

    return (
        <div className={`texture-selector`}>
            {
                Object.entries(images).map(([imgKey, img], i) => {
                    return (
                      <div className='texture'>
                        <img
                            className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                            key={imgKey}
                            src={img}
                            alt={imgKey}
                        />
                        <span>{i + 1}</span>
                      </div>
                    )
                })
            }
        </div>
    )
}
