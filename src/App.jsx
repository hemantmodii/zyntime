import './App.css'

import ElapsedTime from './components/ElapsedTime'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Notification from './components/Notification'
import Page2 from './components/Page2'
function App() {
  

  return (
    <div className='main-box max-w-[100vw] overflow-hidden'>
      <Landing/>
      <Page2/>
      <ElapsedTime/>
      <Footer/>
      <Notification/>
    </div>
  )
}

export default App
