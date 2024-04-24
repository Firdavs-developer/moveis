// import { Route,  Routes } from "react-router-dom"
import PopularMovies from "./pages/PopularMovies"
import AppHeader from "./components/Header"
import { Route,  Routes, Navigate } from "react-router-dom"
import DetailMovie from "./pages/DetailMovie"
import NotFound from "./pages/NotFound"
import TopMovies from "./pages/TopMovies"
import UpComing from "./pages/Upcoming"


function App() {
  return(
    <> 
      <AppHeader/>
      <Routes>
        <Route path="/popular" element={<PopularMovies/>}/>
        <Route path="/" element={<Navigate to="/popular"/>}/>
        <Route path="/top-movies" element={<TopMovies/>}/>
        <Route path="/upcoming" element={<UpComing/>}/>
        <Route path="/popular/:id" element={<DetailMovie/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>

  )
  
    
  
}

export default App