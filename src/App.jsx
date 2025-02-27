import Layout from "./components/Layout";
import MovieDetails from "./components/MovieDetails"
import MovieHome from "./components/MovieHome"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MovieHome/>}/>
        <Route path='details' element={<MovieDetails/>}/>
      </Route>

    </Routes>
    </Router>
  )
}

export default App
