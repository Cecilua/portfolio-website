import { BrowserRouter, Routes, Route } from "react-router"
import NotFound from "@/components/NotFound.tsx"
import Home from "@/components/Home.tsx"
import NavBar from "@/components/NavBar.tsx"
import LoadHTML from "@/components/LoadHTML.tsx"

export function App() {
  return (
    <div className="App flex h-screen flex-col">
      <BrowserRouter basename="/portfolio-website/">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/flappy-crow"
            element={
              <LoadHTML src={"/flappy-crow.html"} title={"Flappy Crow"} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
