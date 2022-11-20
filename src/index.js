const formRef = document.querySelector(`#search-form`);
const divRef = document.querySelector(`.wrapper`);
const btn = document.querySelector(`button`)
formRef.addEventListener(`submit`, onSubmit);

function onSubmit(e) {
e.preventDefault(); 
const value = formRef.elements.searchQuery.value;
getData(value)

formRef.reset();
}


function getData(data, value) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=f1462fa9372c813fa8285011e884b6ef&units=metric&lang=ua`)
    .then(responce => responce.json())
    .then(data => addMarkup(data))
}


function addMarkup(data) {
    const temperature = Math.round(data.main.temp);
    const feels_like = Math.round(data.main.feels_like) 
    const template =  `<div class="weather__header">
    <div class="weather__main">
        <div class="weather__city">${data.name}</div>
        <div class="weather__icon"><img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png' alt='' width='150' height='150'></div>
        
    </div>
    <div class="weather__status"><div >Weather status:<span class="span">${data.weather[0].main}</span></div>
    <div class="weather__temp">Тemperature: <span class="span">${temperature} С°</span></div>
    <div class="weather__feels-likes">Fells likes: <span class="span">${feels_like} С°</span></div></div>
    </div>`
    divRef.insertAdjacentHTML(`beforeend`, template);
}