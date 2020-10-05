
(async function () {

    const data = await apiLink('https://feisals-dyr-api.herokuapp.com/api/v1/animals');
    data.forEach((element, id) => {
        const template = document.querySelector('#animal__template');
        const container = document.querySelector('.animal__container');
        const clone = template.content.cloneNode(true);

        clone.querySelector('.animal__img').src = element.asset.url
        clone.querySelector('.info__title').textContent = element.name;
        clone.querySelector('.info__text').textContent = element.description;
        container.appendChild(clone);
    })

})()

