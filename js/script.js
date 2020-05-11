function AppHotel() {
    console.log('teste');
}
AppHotel();

async function fetchHotel(url) {
    const hotelResponse = await fetch(url);
    const hotelJSON = await hotelResponse.json();

    //console.log(hotelJSON);
    hotelJSON.forEach(hotel => {
        createHotel(hotel);
    });
}

function createHotel(hotel) {
    console.log(hotel);
}

fetchHotel('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');