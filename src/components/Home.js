import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

//Style
import { TitleWrap, Logo, PLink, CarouselImage } from "../styles";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);

  return (
    <div>
      <TitleWrap>
        <Logo src="/photos/Logo.png" alt="Movies" />
        <PLink to="/movies">
          <p> Grab your popcorn and choose your Movie! </p>
        </PLink>
      </TitleWrap>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <CarouselImage src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage src="https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY1000_CR0,0,675,1000_AL_.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage src="https://m.media-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_SY1000_CR0,0,705,1000_AL_.jpg" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
