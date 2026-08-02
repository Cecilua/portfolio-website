import { BrowserRouter, Routes, Route } from "react-router"
import NotFound from "@/components/NotFound.tsx"
import Home from "@/components/Home.tsx"
import NavBar from "@/components/NavBar.tsx"

export function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio-website">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
