(async function () {
    const data = await apiLink('https://feisals-dyr-api.herokuapp.com/api/v1/volunteers');

    data.map((element, id) => {

        const template = document.querySelector('#volunteer__template');
        const container = document.querySelector('.volunteer__container');
        const clone = template.content.cloneNode(true);
        // console.log(template)

        const volunteerTitle = clone.querySelector('.card__title');
        const volunteerImg = clone.querySelector('.card__img');
        const volunteerText = clone.querySelector('.card__text');
        const volunteerWarn = clone.querySelector('.card__warning');


        volunteerTitle.textContent = element.title;
        volunteerImg.src = element.asset.url;
        volunteerText.textContent = element.content;
        volunteerWarn.textContent = element.extra;



        container.appendChild(clone)


    })
})()
