function AppHotel() {
    console.log('teste');
}
AppHotel();

async function fetchHotel(url) {
    const hotelResponse = await fetch(url);
    const hotelJSON = await hotelResponse.json();
    const divBlog = document.querySelector('.blog');

    //console.log(hotelJSON);
    hotelJSON.forEach(hotel => {
        const divHotel = createHotel(hotel);
        //console.log(divHotel);

        divBlog.appendChild(divHotel);
    });
}

function createHotel(hotel) {
    //console.log(hotel);
    const div = document.createElement('div');
    div.classList.add('blog-post');
    div.innerHTML = `
    <a href="#">
        <div class="blog-img">
        <img src="${hotel.photo}" alt="">
        </div>
        <div class="blog-contet-post">
            <div class="blog-cat">
                <p>${hotel.property_type}</p>
            </div>
            <div class="blog-title">
                <h3>${hotel.name}</h3>
            </div>
            <div class="blog-text">
                <p>R$ ${hotel.price},00</p>
            </div>
        </div>
    </a>
    `;
    return div;
}

fetchHotel('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');