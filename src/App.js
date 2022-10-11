import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";

import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import AddQuotes from "./pages/AddQuotes";
import PostedQuotes from "./pages/PostedQuotes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/quotes" element={<AddQuotes />}></Route>
        <Route path="/postedQuote" element={<PostedQuotes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
