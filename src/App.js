import { Route, Switch } from "react-router";
import React from "react";
import { GlobalStyle } from "./styles";

//Data
import movies from "./movies";

//Components
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />

      <Switch>
        <Route path="/movies/:movieSlug">
          <MovieDetail movies={movies} />
        </Route>
        <Route path="/movies">
          <MovieList movies={movies} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
