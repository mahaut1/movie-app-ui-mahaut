import { en } from "./en";

export const de: typeof en = {
  translation: {
    error: { defaultMessage: "Entschuldigung, etwas ist schief gelaufen...." },
    header: {
      title: "Meine FilmApp",
      description:
        "Suchen sie Filme mit der Datenbank TMDB",
      nav: {
        home: "Startseite",
        movies: "Filme",
      },
    },
    movies: {
      page: "Filme",
      searchBar: {
        placeholder: "Filme suchen...",
      },
      table: {
        id: "ID",
        title: "Title",
        voteAverage: "Note",
        voteCount: "Anzahl von Wahlen",
        popularity: "Popularität",
        releaseDate: "Veröffentlichungsdatum",
      },
      noResults: "Kein Resultat.",
    },
    movie: {
      card: {
        releaseDate: "Veröffentlichungsdatum",
        originalTitle: "Original Titel",
        originalLanguage: "Original Sprache",
        popularity: "Popularität",
        voteAverage: "Note",
        voteCount: "Anzahl von Wahlen",
      },
      error: {
        notFound: "Das gesuchte Film wurde nicht gefunden",
      },
   
    },
  },
};