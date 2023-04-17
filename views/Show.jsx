const React = require('react');
const pokemon = require('../models/pokemon');


const Show = ({pokemon}) => {
    console.log(pokemon);
    return(
        <div>
            <h1>Gota Catch 'Em All!</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img + '.jpg'} alt={pokemon.name}/>
            <a href='/pokemon'>Back</a>
        </div>
    )
}

module.exports = Show;


















// const Show = ({ pokemon }) => {
//   return (
//     <div>
//       <h1>{pokemon.name}</h1>
//       <img src={`${pokemon.img}.jpg`} alt={pokemon.name} />
//       <a href='/pokemon'>Back</a>

// //* Form to update the pokemon info 
//       <form action={`/pokemon/${pokemon.name}?_method=PUT`} method="POST">

// //* It is here that that the Pokemon picture shows

//         <label htmlFor="img">Image URL</label>

// //* Data entering for updating the pokemon info as necessary here with an action
//         <input type="text" name="img" defaultValue={pokemon.img} />
//         <button type="submit">Update Pokemon</button>
//       </form>

// //* I am deleting at this level with an action button too.
//       <form action={`/pokemon/${pokemon.name}?_method=DELETE`} method="POST">
//         <button type="submit">DELETE</button>
//         </form>
        
//     </div>
//   )
// }

module.exports = Show; 




// 
/* Show Route
app.get("/pokemon/:id", (req, res) => {
    // pokemon.findById(req.params.id, (error, foundPoke) => {
      res.render("Show", { pokemon: pokemon[req.params.id]});
    });
*/