const celsiusField = document.querySelector("#Celsius");
const degree = document.querySelector("#degree");
const convertbtn = document.querySelector("#convert-button");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});

convertbtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    convertbtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    setTimeout(() => {
        convertbtn.innerHTML = "<span>Convert</span>";
    }, 500);
});

function convertToCelsius() {
    let inputValue = degree.value;
    setTimeout(() => {
        if (tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;C`;
        } else if (tempType.value === "kelvin") {
            const kelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;C`;
        }
    }, 700);
}
