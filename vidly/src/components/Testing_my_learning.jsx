// import React, { Component } from "react";
// import { getMovies, getMovie } from "../Starter Code/services/fakeMovieService";

// class Tmovies extends Component {
//   state = {
//     movies: getMovies()
//   };

//   handleDelete = movie => {
//     const movies = this.state.movies.filter(m => m._id != movie._id);
//     this.setState({ movies: movies });
//   };

//   render() {
//     return (
//       <div className="container">
//         <h1>Testing Movies Deleting Components</h1>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Genre</th>
//               <th>Stock</th>
//               <th>Rate</th>
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.movies.map(movie => (
//               <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                   <button
//                     onClick={() => this.handleDelete(movie)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default Tmovies;
