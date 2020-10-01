const param = new URLSearchParams(window.location.search);


//set up page data function
async function apiLink(url) {
    data = await pageData(url);
    return data;
}

function pageData(url) {
    return fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())

}

// (async function () {
//     const data = await apiLink('https://feisals-dyr-api.herokuapp.com/api/v1/assets');
//     console.log(data)
// })()

// const headerTitle = document.querySelector('header__title');
// console.log(headerTitle)

