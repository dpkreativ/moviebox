/**
 * This one might be deprecated now in favour of formatDate()
 */

// export function convertToUTC(inputDateStr) {
//   const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
//   const match = inputDateStr.match(regex);

//   if (match) {
//     const year = match[1];
//     const month = match[2];
//     const day = match[3];

//     const utc = new Date(Date.UTC(year, month, day));
//     return utc.toUTCString();
//   } else {
//     return null; // Return null for an invalid date format
//   }
// }

// Trying out another date format
export function formatDate(inputDate) {
  const options = {
    year: 'numeric',
    // month: "short",
    // day: "numeric",
    // weekday: "short",
  };
  const dateObj = new Date(inputDate);
  return dateObj.toLocaleDateString('en-US', options);
}

export function getGenreNames(genre_ids, genres) {
  const genreNames = genre_ids.map((id) => {
    const genre = genres.genres.find((genre) => genre.id === id);
    return genre ? genre.name : 'Unknown';
  });
  return genreNames;
}

// I haven't used this function for anything yet, so I'm removing it
// export function generate16x9Image() {}

// Deprecating this one soon in favour of findObj()
// export function findTrailerKey(array) {
//   const trailerObject = array.find((obj) => obj.type === 'Trailer');

//   return trailerObject.key;
// }

export function filterObjects(array, key, param) {
  const res = array.filter((obj) => obj[key] === param);
  return res;
}
