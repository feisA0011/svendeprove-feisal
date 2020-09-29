const params = new URLSearchParams(window.location.search);
console.log(params)
const galleryItem = document.querySelector('.gallery__item')
const name = document.querySelector('.blog__name');
const post = document.querySelector('.blog__post');



//get all blog post 
// fetch("https://apijuk.herokuapp.com/blog-posts", {
//     "method": "GET"
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         data.forEach(element => {
//             const blogTemplate = document.querySelector('.blog__template');
//             console.log(blogTemplate)
//             const blogContainer = document.querySelector('.blogs');
//             const clone = blogTemplate.content.cloneNode(true);


//             let string = JSON.stringify(element.content)


//             clone.querySelector('.blog__name').textContent = element.title
//             clone.querySelector('.blog__post').textContent = element.content.substr(0, 500)




//             blogContainer.appendChild(clone)
//         });



//     })
//     .catch(err => console.error(err));

// fetch("https://apijuk.herokuapp.com/gallery-photos", {
//     "method": "GET"
// })
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(element => {
//             console.log(element.asset)
//             const template = document.querySelector('.template');
//             console.log(template)
//             const blogContainer = document.querySelector('.blogs');
//             const clone = template.content.cloneNode(true);

//             clone.querySelector('.temp-pic').innerHtml = element.asset
//             blogContainer.appendChild(clone)

//         });
//     })
//     .catch(err => console.error(err));
console.log('yooo')

fetch("https://feisals-animal-welfare.herokuapp.com/api/v1/assets", {
    "method": "GET"
})
    .then(response => console.log(response))
    .catch(err => console.error(err));

