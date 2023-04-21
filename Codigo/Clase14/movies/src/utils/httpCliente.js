const API = "https://api.themoviedb.org/3";

export const get = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "",
      "Content-Type": "application/json;chartset=utf-8",
    },
  }).then((results) => results.json());
};

get("/dicover/movie");
