let API_KEY = localStorage.getItem('API');
function createDiv() {
    let swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    return swiperSlide;
}
function fetchData() {
    return new Promise(resolve => {
        fetch(API_KEY)
            .then(d => d.json())
            .then(d => resolve(d))
    });
}
async function initCall() {
    data = await fetchData();
    console.log(data.items);
    if (data.items.length !== 0) {
        for (let i = 0; i < data.items.length; i++) {
            let skeleton = document.querySelectorAll('.skeleton-wrapper')[0].firstElementChild;
            let node = skeleton.cloneNode(true);
            let username = node.querySelectorAll('.img h4')[0];
            username.textContent = data.items[i].login;
            let repos_url = node.querySelectorAll('.img img')[0];
            repos_url.src = data.items[i].avatar_url;
            let avatar = node.querySelectorAll('.details .repo a')[0];
            avatar.href = data.items[i].html_url;
            let subscriptions = node.querySelectorAll('.details .subscriptions a')[0];
            subscriptions.href = data.items[i].subscriptions_url;
            let events = node.querySelectorAll('.details .events a')[0];
            events.href = data.items[i].events_url;
            let organizations = node.querySelectorAll('.details .Organisation a')[0];
            organizations.href = data.items[i].organizations_url;
            let div = createDiv(); div.appendChild(node);
            document.querySelectorAll('.swiper-wrapper')[0].appendChild(div);
        }

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        });
    }else{
        document.querySelectorAll('.swiper-container')[0].style.display='none';
        document.querySelectorAll('h2')[0].style.display='block';
    }
}

initCall();