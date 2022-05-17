import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import FavouritesPage from "./pages/favourites";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/favourites"} element={<FavouritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;