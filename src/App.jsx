import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Learn from "./Pages/Learn"
import Html from "./components/Html"
import Java from "./components/Java"
import MongoDb from "./components/MongoDb"
import Coding from "./Pages/Coding"
// import JavaScript from "./components/JavaScriptLearn"
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
import ReactPage from "./components/ReacPage"
import CSS from "./components/CSS"
import BootStrap from "./components/BootStrap"
import HtmlCourse from "./Pages/HtmlCourse"
import JavaScriptLearn from "./components/JavaScriptLearn"
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
            <Route path="javascript" element={<JavaScriptLearn />} />
            <Route path="nodejs" element={<Node />} />
            <Route path="mongodb" element={<MongoDb />} />
            <Route path="mysql" element={<Mysql />} />
            <Route path="reactjs" element={<ReactPage />} />
            <Route path="css" element={<CSS />} />
            <Route path="git" element={<Git />} />
            <Route path="bootstrap" element={<BootStrap />} />
          </Route>
          <Route path="/courses" element={<Courses />} >
            <Route path="" element={<CourseWelcome />} />
            <Route path="html" element={<HtmlCourse />} />
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
