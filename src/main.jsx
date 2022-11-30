import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowseRouter, Routes, Route} from 'react-router-dom';
//Styles
import './index.css'
//Pages
import App from './App'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowseRouter>
        <Routes>
           <Route element={<App/>}>
              <Route path="/" element={<Home />}/>
              <Route path="movie/:id" element={<Movie />}/>
              <Route path="search" element={<Search />}/>
           </Route>
        </Routes>
    </BrowseRouter>
  </React.StrictMode>
)
