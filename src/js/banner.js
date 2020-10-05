

(async function () {
    const banner = document.querySelector('.banner')

    const bannerTitle = document.querySelector('.banner__title');
    const bannerText = document.querySelector('.banner__text');

    const data = await apiLink('https://feisals-dyr-api.herokuapp.com/api/v1/adoptsections/2');


    bannerTitle.textContent = data.title;
    bannerText.textContent = data.content;
    banner.style.backgroundImage = `url(${data.asset.url})`



})()