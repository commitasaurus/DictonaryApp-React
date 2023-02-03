import "./App.css";
import React, { useState } from "react";
import SearchBar from "./components/Search/SearchBar";
import Header from "./components/Layout/Header";
function App() {
  const [fontFamily, setFontFamily] = useState("serif");
  const fontChangeHandler = (font) => {
    setFontFamily(font);
  };
  return (
    <div className="app">
      <Header font={fontFamily} onFontChange={fontChangeHandler} />
      <SearchBar />
    </div>
  );
}

export default App;
