import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import BooksDetails from "./pages/BooksDetails";

import Nav1 from "./components/Nav1";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Nav1 />

      <main className="main-content">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/books"
            element={<Books />}
          />

          <Route
            path="/books/:id"
            element={<BooksDetails />}
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;