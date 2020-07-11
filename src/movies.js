const movies = [
  {
    id: 1,
    title: "Joker",
    slug: "Joker",
    released: "4 October 2019",
    runtime: "2h 2min",
    genre: "Crime, Drama, Thriller",
    stars: "/photos/2.png",
    rating: "4.2",
    plot:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    type: "Action",
    video: "https://www.youtube.com/watch?v=rgXplohCw5o",
  },
  {
    id: 2,
    title: "The Martian",
    slug: "The-Martian",
    released: "2 October 2015",
    runtime: "2h 24min",
    genre: "Adventure, Drama, Sci-Fi",
    stars: "/photos/2.png",
    rating: "4",
    plot:
      "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    type: "Space",
    video: "https://www.youtube.com/watch?v=lQqhfq87FgY",
  },
  {
    id: 3,
    title: "The Lobster",
    slug: "The-Lobster",
    released: "16 October 2015",
    runtime: "1h 59min",
    genre: "Comedy, Drama, Romance",
    stars: "/photos/3.png",
    rating: "3.6",
    plot:
      "In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_SY1000_CR0,0,705,1000_AL_.jpg",
    type: "Drama",
    video: "https://www.youtube.com/watch?v=vU29VfayDMw",
  },
  {
    id: 4,
    title: "The Dark Knight ",
    slug: "The-Dark-Knight",
    released: "18 July 2008",
    runtime: "2h 32min",
    genre: "Action, Crime, Drama ",
    stars: "/photos/2.png",
    rating: "4.5",
    plot:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    type: "Action",
    video: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },

  {
    id: 5,
    title: "Her",
    slug: "Her",
    released: "10 January 2014",
    runtime: "2h 6min",
    genre: "Drama, Romance, Sci-Fi",
    stars: "/photos/2.png",
    rating: "4",
    plot:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_.jpg",
    type: "Drama",
    video: "https://www.youtube.com/watch?v=dJTU48_yghs",
  },

  {
    id: 6,
    title: "Star Wars: Episode IX",
    slug: "Star-Wars-Episode-IX",
    released: " 20 December 2019",
    runtime: "2h 22min",
    genre: "Action, Adventure, Fantasy",
    stars: "/photos/3.png",
    rating: "3.3",
    plot:
      "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.",
    poster:
      "https://i1.wp.com/jswordsmith.com/wp-content/uploads/2019/12/69A14444-C960-46A5-92C5-3CD36E2F7662.jpeg?w=960&ssl=1",
    type: "Space",
    video: "https://www.youtube.com/watch?v=zvcKNaWgpXA",
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    slug: "Avengers-Endgame",
    released: "26 April 2019",
    runtime: "3h 1min",
    genre: "Action, Adventure, Drama",
    stars: "/photos/2.png",
    rating: "4.2",
    plot:
      "the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    type: "Action",
    video: "https://www.youtube.com/watch?v=JyGGLB542ksg",
  },
  {
    id: 8,
    title: "Gone Girl",
    slug: "Gone-Girl",
    released: "3 October 2014",
    runtime: "2h 29min",
    genre: " Drama, Mystery, Thriller",
    stars: "/photos/2.png",
    rating: "4",
    plot:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    poster:
      "https://i.pinimg.com/564x/31/cd/08/31cd081a7f68961e29a53a53495ab4c2.jpg",
    type: "Drama",
    video: "https://www.youtube.com/watch?v=2-_-1nJf8Vg",
  },
  {
    id: 9,
    title: "Gravity",
    slug: "Gravity",
    released: "4 October 2013",
    runtime: "1h 31min",
    genre: "Drama, Sci-Fi, Thriller",
    stars: "/photos/3.png",
    rating: "3.8",
    plot:
      "Two astronauts work together to survive after an accident leaves them stranded in space.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    type: "Space",
    video: "https://www.youtube.com/watch?v=OiTiKOy59o4",
  },
  {
    id: 10,
    title: "Brooklyn",
    slug: "Brooklyn",
    released: "25 November 201",
    runtime: "1h 57min",
    genre: "Drama, Romance",
    stars: "/photos/3.png",
    rating: "3.7",
    plot:
      "An Irish immigrant lands in 1950s Brooklyn, where she quickly falls into a romance with a local. When her past catches up with her, however, she must choose between two countries and the lives that exist within..",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzE4MDk5NzEyOV5BMl5BanBnXkFtZTgwNDM4NDA3NjE@._V1_SY1000_SX675_AL_.jpg",
    type: "Drama",
    video: "https://www.youtube.com/watch?v=4IM1XhTxPAE",
  },
  {
    id: 11,
    title: "Doctor Strange",
    slug: "Doctor-Strange",
    released: "4 November 2016",
    runtime: "1h 55min",
    genre: "Action, Adventure, Fantasy",
    stars: "/photos/3.png",
    rating: "3.7",
    plot:
      "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    type: "Action",
    video: "https://www.youtube.com/watch?v=h7gvFravm4A",
  },
  {
    id: 12,
    title: "Interstellar",
    slug: "Interstellar",
    released: "7 November 2014",
    runtime: "2h 49min",
    genre: "Adventure, Drama, Sci-Fi",
    stars: "/photos/2.png",
    rating: "4.3",
    plot:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
    type: "Space",
    video: "https://www.youtube.com/watch?v=Lm8p5rlrSkY",
  },
];

export default movies;
