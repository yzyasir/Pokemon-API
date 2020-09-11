import React, {useState} from 'react';
// why do I have to define useState in curlies?

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getNames = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    // .then(res => { console.log(res.json()), did this to show what shows in console
    .then(response => response.json())
// We have to turn the response into some sort of json by retrning
// the above will show the data as a json objects
// the response.all is shows the data as an array not an object, easier to parse the data
    .then(response => {
      console.log(response)
      setPokemon(response.results)
// this will now put the data into the state, for it to be displayed
// when inspecting look inside the components
    })
// .then is always to resolve, res is short for response

    .catch(err => console.log(err))
// .catch is always to reject/error
  }


  return (
    <div >
      <button className="btn btn-primary" onClick={getNames}>Click here for ALL Pokemon names</button>
{/* When you hit the button onClick will activate its trap card getNames */}
      <ol>
      {
        
        pokemon.map((pokem, i) => {
// .map creates a new array with the results of calling a function for every array element, taking it out from the state
              return <li> <p key={i} >{pokem.name}</p> </li>
        })
      }
      </ol>
    </div>
  );
}

export default App;
