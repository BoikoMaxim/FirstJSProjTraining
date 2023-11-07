"use strict";

const numberOfFilms = +prompt('How many films have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('One of the last movies you watched?', ''),
          b = prompt('How much would you rate it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Watched quite a few films");
} else if (personalMovieDB.conut >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic viewer");
} else if (personalMovieDB.count >= 30) {
    console.log("You are a film buff");
} else {
    console.log("Error");
}

console.log(personalMovieDB);