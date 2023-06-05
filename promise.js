function fetchJoke() {
    return fetch('https://v2.jokeapi.dev/joke/Any')
      .then(response => response.json())
      .then(data => data);
  }
  
  Promise.all([fetchJoke(), fetchJoke()])
    .then(([joke1, joke2]) => {
      console.log('Joke 1:', joke1);
      console.log('Joke 2:', joke2);
  
      if (joke1.type === joke2.type) {
        console.log('Both jokes are the same type.');
      } else {
        console.log('The jokes are different types.');
      }
    })
    .catch(error => {
      console.log('Error occurred while fetching jokes:', error);
    });
  