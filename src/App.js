import React from "react";
import { Route, Switch } from "react-router";

// import { ThemeProvider } from "styled-components";
// import { GlobalStyle } from "./styles";

//Data
import movieData from "./moviesData";

//Components
import Home from "./components/Home";
import MovieList from "./components/MovieList";

function App() {
  return (
    <Switch>
      <Route to="/">
        <Home />
      </Route>
      <Route to="/movies">
        <MovieList movieData={movieData} />
      </Route>
    </Switch>
  );
}

export default App;
