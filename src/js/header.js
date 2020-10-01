

(async function () {
    const header = document.querySelector('.header')

    const headerTitle = document.querySelector('.header__title');
    const headerText = document.querySelector('.header__text');
    const data = await apiLink('https://feisals-dyr-api.herokuapp.com/api/v1/adoptsections/1');
    console.log(data)

    headerTitle.textContent = data.title;
    headerText.textContent = data.content;
    header.style.backgroundImage = data.asset.url;


})()