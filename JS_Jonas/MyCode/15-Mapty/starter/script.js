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
        //map
        const map = L.map('map').setView(cords, 13);
        //theme
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        //marker
        // const marker = L.marker(cords).addTo(map);


        //Event handler on map variable
        map.on('click', function(mapEvent){

            console.log(mapEvent);
            const {lat, lng} = mapEvent.latlng;
            // const marker = L.marker([lat, lng]).addTo(map).bindPopup('Hello world!').openPopup();
            const marker = L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
               maxWindth:  250,
               minWidth: 100,
               autoClose: false,
               closeOnClick: false,
               className: 'running-popup',
            }))
            .setPopupContent('Workout')
            .openPopup();

        });
    }, function(){
        console.log(`Error : Can not find your location `);
    })

}
