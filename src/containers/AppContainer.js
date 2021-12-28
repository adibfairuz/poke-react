import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DetailsPage from "../pages/Details";
import FavoritesPage from "../pages/Favorites";
import HomePage from "../pages/Home";
  
export default function AppContainer() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:name" element={<DetailsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </Router>
    );
}