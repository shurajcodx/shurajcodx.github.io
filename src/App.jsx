import Header from './components/Header'
import IntroSection from './components/IntroSection'
import Particles from './components/Particles'

function App() {
  return (
    <div className='App'>
      <Particles />
      <header>
          <Header />
          <IntroSection />
        </header>
    </div>
  )
}

export default App
