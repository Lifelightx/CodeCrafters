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
import Courses from "./Pages/Courses"
import CourseWelcome from "./Pages/CourseWelcome"
import ReactCourse from "./Pages/ReactCourse"
import JavaScriptCourse from "./Pages/JavaScriptCourse"
import CssCourse from "./Pages/CssCourse"
import MySqlCourse from "./Pages/MySqlCourse"
import JavaCourse from "./Pages/JavaCourse"
import MongoDbCourse from "./Pages/MongoDbCourse"
import CompilerHTML from "./components/Compilers/CompilerHTML"
// Import other components as needed
import JavaScriptRunner from "./components/Compilers/JavaScriptRunner"
import Git from "./components/Git"
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
            <Route path="nodejs" element={<Node />} />
            <Route path="mongodb" element={<MongoDb />} />
            <Route path="mysql" element={<Mysql />} />
            <Route path="git" element={<Git />} />
          </Route>
          <Route path="/courses" element={<Courses />} >
            <Route path="" element={<CourseWelcome />} />
            <Route path="reactjs" element={<ReactCourse />} />
            <Route path="java" element={<JavaCourse />} />
            <Route path="mongodb" element={<MongoDbCourse />} />
            <Route path="javascript" element={<JavaScriptCourse />} />
            <Route path="css" element={<CssCourse />} />
            <Route path="mysql" element={<MySqlCourse />} />
            <Route path="compilerHTML" element={<CompilerHTML />} />
            <Route path="compilerJavaScript" element={<JavaScriptRunner  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
