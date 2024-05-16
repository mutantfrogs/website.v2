import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import Header from './components/Header'
import './styles/styles.css'
import "xp.css/dist/XP.css";

function App() {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/about" element={<AboutPage title="about - mutantfrogs"/>}/>
                <Route path="/gallery" element={<GalleryPage title="gallery - mutantfrogs"/>}/>
                <Route path="/blog" element={<BlogPage title="blog - mutantfrogs"/>}/>
                <Route path="/" element={<HomePage title="home - mutantfrogs"/>}/>
            </Routes>
        </Router>
    )
}

export default App;