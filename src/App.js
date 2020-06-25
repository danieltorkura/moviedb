import React from "react";
import Search from "./components/Search";
import Results from "./components/Results";

import { useState } from "react";
import axios from "axios";

function App() {
  const apiURL = "http://www.omdbapi.com/?i=tt3896198&apikey=9d6e7a6e";

  const [state, setState] = useState({
    text: "",
    results: [],
    selected: null,
  });

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(apiURL + "&s=" + state.text).then((response) => {
        let results = response.data.Search;
        setState((prevState) => {
          return { ...prevState, results };
        });
      });
    }
  };

  const handleInput = (e) => {
    setState({
      ...state,
      text: e.target.value,
    });
  };

  return (
    <div className="App">
      <h1 className="header">Movie Database</h1>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results movies={state.results} />
      </main>
    </div>
  );
}

export default App;
