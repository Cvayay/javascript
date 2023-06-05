const url = 'https://v2.jokeapi.dev/joke/Any?amount=40&categories=Programming,Misc,Dark,Pun,Spooky,Christmas';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const jokes = data.jokes;
    const categoryCounts = new Map();

    jokes.forEach(joke => {
      const category = joke.category;
      if (categoryCounts.has(category)) {
        categoryCounts.set(category, categoryCounts.get(category) + 1);
      } else {
        categoryCounts.set(category, 1);
      }
    });

    console.log(Object.fromEntries(categoryCounts.entries()));
  })
  .catch(error => console.error(error));



// The code fetches 30 jokes from the JokeAPI by sending a GET request to the URL specified in the url variable. 
// The fetch() function returns a Promise that resolves to the response object. 
// The then() method is called on the response object to extract the JSON data from it using the json() method, which also returns a Promise that resolves to the parsed data.
// The next then() method is called on the parsed data to extract the array of jokes and count their categories. 
// A new Map object is created to hold the category counts. 
// The forEach() method is called on the array of jokes to iterate over each joke. For each joke, the category is extracted and checked if it already exists as a key in the Map object. 
// If it does, the count for that category is incremented by 1. Otherwise, a new key-value pair is added to the Map object with a count of 1.
// Finally, the Object.fromEntries() method is used to convert the Map object back into an object, which is logged to the console. 
// If any errors occur during the fetching or processing of the data, they are caught and logged to the console using the catch() method.
