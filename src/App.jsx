import { BrowserRouter, Routes , Route } from "react-router-dom"
import Home from "./pages/Home"

import Page404 from "./pages/404"
import Cadastro from "./pages/Cadastro"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

