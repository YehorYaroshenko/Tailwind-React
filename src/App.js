import './App.css'
import MainSection from './components/wrapper/MainSection'
import Header from './components/wrapper/Header'
import Wrapper from './components/wrapper/wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <MainSection />
      </Wrapper>
    </div>
  )
}

export default App
