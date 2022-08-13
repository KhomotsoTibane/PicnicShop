import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Footer from "./components/Footer"
import './App.css'


function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Navbar/>
        <Container className="mb-4 flex-grow-1">
          <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/" element={<Shop/>}/>
            {/* <Route path="/about" element={<About/>}/> */}
          </Routes>
        </Container>
        <Footer/>
      </ShoppingCartProvider>
    </div>
  )
}

export default App
