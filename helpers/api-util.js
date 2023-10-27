export async function getTrendingMovies() {
  return fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMxZDk2ZGM5ZTMxNmNjNjNmNzMwZjhkMjQzNDUwNiIsInN1YiI6IjYyZjQxZWQ5YzVhZGE1MDA3YTlhNzI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CKuWDRwXiziO9soolErwl_ThzEEBxyrH77bNGsRewXI",
      },
      next: {
        revalidate: 60,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getMovieData(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMxZDk2ZGM5ZTMxNmNjNjNmNzMwZjhkMjQzNDUwNiIsInN1YiI6IjYyZjQxZWQ5YzVhZGE1MDA3YTlhNzI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CKuWDRwXiziO9soolErwl_ThzEEBxyrH77bNGsRewXI",
    },
    next: {
      revalidate: 60,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getTrendingTVSeries() {
  return fetch(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMxZDk2ZGM5ZTMxNmNjNjNmNzMwZjhkMjQzNDUwNiIsInN1YiI6IjYyZjQxZWQ5YzVhZGE1MDA3YTlhNzI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CKuWDRwXiziO9soolErwl_ThzEEBxyrH77bNGsRewXI",
      },
      next: {
        revalidate: 60,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getSeriesData(seriesId) {
  return fetch(`https://api.themoviedb.org/3/tv/${seriesId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMxZDk2ZGM5ZTMxNmNjNjNmNzMwZjhkMjQzNDUwNiIsInN1YiI6IjYyZjQxZWQ5YzVhZGE1MDA3YTlhNzI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CKuWDRwXiziO9soolErwl_ThzEEBxyrH77bNGsRewXI",
    },
    next: {
      revalidate: 60,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function tvAiringToday() {
  return fetch(`https://api.themoviedb.org/3/tv/airing_today`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMxZDk2ZGM5ZTMxNmNjNjNmNzMwZjhkMjQzNDUwNiIsInN1YiI6IjYyZjQxZWQ5YzVhZGE1MDA3YTlhNzI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CKuWDRwXiziO9soolErwl_ThzEEBxyrH77bNGsRewXI",
    },
    next: {
      revalidate: 60,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function moviesInTheatres() {
  return fetch(`https://api.themoviedb.org/3/movie/now_playing`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMxZDk2ZGM5ZTMxNmNjNjNmNzMwZjhkMjQzNDUwNiIsInN1YiI6IjYyZjQxZWQ5YzVhZGE1MDA3YTlhNzI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CKuWDRwXiziO9soolErwl_ThzEEBxyrH77bNGsRewXI",
    },
    next: {
      revalidate: 60,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getAnyMovie(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMxZDk2ZGM5ZTMxNmNjNjNmNzMwZjhkMjQzNDUwNiIsInN1YiI6IjYyZjQxZWQ5YzVhZGE1MDA3YTlhNzI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CKuWDRwXiziO9soolErwl_ThzEEBxyrH77bNGsRewXI",
      },
      next: {
        revalidate: 60,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getAnySeries(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMxZDk2ZGM5ZTMxNmNjNjNmNzMwZjhkMjQzNDUwNiIsInN1YiI6IjYyZjQxZWQ5YzVhZGE1MDA3YTlhNzI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CKuWDRwXiziO9soolErwl_ThzEEBxyrH77bNGsRewXI",
      },
      next: {
        revalidate: 60,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
