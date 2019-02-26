import React, { Component } from "react";
// import { genres } from "../Starter Code/services/fakeGenreService";
// import { getGenres } from "../Starter Code/services/fakeGenreService";
import { getMovies, getMovie } from "../Starter Code/services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    isToggleOn: true,
    pageSize: 4,
    currentPage: 1
  };
  handleDelete = movie => {
    console.log(movie);
    const movies = this.state.movies.filter(m => m._id != movie._id);
    this.setState({ movies: movies });
  };

  // handleLikeClick = prevState => {
  //   // Not sure what im doing here
  //   // const movieID = this.state.movies.filter(m => m.id === movie.id);
  //   // console.log(movieID);
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // };

  // heartBadge() {
  //   // const movies = this.state.movies.filter(m => m._id === movie._id);
  //   // this.setState({ movies: movies });
  //   const badge = this.state.isToggleOn ? "fa fa-heart-o" : "fa fa-heart";
  //   return badge;
  // }
  handleLike = movie => {
    // console.log("Like Cliked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    console.log(movies);
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    // This is object destructuring method
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);

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
                <th>Likes</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                    {/* <i
                      onClick={this.handleLikeClick()}
                      className={this.heartBadge()}
                      aria-hidden="true"
                    /> */}
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
          <Pagination
            itemsCount={count}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
