const API = "https://api.themoviedb.org/3";

export const get = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTJlMGE0MDNlNDNkZmI1OGVhYjJiYWY2YzQ1YWZmYiIsInN1YiI6IjY0MjYzNzEzOWNjNjdiMDBkMzUxMmEzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPSQ5SV3oojf3EsS5ir3W1lKxVb7xQajDNOeoOkjbOY",
      "Content-Type": "application/json;chartset=utf-8",
    },
  }).then((results) => results.json());
};

get("/dicover/movie");
