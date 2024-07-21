const movieJSON = `{
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "genre": "Sci-Fi",
    "actors": ["Leonardo DiCaprio", "Ellen Page", "Tom Hardy"]
}`;

// Parse JSON string to JavaScript object
const movie = JSON.parse(movieJSON);
console.log("Parsed Movie Object:", movie);

// Modify the movie object
movie.year = 2011; // Changing the year
movie.actors.push("Joseph Gordon-Levitt"); // Adding a new actor

// Convert the JavaScript object back to a JSON string
const updatedMovieJSON = JSON.stringify(movie, null, 2); // Beautify the JSON output
console.log("Updated Movie JSON:", updatedMovieJSON);
