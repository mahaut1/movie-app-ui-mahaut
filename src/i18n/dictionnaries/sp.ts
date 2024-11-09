import { en } from "./en";

export const es: typeof en = {
  translation: {
    error: { defaultMessage: "Lo sentimos, ha ocurrido un error " },
    header: {
      title: "mi aplicación de películas",
      description:
        "Busque y explore películas desde la base de datos TMDB",
      nav: {
        home: "Bienvenido",
        movies: "Cine",
      },
    },
    movies: {
      page: "Cine",
      searchBar: {
        placeholder: "Buscar películas...",
      },
      table: {
        id: "ID",
        title: "Título",
        voteAverage: "Evaluación",
        voteCount: "Número de votos",
        popularity: "Popularidad",
        releaseDate: "fecha de lanzamiento",
      },
      noResults: "No se encontraron resultados.",
    },
    movie: {
      card: {
        releaseDate: "fecha de lanzamiento",
        originalTitle: "Título original",
        originalLanguage: "Idioma original",
        popularity: "Popularidad",
        voteAverage: "Evaluación",
        voteCount: "Número de votos",
      },
      error: {
        notFound: "Película no encontrada",
      },
   
    },
  },
};