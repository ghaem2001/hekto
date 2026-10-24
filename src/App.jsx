import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Account from "./pages/Account"
import Blog from "./pages/Blog"
import NotFound from "./pages/NotFound"


export default function App(){
  return(
    <div className="w-full">

      <BrowserRouter>

        <Header/>
        <Nav/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <Footer/>
        
      </BrowserRouter>

    </div>
  )
}