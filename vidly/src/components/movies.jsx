import React, { Component } from "react";
// import { genres } from "../Starter Code/services/fakeGenreService";
// import { getGenres } from "../Starter Code/services/fakeGenreService";
import { getMovies, getMovie } from "../Starter Code/services/fakeMovieService";
import { getGenres } from "../Starter Code/services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    isToggleOn: true,
    pageSize: 4,
    currentPage: 1
  };
  handleDelete = movie => {
    console.log(movie);
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

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

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
    console.log(genre);
  };

  render() {
    // This is object destructuring method
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);

    if (count === 0) return <p>There are no more movies!</p>;
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database</p>
          <h2>Movies Components</h2>

          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
