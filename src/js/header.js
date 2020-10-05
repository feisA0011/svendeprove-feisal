

(async function () {


    const header = document.querySelector('.header')
    const title = document.querySelector('.header__title');
    const text = document.querySelector('.header__text');
    const data = await apiLink('https://feisals-dyr-api.herokuapp.com/api/v1/adoptsections/1');


    title.textContent = data.title;
    text.textContent = data.content;
    header.style.backgroundImage = `url(${data.asset.url})`

    document.querySelector("#loader").remove();
})()