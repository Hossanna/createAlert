

// document.getElementById("createAlert").addEventListener('click', () => {
//     alert('button was clicked')
// })

var createAlert = document.getElementById("createAlert");
var container = document.getElementsByClassName("toggle");

createAlert.addEventListener("click", () => {
    container.classList.toggle("toggle");
    return createAlert;
});