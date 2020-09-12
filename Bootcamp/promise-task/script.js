function wrap(wrapParent, wrapChildren) {
    wrapChildren.forEach(a => {
        wrapParent.append(a);
    });
    return wrapParent;
}
function createDiv(className, text = '') {
    let h = document.createElement('div');
    if (className !== '') {
        className.forEach(el => h.classList.add(el));
    }
    h.innerText = text;
    return h;
}
function createImg(classes) {
    let im = document.createElement('img');
    classes.forEach(el => im.classList.add(el));
    return im;
}
function createPara(classes, text = '') {
    let p = document.createElement('p');
    classes.forEach(el => p.classList.add(el));
    p.innerText = text;
    return p;
}
function createButton(classes, text) {
    let btn = document.createElement('btn');
    classes.forEach(el => btn.classList.add(el));
    btn.innerText = text;
    return btn;
}
function createSpan() {
    let span = document.createElement('span');
    return span;
}
function createCard(id) {
    let card = createDiv(['card', 'col-lg-3', 'col-sm-12']);
    card.setAttribute("id", id);
    let cardHeading = createDiv(['card-heading']);
    let countryNamePara = createPara(['card-heading'], 'Country Name');
    cardHeading.appendChild(countryNamePara);
    let image = createImg(['card-img-top']);
    card = wrap(card, [cardHeading, image]);
    let cardBody = createDiv(['card-body']);
    let capital = createPara(['card-text', 'capital'], 'Capital:');
    let region = createPara(['card-text', 'region'], 'Region:');
    let code = createPara(['card-text', 'code'], 'Country Code:');
    capital.appendChild(createSpan());
    region.appendChild(createSpan());
    code.appendChild(createSpan());
    let weatherBtn = createPara(['a']);
    weatherBtn.appendChild(createButton(['btn', 'btn-primary'], "Click for Weather"));
    cardBody = wrap(cardBody, [capital, region, code, weatherBtn]);

    let weatherDiv = createDiv(['weather']);
    let weatherDesc = createPara(['card-text', 'weather-desc'], 'Weather');
    weatherDesc.appendChild(createSpan());
    let weathertemp = createPara(['card-text', 'temperature'], 'Temperature');
    weathertemp.appendChild(createSpan());
    weatherDiv = wrap(weatherDiv, [weatherDesc, weathertemp]);
    cardBody = wrap(cardBody, [weatherDiv]);
    cardBody.appendChild(createDiv(['error'], 'Sorry Cannot fetch weather right now!'));
    card.appendChild(cardBody);
    return card;
}
let row = createDiv(['row']);
let container = createDiv(['container']);
document.body.appendChild(container);
console.log(document.body);
fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);
            row.appendChild(createCard(i+1));
            container.appendChild(row);
            let a = document.getElementsByClassName('btn');
            a[i].addEventListener("click",e=>_btnClick(e));
            let el = document.getElementById(i + 1);
            let heading = el.querySelector('.card-heading p');
            let capital = el.querySelector('.card-body .capital span');
            let region = el.querySelector('.card-body .region span');
            let code = el.querySelector('.card-body .code span');
            let flag = el.querySelector('.card-img-top')
            heading.innerText = data[i].name;
            flag.setAttribute('src', data[i].flag)
            capital.innerText = data[i].capital;
            region.innerText = data[i].region;
            code.innerText = data[i].alpha3Code;
        }
    })

    function _btnClick(e){
    let country = (e.path[3].querySelector('.card-heading p').innerText);
    let a = fetch('https://api.openweathermap.org/data/2.5/weather?q=' + country + '&appId=cc5280d8ff487e8ed1d1c93a06658a46')
        .then(data => data.json(), err => err)
        .then(d => {
            if (d.cod === '404') {
                e.path[3].querySelector('.error').classList.add('show');
            } else {
                let div = e.path[3].querySelector('div.weather');
                div.classList.add('show');
                let weather = div.querySelector('p.weather-desc');
                let temp = div.querySelector('p.temperature');
                weather.innerText = d.weather[0].main + '    ' + d.weather[0].description;
                temp.innerText = d.main.temp + '  kelvin';
            }
        });
    }