
//background color

$(function () {

    //spara color variables i form
    $('form').submit(function (event) {
        event.preventDefault();

        // assign variables
        var color1 = $('.color1').val();

        // change background colors
        $('body').css('background-color', color1);

    });

});

//Prompt button

$(document).ready(function () {
    prompt('Please enter your name');
    alert("Hello Dude! \n Nothing is impossible and you are welcome to do nothing here.");
});

//Hide and show button

$(document).ready(function () {
    $("#hideShow").click(function () {
        $("p").toggle();
    });
});

//ta bort mig knapp

$(document).ready(function () {
    $("#del").click(function () {
        $(".ta-bort-mig").fadeOut();
    });
});
