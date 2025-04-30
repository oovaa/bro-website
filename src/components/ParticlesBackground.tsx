import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 50 },
          color: { value: '#3b82f6' },
          opacity: { value: 0.1 },
          size: { value: 1 },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
          }
        }
      }}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  )
}