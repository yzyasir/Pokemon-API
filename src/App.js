import React, {useState, useEffect} from 'react';
import axios from 'axios';
// why do I have to define useState in curlies?

function App() {

  const [pokemon, setPokemon] = useState([]);

  const getNames = () => {
// Note the second argument is an empty array.
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    // axios will ALWAYS BRING BACK DATA IN THE CONSOLE AS "DATA"
    // .then(response => {
    //   console.log(response.data)
      // since you know that data is being returned from axios, you can do .data
      // ...that will bring back an array
      // I console.logged to see what was coming back

    //   .then(response => setPokemon(response.data))
    // })
    //    This .then was used to check if I was getting data
    // }
    
    .then(response => {
      console.log(response)
      setPokemon(response.data.results)}) //results is pulled from the data in the api
    .catch(error => console.log(error))
    // this catches errors, logs the errors, and then displays a fallback UI....
    // instead of the component tree that crashed
    // but I have commented it out now because there is no need for it now
  }


  return (
    <div >
      <button className="btn btn-primary" onClick={getNames}>Click here for ALL Pokemon names</button>
{/* When you hit the button onClick will activate getNames */}
      <ol>
      {
        
        pokemon.map((pokem, i) => {
// .map creates a new array with the results of calling a function for every array element, taking it out from the state
              return <li> <p key={i} >{pokem.name}</p> </li>
              // .name is specific to the api you'll need to look inside it before using
        })
      }
      </ol>
    </div>
  );
}

export default App;

// const getNames = () => {
//   fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
//   // .then(res => { console.log(res.json()), did this to show what shows in console
//   .then(response => response.json())
// // We have to turn the response into some sort of json by retrning
// // the above will show the data as a json objects
// // the response.all is shows the data as an array not an object, easier to parse the data
//   .then(response => {
//     console.log(response)
//     setPokemon(response.results)
// // this will now put the data into the state, for it to be displayed
// // when inspecting look inside the components
//   })
// // .then is always to resolve, res is short for response

//   .catch(err => console.log(err))
// // .catch is always to reject/error
// }