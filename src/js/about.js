const params = new URLSearchParams(window.location.search);
const aboutPage = params.get('page');
console.log(aboutPage);

const aboutTemplate = document.getElementById('about-template');
const container = document.querySelector('.about');
const clone = aboutTemplate.content.cloneNode(true);
console.log(aboutTemplate)
clone.querySelector('.about-title').textContent = 'About'
clone.querySelector('.about-title').style.color = 'red'
clone.querySelector('.about-title').style.textAlign = 'center'

clone.querySelector('.about-text').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem nemo architecto excepturi, quia quibusdam praesentium. Nemo impedit ex nesciunt illum. Iste repellendus sequi sapiente soluta commodi minus tempore illum eius magni! Quo provident illo quod sunt facilis praesentium aliasnihil neque, deserunt iusto, ea error impedit sapiente. Quae fugit quod,quibusdam animi quaerat aperiam provident eveniet placeat odit delectus?'


container.appendChild(clone)




