'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Global variable
let mapEvent, map;

// navigator.geolocation is a google chrome api which gives you the coordinate of your current location.
if(navigator.geolocation){

    // This is the object which gives the coordinates  this method take two callbaks first is successCallback if the function succeeds then that executes and errorCallback if the error comes then the error one executres (error occurs if you dont want to share your location)
    navigator.geolocation.getCurrentPosition(
        function(position){
        // console.log(position);
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        const cords = [latitude, longitude]
        // console.log(latitude, longitude);
        // console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu`);

        //*Using the leafletjs package
        // L is reffers as the layer as the map is in the layer foramt please open the documentation and read 
        //map
         map = L.map('map').setView(cords, 14); //declaring it global as it is going to use in the submit button

        //theme of the map
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        //marker
        // const marker = L.marker(cords).addTo(map);


        //Event handler on map variable
        map.on('click', function(mapE){

            form.classList.remove('hidden');
            inputDistance.focus();
            mapEvent = mapE; //for using this on submit button
            
        });
    }, function(){
        console.log(`Error : Can not find your location `);
    })

}


form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(mapEvent);

    //setting value null
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

    const {lat, lng} = mapEvent.latlng;
    L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
       maxWindth:  250,
       minWidth: 100,
       autoClose: false,
       closeOnClick: false,
       className: 'running-popup',
    }))
    .setPopupContent('Activity')
    .openPopup();
});


inputType.addEventListener('change', function(){
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
})