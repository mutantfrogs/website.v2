import { HashRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from 'react';
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
                <Route path="/" element={<AboutPage title="about - mutantfrogs"/>}/>
                <Route path="/explore" element={<GalleryPage title="explore - mutantfrogs"/>}/>
                <Route path="/blog" element={<BlogPage title="blog - mutantfrogs"/>}/>
            </Routes>
        </Router>
    )
}

export default App;