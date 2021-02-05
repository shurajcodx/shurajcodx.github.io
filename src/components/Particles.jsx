import ReactParticles from 'react-particles-js'

import ParticlesConfig from '../config/particlesConfig'

const Particles = () => {
  return (
    <div>
      <ReactParticles
        params={ParticlesConfig}
      />
    </div>
  )
}

export default Particles
