import React from 'react';
import Search from './components/Search'
import Results from './components/Results'

import { useState } from 'react';
import axios from 'axios';


function App() {

const apiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9d6e7a6e'

const [state, setState] = useState({
  text : '',
  results: [],
  selected : null
})

const search = (e) => {
  if(e.key === 'Enter') {
    axios.get(apiURL + '&s=' + state.text).then(response => {
      console.log(response.data.Search)
      // console.log(data.Search)
      let results = response.data.Search
      // let results = JSON.stringify(data.Search)
      // console.log(data.Search[0].Title)
      // console.log('results ' + results)

      setState( prevState => {
        return {...prevState, results}
      })
      // console.log(state.results)
    })
  }

}

const handleInput = (e) => {
  // let text = e.target.value

  setState ({
    text : e.target.value
  })

  // console.log(state.text)

}
  return (
    <div className="App">
     <h1 className='header'>Movie Database</h1>
     <main>
       <Search handleInput={handleInput} search={search}/>
       <Results movies={state.results}/>
      {console.log('Results : ' + state.results)}
     </main>
    </div>
  );
}

export default App;
