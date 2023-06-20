var save = $(".saveBtn");
var timeBlock = $(".time-block");

$(function () {
    var now = dayjs().format("dddd MM.DD.YYYY");
    $("#currentDay").text(now);
    //add classes for color coding
    timeBlock.each(function () {
        var currentHour = dayjs().hour();
        var blockValue = $(this).attr("id");
        if (blockValue < currentHour) {
            $(this).children(".description").addClass("past");
            // $(this).children(".description").attr("class", "col-8 col-md-10 description past");
            console.log($(this).attr("class"));
        } else if (blockValue > currentHour) {
            $(this).children(".description").addClass("future");
            // $(this).children(".description").attr("class", "col-8 col-md-10 description future");
        } else {
            $(this).children(".description").addClass("present");
            // $(this).children(".description").attr("class", "col-8 col-md-10 description present");
        }
    });
    //button event
    save.on("click", function (event) {
        event.preventDefault()
        var description = $(this).siblings(".description").val().replace(key);
        var key = $(this).parent().attr("id");
        localStorage.setItem(key, JSON.stringify(description))
    });
    //print to screen on reload
    for(let i = 9; i <= 17; i++) {
        $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)));
    };
});

