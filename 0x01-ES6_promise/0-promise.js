function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    fetch('https://api.example.com/data')
      .then(response => {
        reject(new Error('API request failed'));
      ) else {
        resolve(response.json());
      }
    })
    .catch(error => {
      reject(error);
    });
  });
}
