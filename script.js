let currentDay = moment().format("dddd, MMMM Do YYYY")
$("#currentDay").text(currentDay)

let time9 = moment({hour: 9}).format("h")
console.log(time9)

let time10 = moment({hour: 10}).format("h")
console.log(time10)

let time11 = moment({hour: 11}).format("h")
console.log(time11)

let time12 = moment({hour: 12}).format("h")
console.log(time12)

let time13 = moment({hour: 13}).format("H")
console.log(time13)

let time14 = moment({hour: 14}).format("H")
console.log(time14)
console.log(moment().hour())

let time15 = moment({hour: 15}).format("H")
console.log(time15)

let time16 = moment({hour: 16}).format("H")
console.log(time16)

let hour1 = moment({hour: 9}).format("h:mm")
$("#time1").text(hour1)

let hour2 = moment({hour: 10}).format("h:mm")
$("#time2").text(hour2)

let hour3 = moment({hour: 11}).format("h:mm")
$("#time3").text(hour3)

let hour4 = moment({hour: 12}).format("h:mm")
$("#time4").text(hour4)

let hour5 = moment({hour: 13}).format("h:mm")
$("#time5").text(hour5)

let hour6 = moment({hour: 14}).format("h:mm")
$("#time6").text(hour6)

let hour7 = moment({hour: 15}).format("h:mm")
$("#time7").text(hour7)

let hour8 = moment({hour: 16}).format("h:mm")
$("#time8").text(hour8)


if (moment().hour() < time9) {
    console.log("Hour 9 stays the same")
    $("#hour1").removeClass("bg-info").addClass("bg-success");
    $("#hour1").removeClass("bg-danger").addClass("bg-success");
    $("#hour1").removeClass("bg-success").addClass("bg-success");
} else if (moment().hour() == time9) {
    $("#hour1").removeClass("bg-success").addClass("bg-info");
} else {
    $("#hour1").removeClass("bg-success").addClass("bg-danger");
}

if (moment().hour() < time10) {
    console.log("Hour 10 stays the same")
    $("#hour2").removeClass("bg-info").addClass("bg-success");
    $("#hour2").removeClass("bg-danger").addClass("bg-success");
    $("#hour2").removeClass("bg-success").addClass("bg-success");
} else if (moment().hour() == time10) {
    $("#hour2").removeClass("bg-success").addClass("bg-info");
} else {
    $("#hour2").removeClass("bg-success").addClass("bg-danger");
}

if (moment().hour() < time11) {
    console.log("Hour 11 stays the same")
    $("#hour3").removeClass("bg-info").addClass("bg-success");
    $("#hour3").removeClass("bg-danger").addClass("bg-success");
    $("#hour3").removeClass("bg-success").addClass("bg-success");
} else if (moment().hour() == time11) {
    $("#hour3").removeClass("bg-success").addClass("bg-info");
} else {
    $("#hour3").removeClass("bg-success").addClass("bg-danger");
}

if (moment().hour() < time12) {
    console.log("Hour 12 stays the same")
    $("#hour4").removeClass("bg-info").addClass("bg-success");
    $("#hour4").removeClass("bg-danger").addClass("bg-success");
    $("#hour4").removeClass("bg-success").addClass("bg-success");
} else if (moment().hour() == time12) {
    $("#hour4").removeClass("bg-success").addClass("bg-info");
} else {
    $("#hour4").removeClass("bg-success").addClass("bg-danger");
}

if (moment().hour() < time13) {
    console.log("Hour 13 stays the same")
    $("#hour5").removeClass("bg-info").addClass("bg-success");
    $("#hour5").removeClass("bg-danger").addClass("bg-success");
    $("#hour5").removeClass("bg-success").addClass("bg-success");
} else if (moment().hour() == time13) {
    $("#hour5").removeClass("bg-success").addClass("bg-info");
} else {
    $("#hour5").removeClass("bg-success").addClass("bg-danger");
}

if (moment().hour() < time14) {
    console.log("Hour 14 stays the same")
    $("#hour6").removeClass("bg-info").addClass("bg-success");
    $("#hour6").removeClass("bg-danger").addClass("bg-success");
    $("#hour6").removeClass("bg-success").addClass("bg-success");
} else if (moment().hour() == time14) {
    $("#hour6").removeClass("bg-success").addClass("bg-info")
    console.log("Its current")
} else {
    $("#hour6").removeClass("bg-success").addClass("bg-danger");
    console.log("its past")
}

if (moment().hour() < time15) {
    console.log("Hour 15 stays the same")
    $("#hour7").removeClass("bg-info").addClass("bg-success");
    $("#hour7").removeClass("bg-danger").addClass("bg-success");
    $("#hour7").removeClass("bg-success").addClass("bg-success");
} else if (moment().hour() == time15) {
    $("#hour7").removeClass("bg-danger").addClass("bg-info")
    console.log("Its working")
} else {
    $("#hour7").removeClass("bg-success").addClass("bg-danger");
}

if (moment().hour() < time16) {
    console.log("Hour 16 stays the same")
    $("#hour8").removeClass("bg-info").addClass("bg-success");
    $("#hour8").removeClass("bg-danger").addClass("bg-success");
    $("#hour8").removeClass("bg-success").addClass("bg-success");
} else if (moment().hour() == time16) {
    $("#hour8").removeClass("bg-danger").addClass("bg-info")
    console.log("Its working")
} else {
    $("#hour8").removeClass("bg-success").addClass("bg-danger");
}

// if (moment().hour() < hour13) {
//     console.log("Hour 12 stays the same")
//     $("#hour5").removeClass("bg-info").addClass("bg-success");
//     $("#hour5").removeClass("bg-danger").addClass("bg-success");
//     $("#hour5").removeClass("bg-success").addClass("bg-success");
// } else if (moment().hour() == hour13) {
//     $("#hour5").removeClass("bg-success").addClass("bg-info");
// } else {
//     $("#hour5").removeClass("bg-success").addClass("bg-danger");
// }

// if (moment() < moment({hour: 12})) {
//     console.log("Color stays the same")
// } else {
//     $("#hour4").removeClass("bg-success").addClass("bg-danger");
// }

// if (moment() < moment({hour: 13})) {
//     console.log("Color stays the same")
// } else {
//     $("#hour5").removeClass("bg-success").addClass("bg-danger");
// }

// if (moment() < moment({hour: 14})) {
//     console.log("Color stays the same")
// } else {
//     $("#hour6").removeClass("bg-success").addClass("bg-danger");
// }

// if (moment() < moment({hour: 15})) {
//     console.log("Color stays the same")
// } else {
//     $("#hour7").removeClass("bg-success").addClass("bg-danger");
// }

// if (moment() < moment({hour: 16})) {
//     console.log("Color stays the same")
// } else {
//     $("#hour8").removeClass("bg-success").addClass("bg-danger");
// }

let button1 = $("#button1")
let button2 = $("#button2")
let button3 = $("#button3")
let button4 = $("#button4")
let button5 = $("#button5")
let button6 = $("#button6")
let button7 = $("#button7")
let button8 = $("#button8")

let handleButton1 = function() {
    var value1 = $('#hour1').val();
    localStorage.setItem("event1", value1)

    console.log(localStorage.getItem("event1"))
}

let handleButton2 = function() {
    var value2 = $('#hour2').val();
    localStorage.setItem("event2", value2)

    console.log(localStorage.getItem("event2"))
}

let handleButton3 = function() {
    var value3 = $('#hour3').val();
    localStorage.setItem("event3", value3)

    console.log(localStorage.getItem("event3"))
}

let handleButton4 = function() {
    var value4 = $('#hour4').val();
    localStorage.setItem("event4", value4)

    console.log(localStorage.getItem("event4"))
}

let handleButton5 = function() {
    var value5 = $('#hour5').val();
    localStorage.setItem("event5", value5)

    console.log(localStorage.getItem("event5"))
}

let handleButton6 = function() {
    var value6 = $('#hour6').val();
    localStorage.setItem("event6", value6)

    console.log(localStorage.getItem("event6"))
}

let handleButton7 = function() {
    var value7 = $('#hour7').val();
    localStorage.setItem("event7", value7)

    console.log(localStorage.getItem("event7"))
}

let handleButton8 = function() {
    var value8 = $('#hour8').val();
    localStorage.setItem("event8", value8)

    console.log(localStorage.getItem("event8"))
}

button1.on('click', handleButton1);
button2.on('click', handleButton2);
button3.on('click', handleButton3);
button4.on('click', handleButton4);
button5.on('click', handleButton5);
button6.on('click', handleButton6);
button7.on('click', handleButton7);
button8.on('click', handleButton8);

$(window).on('load', function(){
    // your logic here`enter code here`
    console.log("reloaded")
    
    $("#hour1").attr("placeholder", localStorage.getItem("event1"));
    $("#hour2").attr("placeholder", localStorage.getItem("event2"));
    $("#hour3").attr("placeholder", localStorage.getItem("event3"));
    $("#hour4").attr("placeholder", localStorage.getItem("event4"));
    $("#hour5").attr("placeholder", localStorage.getItem("event5"));
    $("#hour6").attr("placeholder", localStorage.getItem("event6"));
    $("#hour7").attr("placeholder", localStorage.getItem("event7"));
    $("#hour8").attr("placeholder", localStorage.getItem("event8"));
});

// // if (moment() < moment({hour: 10})) {
// //     console.log("Color stays the same")
// // } else {
// //     $("#hour2").removeClass("bg-success").addClass("bg-danger");
// }