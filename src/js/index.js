fetch("https://feisals-dyr-api.herokuapp.com/api/v1/animals/2", {
    "method": "GET"
})
    .then(response => console.log(response))
    .catch(err => console.error(err));