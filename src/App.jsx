import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages'
import { clsx } from 'clsx'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  const [toggle, setToggle] = useState(false)
  const toggleBackground = () => {
    setToggle(!toggle)
  }
  return (
    <Router>
      <div
        className={clsx(
          '',
          {
            'bg-[#0c0b1d]': toggle,
            'bg-[rgb(241,231,220)]': !toggle,
          }
        )}
      >
        <Header toggle={toggle} toggleBackground={toggleBackground} />
        <Routes>
          <Route path="/"
            element={<Home toggle={toggle} toggleBackground={toggleBackground} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
