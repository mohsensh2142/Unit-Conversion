let btn = document.querySelector(".convert-btn");
let enteredUnitEl = document.querySelectorAll(".entered-unit");




btn.addEventListener("click", function(){

    let inputVal = parseFloat(document.getElementById("input").value);

    // loops through span elements and adds the value of user's input inside each of them
    
    for (let i = 0; i < enteredUnitEl.length; i++){
        enteredUnitEl[i].textContent = inputVal;
    }

    // Meter to Feet

    let convertedMeterToFeet = inputVal * 3.281;
    let meterToFeetEl = document.querySelector(".meter-to-feet");
    meterToFeetEl.textContent = convertedMeterToFeet.toFixed(2);

    // Feet to Meter

    let convertFeetToMeter = inputVal * 0.3048;
    let feetToMeterEl = document.querySelector(".feet-to-meter");
    feetToMeterEl.textContent = convertFeetToMeter.toFixed(2);

    // Liter to Gallon

    let ConvertLiterToGallon = inputVal * 0.264;
    let literToGallonEl = document.querySelector(".liter-to-gallon");
    literToGallonEl.textContent = ConvertLiterToGallon.toFixed(2);

    // Gallon to Liter

    let convertGallonToLiter = inputVal * 4.5460;
    let gallonToLiterEl = document.querySelector(".gallon-to-liter");
    gallonToLiterEl.textContent = convertGallonToLiter.toFixed(2);

    // Kilo to Pound

    let convertKiloToPound = inputVal * 2.204;
    let kiloToPound = document.querySelector(".kilo-to-pound");
    kiloToPound.textContent = convertKiloToPound.toFixed(2);

    // Pound to Kilo

    let convertPoundToKilo = inputVal * 0.4535;
     let poundToKilo = document.querySelector(".pound-to-kilo");
     poundToKilo.textContent = convertPoundToKilo.toFixed(2);
})

