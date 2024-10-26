import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Learn from "./Pages/Learn"
import Html from "./components/Html"
import Java from "./components/Java"
import MongoDb from "./components/MongoDb"
import Coding from "./Pages/Coding"
import JavaScript from "./components/JavaScript"
import Node from "./components/Node"
import Mysql from "./components/Mysql"
// Import other components as needed

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />}>
            <Route path="" element={<Coding />} />
            <Route path="html" element={<Html />} />
            <Route path="java" element={<Java />} />
            <Route path="javascript" element={<JavaScript />} />
            <Route path="node" element={<Node />} />
            <Route path="mongoDb" element={<MongoDb />} />
            <Route path="mysql" element={<Mysql />} />
            <Route path="coding" element={<Coding />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
