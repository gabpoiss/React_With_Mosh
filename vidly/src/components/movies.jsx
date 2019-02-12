import React, { Component } from "react";
// import { genres } from "../Starter Code/services/fakeGenreService";
// import { getGenres } from "../Starter Code/services/fakeGenreService";
import { getMovies, getMovie } from "../Starter Code/services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    isToggleOn: true
  };
  handleDelete = movie => {
    console.log(movie);
    const movies = this.state.movies.filter(m => m._id != movie._id);
    this.setState({ movies: movies });
  };

  handleLikeClick = prevState => {
    // Not sure what im doing here
    // const movieID = this.state.movies.filter(m => m.id === movie.id);
    // console.log(movieID);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  heartBadge() {
    // const movies = this.state.movies.filter(m => m._id === movie._id);
    // this.setState({ movies: movies });
    const badge = this.state.isToggleOn ? "fa fa-heart-o" : "fa fa-heart";
    return badge;
  }

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no more movies!</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database</p>
        <div className="container">
          <h2>Movies Components</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <i
                      onClick={this.handleLikeClick()}
                      className={this.heartBadge()}
                      aria-hidden="true"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
