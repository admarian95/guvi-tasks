fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())
    .then(d => d.splice(0, 3))
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);
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

let a = document.getElementsByClassName('btn');
console.log([...a]);
[...a].forEach(el => el.addEventListener('click', (e) => {
    let country = (e.path[3].querySelector('.card-heading p').innerText);
    fetch('https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q='+country+'&appId=439d4b804bc8187953eb36d2a8c26a02')
    .then(data=>console.log(data.json()));
}));

////ask pugazh after this keeps throwing 401