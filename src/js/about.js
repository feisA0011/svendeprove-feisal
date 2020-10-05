//get data for the about 

(async function () {
    const data = await apiLink('https://feisals-dyr-api.herokuapp.com/api/v1/abouts');

    data.forEach((element, id) => {
        console.log()
        const template = document.querySelector('#about__template');
        const container = document.querySelector('.about');
        const clone = template.content.cloneNode(true)

        // clones
        clone.querySelector('.about__title').textContent = element.title;
        clone.querySelector('.about__text').textContent = element.content;


        container.appendChild(clone)
    });


})()




