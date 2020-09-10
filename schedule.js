

$(document).ready(function(){
//display the current date
$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));


function displayColorCode() {
    //get the current hour.
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("time")[1]);
        console.log( blockHour, currentHour)

        //check if the time is past 
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        //check if the time is equal to current time
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present")
            $(this).addClass("future");
            
        }
    })
}
//save the text entered
$(".saveBtn").click(function(){
    var hourInput = $(this).siblings(".description").val();
    var inputId= $(this).siblings(".description").attr("id");
    localStorage.setItem(inputId,hourInput);
});
//function to display the text value which is stored localy 
function setInputs(){
    $(".description").each(function(){
        var inputId = $(this).attr("id");
        $(this).val(localStorage.getItem(inputId));
    });
};
//call functions
displayColorCode();
setInputs();
})