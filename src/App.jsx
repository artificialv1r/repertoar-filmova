import React from "react";
import Movies from "./components/Movies";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import AppInfo from "./components/AppInfo";
import AuthorInfo from "./components/AuthorInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieForm from "./components/MovieForm";
import MovieEditForm from "./components/MovieEditForm";
import "./styles/global.scss";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />}>
                <Route index element={<AppInfo />} />
                <Route path="app" element={<AppInfo />} />
                <Route path="author" element={<AuthorInfo />} />
              </Route>
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/new" element={<MovieForm />} />
              <Route path="/movies/:id/update" element={<MovieEditForm />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
