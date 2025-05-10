import { useCallback, useEffect, useState } from 'react' // Added useEffect and useState
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine, ISourceOptions } from 'tsparticles-engine' // Import ISourceOptions

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  // State to hold particle options, allowing dynamic changes (e.g., for dark mode)
  const [particleOptions, setParticleOptions] = useState<ISourceOptions>({})

  useEffect(() => {
    // Function to determine if dark mode is active by checking the html class
    const isDarkMode = () => document.documentElement.classList.contains('dark')

    const updateOptions = () => {
      setParticleOptions({
        fullScreen: { enable: false }, // Set to false so it respects parent container
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: isDarkMode() ? '#2563eb' : '#3b82f6' }, // Darker blue for dark, lighter for light
          opacity: { value: isDarkMode() ? 0.15 : 0.25 }, // Slightly more visible in dark mode
          size: { value: { min: 0.5, max: 1.5 } }, // Random sizes
          move: {
            enable: true,
            speed: 0.4, // Slightly slower
            direction: 'none',
            random: true, // More random movement
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
          links: {
            // Added subtle links
            color: isDarkMode() ? '#1e3a8a' : '#60a5fa', // Colors matching theme accents
            distance: 130,
            enable: true,
            opacity: isDarkMode() ? 0.05 : 0.1,
            width: 1,
          },
        },
        interactivity: {
          // Subtle interactivity
          events: {
            onHover: {
              enable: true,
              mode: 'bubble', // Particles grow slightly on hover
            },
          },
          modes: {
            bubble: {
              distance: 100,
              size: 2.5,
              duration: 2,
              opacity: isDarkMode() ? 0.2 : 0.3,
            },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        detectRetina: true, // For sharper particles on high-DPI screens
      })
    }

    updateOptions() // Initial set

    // Observe class changes on <html> to react to dark mode toggle
    const observer = new MutationObserver(updateOptions)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect() // Cleanup observer
  }, [])

  // Only render Particles when particleOptions is populated
  if (Object.keys(particleOptions).length === 0) {
    return null
  }

  return (
    <Particles
      id='tsparticles' // Added id for potential direct targeting
      init={particlesInit}
      options={particleOptions}
      className='absolute inset-0 z-0 pointer-events-none' // Ensure it stays in background
      // Explicitly set height and width to cover the viewport area intended
      // The Particles component will be contained within its parent if fullScreen.enable is false
      // Style its parent to control its dimensions if needed.
      // Here, `absolute inset-0` makes it fill the nearest positioned ancestor.
    />
  )
}
