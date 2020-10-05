const param = new URLSearchParams(window.location.search);

let token;
//set up page data function
async function apiLink(url) {
    data = await pageData(url);
    return data;
}

function pageData(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: "Bearer" + token
        }
    })
        .then(response => response.json())

}



// function getToken() {
//     fetch("https://feisals-dyr-api.herokuapp.com/auth/token", {
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         "body": "username=admin&password=1234"
//     })
//         .then(response => response.json())
//         .then(data => {

//             thisToken = data.token
//             console.log(thisToken)

//         })
//         .catch(err => console.error(err));
// }
// getToken()


