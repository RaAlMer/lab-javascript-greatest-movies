// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const dirMov = arr.map((movie) => {
    return movie.director;
  });
  return unique = dirMov.filter((value, index, self) => {
        return self.indexOf(value) === index;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let sum = 0;
  const movieSum = arr.filter((movie) => {
    if (movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") > -1){
        sum += 1;
    }
  });
  return sum;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(arr) {
  const arrNum = arr.filter(function (movie) {
    return typeof movie.score === 'number';
  });
  return arrNum.reduce((avg, movie) => {
    let result = avg + movie.score/arr.length;
    return Math.round(result * 100) / 100;
  }, 0);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMov = arr.filter((movie) => {
    return movie.genre.indexOf("Drama") > -1;
  });
return dramaMov.reduce((avg, movie) => {
  let result = avg + movie.score/dramaMov.length;
  return Math.round(result * 100) / 100;
}, 0);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie) {
  const copy = JSON.parse(JSON.stringify(movie));
  let sortedMov = copy.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 );
  return sortedMov;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const copyAlp = JSON.parse(JSON.stringify(arr));
  let sortedAlp = copyAlp.sort((a, b) => (a.title > b.title) ? 1 : -1);
  let sortedAlpmap = sortedAlp.map(movie => {
    return movie.title;
  });
  return sortedAlpmap.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const copyTime = JSON.parse(JSON.stringify(arr)); //Copy the array
  let arrTime = copyTime.map((movie) => {
    let durationMov = movie.duration;
    if (durationMov.indexOf('min') !== -1){ //If the duration includes 'min'
      let hour = parseInt(durationMov.split('h')[0]);
      let min = parseInt(durationMov.split('h')[1].split('min')[0]);
      movie.duration = 60 * hour + min;
    } else {
      let hour = parseInt(durationMov.split('h')[0]);
      movie.duration = 60 * hour;
    }
    return movie;
  });
  return arrTime;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (arr.length === 0){
    return null;
  }
  const yearMov = arr.map((movie) => {
      return movie.year;
  });
  let unique = yearMov.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  let avgYear = [];
  for (let i = 0; i < unique.length; i++){
      const yearMovie = arr.filter((movie) => {
          return movie.year === unique[i];
      });
      let finalResult = yearMovie.reduce((avg, movie) => {
        let result = avg + movie.score/yearMovie.length;
        return Math.round(result * 100) / 100;
      }, 0);
      avgYear.push(finalResult);
  }
  let maxScore = 0;
  let maxYear = 0;
  for (let i = 0; i < avgYear.length; i++){
      if (maxScore < avgYear[i]){
          maxScore = avgYear[i];
          maxYear = unique[avgYear.indexOf(avgYear[i])];
      } else if (maxScore === avgYear[i] && maxYear > unique[avgYear.indexOf(avgYear[i], avgYear.indexOf(avgYear[i]) + 1)]){
          maxScore = avgYear[i]
          maxYear = unique[avgYear.indexOf(avgYear[i], avgYear.indexOf(avgYear[i]) + 1)];
      }
  }
  return `The best year was ${maxYear} with an average score of ${maxScore}`;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
