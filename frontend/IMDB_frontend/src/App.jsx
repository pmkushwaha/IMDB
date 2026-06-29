 
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './pages/Register'
// import Login from './pages/Login'
import './App.css'

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='register'element={<Register/>} />
      {/* <Route path='login' element={<Login/>}/> */}
      </Routes>
    </Router>
      
    </>
  )
}

export default App
