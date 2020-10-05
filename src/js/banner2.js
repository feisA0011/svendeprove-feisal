

(async function () {
    const data = await apiLink('https://feisals-dyr-api.herokuapp.com/api/v1/adoptsections/3');

    const banner2 = document.querySelector('.banner2')
    const bannerTitle2 = document.querySelector('.banner__title2');
    const bannerText2 = document.querySelector('.banner__text2');
    bannerTitle2.textContent = data.title;
    bannerText2.textContent = data.content;
    banner2.style.backgroundImage = `url(${data.asset.url})`
})()