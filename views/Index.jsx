const React = require('react');
const pokemon = require('../models/pokemon');

 const Index = ({pokemon}) => {
    return(
        <div>
            <h1>See All Pokemon</h1>
            <ul>
                {pokemon.map((pokemon, idx) => {
                    return(
                        
                        <li key={pokemon.name}>
                        <a href={`/pokemon/${idx}`}>{pokemon.name}</a>
                    </li>
                        )

                })}
            </ul> <br/>
{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ == Form to add new Pokemon == into the database  */}
            <h3>Add your brand new found Pokemon here</h3>
                <form action="/pokemon" method="POST">
                     <label htmlFor="name">Name</label><br />
                    <input type="text" name="name" /><br />
                    <label htmlFor="img">Image URL</label><br />
                    <input type="text" name="img" /><br /><br />
                    <button type="submit">Add your new Pokemon </button><br /><br />
                    <button type="reset">Reset </button>
                </form>
        </div>
    )
}

module.exports = Index;


// const myStyle = { 
//     color: '#ffffff',
//     backgroundColor: '#0000000',
// };

// // * for inline CSS
// // class MyFirstComponent extends React.Component() {
// //     return(
// //         <div style={myStyle}>My First React Component!</div>
// //     )
// // }


// const Index = ({ pokemon }) => {
//   return (
//     <div>
//       <h1>The Pokemon's World by Brahima</h1>
//       <ul>
//         {pokemon.map((p) => (
//           <li key={p.name}>
//             <a href={`/pokemon/${idx}`}>{p.name}</a>
//           </li>
//         ))}
//       </ul>
//       <form action="/pokemon" method="POST">
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" />
//         <label htmlFor="img">Image URL</label>
//         <input type="text" name="img" />
//         <button type="submit">Add Pokemon</button>
//       </form>
//     </div>
//   );
// };

module.exports = Index;
