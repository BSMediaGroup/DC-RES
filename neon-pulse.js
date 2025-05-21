document.addEventListener('DOMContentLoaded', async () => {
  // Load tsparticles from CDN (no npm needed)
  const { tsParticles } = await import('https://cdn.jsdelivr.net/npm/tsparticles-engine@3/+esm');

  // Determine persona
  const isProfessional = !window.location.pathname.includes('/dcx');

  // Initialize TSParticles
  await tsParticles.load({
    id: 'tsparticles',
    options: {
      background: {
        color: {
          value: isProfessional ? '#f5f5f5' : 'linear-gradient(45deg, #1a1a1a, #2c003e)'
        }
      },
      particles: {
        number: {
          value: isProfessional ? 40 : 80,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: isProfessional ? '#333333' : ['#00f7ff', '#ff00ff']
        },
        links: {
          enable: !isProfessional,
          distance: 150,
          color: '#00f7ff',
          opacity: 0.5,
          width: 1
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3
          }
        },
        size: {
          value: { min: 1, max: 3 },
          random: true
        },
        move: {
          enable: true,
          speed: isProfessional ? 0.5 : 2,
          direction: 'none',
          random: true,
          outModes: 'out'
        }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: !isProfessional,
            mode: 'repulse'
          },
          onClick: {
            enable: !isProfessional,
            mode: 'push'
          }
        }
      },
      detectRetina: true,
      fpsLimit: 60
    }
  });
});