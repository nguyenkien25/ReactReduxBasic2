const URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=8eaf13ae8540a3c9aea8ec046990a0af&q=';

function getTemp(cityName){
    return fetch(URL + cityName)
    .then(respone => respone.json())
    .then(responeJson => responeJson.list[0].main.temp);
}

export default getTemp;