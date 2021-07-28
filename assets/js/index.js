// var container = document.getElementsByClassName("container");

// document.getElementById("createAlert").addEventListener('click', () => {
//     container.toggleClass("toggle");
// });

$("#createAlert").click(function(){
    $("#createAlert").fadeOut();
    $(".container").toggleClass("toggle")
});