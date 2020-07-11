const movies = [
  {
    id: 1,
    title: "Joker",
    slug: "Joker",
    released: "4 October 2019",
    runtime: "2h 2min",
    genre: "Crime, Drama, Thriller",
    plot:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",

    recommendedSlug: "The Dark Knight ",
    recommended:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },

  {
    id: 2,
    title: "The Martian",
    slug: "The-Martian",
    released: "2 October 2015",
    runtime: "2h 24min",
    genre: "Adventure, Drama, Sci-Fi",
    plot:
      "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    recommendedSlug: "Interstellar",
    recommended:
      "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    id: 3,
    title: "The Lobster",
    slug: "The-Lobster",
    released: "16 October 2015",
    runtime: "1h 59min",
    genre: "Comedy, Drama, Romance",
    plot:
      "In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_SY1000_CR0,0,705,1000_AL_.jpg",

    recommendedSlug: "Her",
    recommended:
      "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight ",
    slug: "The-Dark-Knight ",
    released: "18 July 2008",
    runtime: "2h 32min",
    genre: "Action, Crime, Drama ",
    plot:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    recommendedSlug: "Joker",
    recommended:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  },

  {
    id: 5,
    title: "Her",
    slug: "Her",
    released: "10 January 2014",
    runtime: "2h 6min",
    genre: "Drama, Romance, Sci-Fi",
    plot:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_.jpg",

    recommendedSlug: "The-Lobster",
    recommended:
      "https://m.media-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_SY1000_CR0,0,705,1000_AL_.jpg",
  },
  {
    id: 6,
    title: "Star Wars: Episode IX",
    slug: "Star-Wars-Episode-IX",
    released: " 20 December 2019",
    runtime: "2h 22min",
    genre: "Action, Adventure, Fantasy",
    plot:
      "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.",
    poster:
      "https://i1.wp.com/jswordsmith.com/wp-content/uploads/2019/12/69A14444-C960-46A5-92C5-3CD36E2F7662.jpeg?w=960&ssl=1",
    // revise here please
    recommendedSlug: " not sure what movie",
    recommended:
      "https://i1.wp.com/jswordsmith.com/wp-content/uploads/2019/12/69A14444-C960-46A5-92C5-3CD36E2F7662.jpeg?w=960&ssl=1",
  },
  {
    id: 7,
    title: "Gone Girl",
    slug: "Gone-Girl",
    released: "3 October 2014",
    runtime: "2h 29min",
    genre: " Drama, Mystery, Thriller",
    plot:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    poster:
      "https://i.pinimg.com/564x/31/cd/08/31cd081a7f68961e29a53a53495ab4c2.jpg",
    recommendedSlug: "Doctor Strange",
    recommended:
      "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  },

  {
    id: 8,
    title: "Doctor Strange",
    slug: "Doctor-Strange",
    released: " 4 November 2016",
    runtime: "1h 55min",
    genre: "Action, Adventure, Fantasy",
    plot:
      "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    recommendedSlug: "Gone Girl",
    recommended:
      "https://i.pinimg.com/564x/31/cd/08/31cd081a7f68961e29a53a53495ab4c2.jpg",
  },
  {
    id: 9,
    title: "Interstellar",
    slug: "Interstellar",
    released: "7 November 2014",
    runtime: "2h 49min",
    genre: "Adventure, Drama, Sci-Fi",
    plot:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
    recommendedSlug: "The-Martian",
    recommended:
      "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
];

export default movies;
