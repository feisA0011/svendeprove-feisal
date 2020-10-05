# Foreningen for Dyrevelfærd - Feisal Ahmed WUHF02

Dokumentation for Termim prøve 05-10-2020

## Stacks

Jeg har besluttet at opbygge min hjemmeside op med følenge stack:

- HTML/EJS
- BEM
- CSS/SASS
- JavaScript
- Gulp

### HTML:

Jeg arbejder med HTML, som stå for (HyperText Markup Language). Det bruges til at designe hjemmesider ved hjælp af markup sprog. HTML er en kombinationen af hypertext og markup sprog. Hypertext definerer linket mellem hjemmesider. Markup spoget definere tekst dokument inden for tags.

Jeg har valgt at arbejde med Ejs. E i Ejs er til Embedded, Ejs er enkel og effektiv template motor til Javascript. Grunden til at jeg bruger det er fordi, den giver mig mulighed for at oprette Html-siden med almindeligt javascript. Ejs giver hurtigt kompilering og includere både server og browsersupport.

```html
<%- include('../partials/head') %> <%- include('../partials/head_end') %> <%-
include('../partials/navigation') %>

<form id="form1" action="/" onsubmit="return validate(this)" method="post">
  <div><input type="text" name="name" placeholder="Name" /></div>
  <div><input type="text" name="age" placeholder="Your Age" /></div>
  <div><input type="text" name="email1" placeholder="Your Email" /></div>
  <div><input type="text" name="email2" placeholder="Repeat Your Email" /></div>
  <div><input type="text" name="site" placeholder="Your Website" /></div>
  <div><input type="submit" value="Send tilmelding" /></div>
  <div id="message"></div>
</form>

<%- include('../partials/footer') %>
<script src="../../../assets/js/navigation.js"></script>
<script src="../../../assets/js/contact.js"></script>
```

### CSS:

CSS stå for (Cascading style sheet ) bruges til at indstille designs på hjemmesider, der indeholder HTML-elementer. Det indstiller baggrund farve, skrifttype størrelse, font familie, farve osv. Egenskaber for elementer på en websider. Der er tre typer CSS, Inline CSS, internal and Embedded CSS, External CSS.

### SASS:

Sass er den korte form for Syntactically Awesome Style Sheet. Det er en
opgradering til CSS. Sass er en CSS pre-processor. Den er fuldt kompatibel med
all versioner af CSS.

```scss
.animal {
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
  padding: 2rem;

  &__title {
    font-size: 2rem;
    color: $title-color;
    font-weight: $fw-500;
    padding: 1rem 0;
  }
```

Grund til jeg valgt Sass er fordi, Sass reducere gentagelser af CSS og spare tid og giver muligheder for at lave mit stylesheet mere dynamisk med bruges af Variabler

### JavaScript:

JavaScript er at script eller programmeringssprog, der giver dig mulighed for at
implementere komplekse funktioner på hjemmesider hver gang en hjemmeside gør
mere end bare at sidde der og vise statiske oplysninger, som du kan se på vider
rettidige indhold opdateringer, interaktiv kort, animeret 2D/3D grafisk.

```javascript
const message = document.querySelector("#message");
console.log(message);

function validate(f) {
  // f.preventDefault()
  if (f.name.value == "") {
    message.textContent = "Please fill in your name!";
    return false;
  }
  const atPos = f.email1.value.indexOf("@");
  const dotPos = f.email1.value.lastIndexOf(".");

  if (atPos < 1 || dotPos < atPos + 2 || f.email1.value.length <= dotPos + 2) {
    message.textContent = "Please enter a valid email address!";
    f.email1.focus();
    return false;
  }
}
```

Javascript er hoveddelen af projekter. Jeg arbejde med Vanilla js fordi det der
hvor jeg føler mest trygt. Jeg bruger det til at, hente data fra api’ede,
validere mit kontakt form, funtionalitet for et slider, menu baren.

For ikke at gentage migselv har også vaglte a lave nogen async functioner som er
IIFE's

```javascript
async function apiLink(url) {
  data = await pageData(url);
  return data;
}
```

```javascript
(async function () {
  const data = await apiLink(
    "https://feisals-dyr-api.herokuapp.com/api/v1/abouts"
  );

  data.map((element, id) => {
    const template = document.querySelector("#about__template");
    const container = document.querySelector(".about");
    const clone = template.content.cloneNode(true);

    // clones
    clone.querySelector(".about__title").textContent = element.title;
    clone.querySelector(".about__text").textContent = element.content;
    container.appendChild(clone);
  });
})();
```

### Gulp:

Gulp er en task runner, der bruger Node.js som en platform. Gulp bruger vanilla JavaScript code og hjælper med at køre frontend tasks og store webapps. Det bygger systemautomatiske opgaver some CSS og HTML-minificering, concatenation af biblioteksfiler af Ejs-filler og SASS-filer. Disse task kan køres ved hjælp af shell- eller Bash scripts på komando linjen.

Grunden til at jeg bruger gulp er fordi, gulp er et task runner. Det bygger og
compilere alle mine HTML, CSS, JavaScript og bilede filer. Kunne også bruge
GatsbyJS, ReactJS men jeg føler ikke stærk nok.

```javascript
function html(next) {
  gulp
    .src("./src/html/templates/*.ejs")
    .pipe(
      ejs().on("error", (err) => {
        console.log(err);
      })
    )
    .pipe(
      rename(function (path) {
        if (path.basename !== "index") {
          path.dirname = path.basename;
          path.basename = "index";
        }

        path.extname = ".html";
      })
    )
    .pipe(gulp.dest("./dist/"))
    .pipe(connect.reload());

  next();
}
```

## Kanban board

[Feisal Ahmed - Kanban board](https://trello.com/b/es7X2qJ2/svendepr%C3%B8ve-kanban)
