import "./App.css";
import React from "react";
import SearchBar from "./components/Search/SearchBar";
import Header from "./components/Layout/Header";
import WordInfo from "./components/UI/WordInfo";
import Noun from "./components/UI/Noun";
import Verb from "./components/UI/Verb";
import useHttp from "./hooks/use-http";
function App() {
  const [searchData, searchDataHandler, isLoading] = useHttp(
    `https://api.dictionaryapi.dev/api/v2/entries/en/`
  );
  searchDataHandler("searc");

  const filteredWord =
    searchData !== ""
      ? {
          word: searchData.word,
          phonetic: searchData.phonetic,
          noun: {
            definitions: searchData.meanings[0].definitions,
            synonyms: searchData.meanings[0].synonyms,
          },
          verb: searchData.meanings[1]
            ? searchData.meanings[1].definitions
            : false,
          source: searchData.sourceUrls[0],
        }
      : "";

  return (
    <div className="app">
      <Header />
      <SearchBar searchDataHandler={searchDataHandler} />
      {filteredWord.word ? (
        <React.Fragment>
          <main>
            <WordInfo info={filteredWord} />
            {filteredWord.noun ? <Noun wordInfo={filteredWord.noun} /> : ""}
            {filteredWord.verb ? <Verb wordInfo={filteredWord.verb} /> : ""}
          </main>
          <div className="source">
            <p>Source</p>
            <a target="_blank" href={filteredWord.source}>
              {filteredWord.source}
            </a>
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
