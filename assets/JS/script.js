//display time
let day = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(day);

//save
$(".saveBtn").click(function () {
    var input = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, input)
})

function timer() {
    //get current time
    var now = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));
        //add color to correct time
        if (blockTime < now  ) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === now ) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

//for loop to display save
let loadItems = function() {
    for(let i = 8; i < 18; i++) {
        $( "#"+i + " .description").val(localStorage.getItem(i));
    }
}

timer();
loadItems();