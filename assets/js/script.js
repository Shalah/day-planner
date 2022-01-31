// console.log("It's working")

// Declaring variables
//var Btn9 = document.querySelector("#btn9");

// Added Continuous time to the header   

function date_time() {
    now = moment().format("dddd, MMMM Do"); 
    document.getElementById('currentDay').innerHTML = now;
    setTimeout(function () { date_time(); }, 1000);
}

date_time();

// This takes care of changing the boxes color

let currentHour = Number (moment().format('H'));

for (let i =9; i< 18; i++){
    let textAreaColor = $('#'.concat(i))
    //console.log(i)

    if (Number (textAreaColor.attr('id')) < currentHour){
        textAreaColor.toggleClass("past");
        //console.log("Checking")
    }
    else if (Number (textAreaColor.attr('id')) > currentHour){
        textAreaColor.toggleClass("future");
        //console.log("Checking")
    }
    else{
        textAreaColor.toggleClass("present");
        //console.log("Checking")
    }
   
}
// ---------- End of For loop to change box color


// Function to set the input to local storage
function setInfo9 (event){
    event.preventDefault(); // Use in case the page loads right away while user still have to add info
        let userInput = $("#9").val();
        localStorage.setItem("keytext9", userInput)
}

function setInfo10 (event){
    event.preventDefault(); // Use in case the page loads right away while user still have to add info
        let userInput = $("#10").val();
        localStorage.setItem("keytext10", userInput)
}

function setInfo11 (event){
    event.preventDefault(); // Use in case the page loads right away while user still have to add info
        let userInput = $("#11").val();
        localStorage.setItem("keytext11", userInput)
}

function setInfo12 (event){
    event.preventDefault(); // Use in case the page loads right away while user still have to add info
        let userInput = $("#12").val();
        localStorage.setItem("keytext12", userInput)
}

function setInfo13 (event){
    event.preventDefault(); // Use in case the page loads right away while user still have to add info
        let userInput = $("#13").val();
        localStorage.setItem("keytext13", userInput)
}

function setInfo14 (event){
    event.preventDefault(); // Use in case the page loads right away while user still have to add info
        let userInput = $("#14").val();
        localStorage.setItem("keytext14", userInput)
}

function setInfo15 (event){
    event.preventDefault(); // Use in case the page loads right away while user still have to add info
        let userInput = $("#15").val();
        localStorage.setItem("keytext15", userInput)
}

function setInfo16 (event){
    event.preventDefault(); // Use in case the page loads right away while user still have to add info
        let userInput = $("#16").val();
        localStorage.setItem("keytext16", userInput)
}

function setInfo17 (event){
    event.preventDefault(); // Use in case the page loads right away while user still have to add info
        let userInput = $("#17").val();
        localStorage.setItem("keytext17", userInput)
}
// (END) Function to set the input to local storage

//  this is to getitem (local Storage) Not Done yet
//$(btn9).localStorage.getItem('keytext9');

function getInfo(){    // NOT working!!!
    let userInput = $("#17").val();
    $('#17').value = userInput;
}

// (END) this is to getitem (local Storage)


// EventListener for the buttons (local Storage)
$(btn9).click (setInfo9);
$(btn10).click (setInfo10);
$(btn11).click (setInfo11);
$(btn12).click (setInfo12);
$(btn13).click (setInfo13);
$(btn14).click (setInfo14);
$(btn15).click (setInfo15);
$(btn16).click (setInfo16);
$(btn17).click (setInfo17);
// (END) EventListener for the buttons (local Storage)

















/* This loop kind of works. 
It inputs the value but said value disappear instantaneously.

function setInfo (event){
    event.preventDefault(); // Use in case the page loads right away while user still have to add info
        for (let i=9; i < 18; i++){
            let userInput = $('#'.concat(i)).val();
            localStorage.setItem("keytext", userInput)
        }
        
}
*/ 























//let store = localStorage.getItem("textarea")

// let div9 = document.getElementById("#9").val();
// // ---------- Event listener

// function saveInfo (){
//     // event.preventDefault(); // Use in case the page loads right away while user still have to add info
//     //let div9 = document.getElementById("#9").val;
//     localStorage.setItem("textarea", div9);
// }








// Different Variations (TRIES) of trying to change the BOXES COLOR

/* 

console.log(currentHour);
console.log(divTime < currentTime);
console.log(typeof currentHour)
// let time =  moment().format('LTS');  //Variable that will be compared to current time 
console.log(currentTime)

function changeColor(){
    if(time < moment().format('LTS')){
        console.log(time)
        $("textarea") == $(".past")
    }
    else if (time > moment().format('LTS')){
        $("textarea") == $(".future")
    }
    else{
        $("textarea") == $(".present")
    }
}
changeColor();

*/





/* DO NOT DELETE THIS


//This function is to call the box color

let divTime = Number("9");
let currentHour = Number (moment().format('H'));
let divNine = $("#9")
console.log(divNine)

if (Number (divNine.attr('id')) < currentHour){
    divNine.toggleClass("past");
    console.log("Checking")
}

for (let i =9; i< 18; i++){
    
}





let currentHour = Number (moment().format('H'));
let divNine = $("#i")
console.log(divNine)

if (Number (divNine.attr('id')) < currentHour){
    divNine.toggleClass("past");
    console.log("Checking")
}

for (let i =9; i< 18; i++){
    let divNine = $("#i")
    console.log(divNine)

    if (Number (divNine.attr('id')) < currentHour){
        divNine.toggleClass("past");
        console.log("Checking")
    }

}
*/