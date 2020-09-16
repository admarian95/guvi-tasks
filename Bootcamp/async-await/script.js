// var apiData;

// async function getData() {
//     var apiInfo = await fetch("https://api.github.com/users/admarian95");
//      apiData = await apiInfo.json();
//      console.log(apiData);
//    document.getElementById('img').setAttribute('src',apiData.avatar_url);
//    document.querySelector('.card-title span').innerText = apiData.login;
//    document.querySelector('.btn').setAttribute('href',apiData.html_url);
//   }

//   getData();

  //await is fulfilling .then()

let data = JSON.parse(data);
console.log(data);