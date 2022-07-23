//GLOBAL VARIABLES

var displayDate = document.getElementById("displayTodaysDate");

var a9 = document.getElementById("textArea9");
var a10 = document.getElementById("textArea10");
var a11 = document.getElementById("textArea11");
var a12 = document.getElementById("textArea12");
var a13 = document.getElementById("textArea13");
var a14 = document.getElementById("textArea14");
var a15 = document.getElementById("textArea15");
var a16 = document.getElementById("textArea16");
var a17 = document.getElementById("textArea17");


                    //Variables for save button <textarea> information
var saveButton9 = document.getElementById("saveButton9");
var saveButton10 = document.getElementById("saveButton10");
var saveButton11 = document.getElementById("saveButton11");
var saveButton12 = document.getElementById("saveButton12");
var saveButton13 = document.getElementById("saveButton13");
var saveButton14 = document.getElementById("saveButton14");
var saveButton15 = document.getElementById("saveButton15");
var saveButton16 = document.getElementById("saveButton16");
var saveButton17 = document.getElementById("saveButton17");

                    //variables for MomentJS time
// var now = moment().format("MMMM Do, YYYY hh:mm");
var now = moment();
displayDate.textContent = now;

                //If statements for time color changing of <textarea>

if(moment().hour()+1 === 9){             //if it is the current time
    a9.classList.add("text-bg-danger");
}else if(moment().hour()>9){           //if it is a time that passed
    a9.classList.add("text-bg-secondary");
}else{
    a9.classList.add("text-bg-success"); //if the time has not occurred yet

};

if(moment().hour()+1 === 10){             //if it is the current time
    a10.classList.add("text-bg-danger");
}else if(moment().hour()>10){           //if it is a time that passed
    a10.classList.add("text-bg-secondary");
}else{
    a10.classList.add("text-bg-success"); //if the time has not occurred yet

};

if(moment().hour()+1 === 11){             //if it is the current time
    a11.classList.add("text-bg-danger");
}else if(moment().hour()>11){           //if it is a time that passed
    a11.classList.add("text-bg-secondary");
}else{
    a11.classList.add("text-bg-success"); //if the time has not occurred yet

};

if(moment().hour()+1 === 12){             //if it is the current time
    a12.classList.add("text-bg-danger");
}else if(moment().hour()>12){           //if it is a time that passed
    a12.classList.add("text-bg-secondary");
}else{
    a12.classList.add("text-bg-success"); //if the time has not occurred yet

};

if(moment().hour()+1 === 13){             //if it is the current time
    a13.classList.add("text-bg-danger");
}else if(moment().hour()>13){           //if it is a time that passed
    a13.classList.add("text-bg-secondary");
}else{
    a13.classList.add("text-bg-success"); //if the time has not occurred yet

};

if(moment().hour()+1 === 14){             //if it is the current time
    a14.classList.add("text-bg-danger");
}else if(moment().hour()>14){           //if it is a time that passed
    a14.classList.add("text-bg-secondary");
}else{
    a14.classList.add("text-bg-success"); //if the time has not occurred yet

};

if(moment().hour()+1 === 15){             //if it is the current time
    a15.classList.add("text-bg-danger");
}else if(moment().hour()>15){           //if it is a time that passed
    a15.classList.add("text-bg-secondary");
}else{
    a15.classList.add("text-bg-success"); //if the time has not occurred yet

};

if(moment().hour()+1 === 16){             //if it is the current time
    a16.classList.add("text-bg-danger");
}else if(moment().hour()>16){           //if it is a time that passed
    a16.classList.add("text-bg-secondary");
}else{
    a16.classList.add("text-bg-success"); //if the time has not occurred yet

};

if(moment().hour()+1 === 17){             //if it is the current time
    a17.classList.add("text-bg-danger");
}else if(moment().hour()>17){           //if it is a time that passed
    a17.classList.add("text-bg-secondary");
}else{
    a17.classList.add("text-bg-success"); //if the time has not occurred yet

};



                    //If statement for previously written information in the <textarea>

if(localStorage.textArea9){
    a9.value = localStorage.textArea9;
//  console.log(localStorage.textArea9);

}

if(localStorage.textArea10){
    a10.value = localStorage.textArea10;
//  console.log(localStorage.textArea10);

}

if(localStorage.textArea11){
    a11.value = localStorage.textArea11;
//  console.log(localStorage.textArea11);

}
if(localStorage.textArea12){
    a12.value = localStorage.textArea12;
//  console.log(localStorage.textArea12);

}

if(localStorage.textArea13){
    a13.value = localStorage.textArea13;
//  console.log(localStorage.textArea13);

}

if(localStorage.textArea14){
    a14.value = localStorage.textArea14;
//  console.log(localStorage.textArea14);

}

if(localStorage.textArea15){
    a15.value = localStorage.textArea15;
//  console.log(localStorage.textArea15);

}

if(localStorage.textArea16){
    a16.value = localStorage.textArea16;
//  console.log(localStorage.textArea16);

}

if(localStorage.textArea17){
    a17.value = localStorage.textArea17;
//  console.log(localStorage.textArea17);

}


                    //EVENT LISTENERS
saveButton9.addEventListener("click", function (event){
    console.log("saveBtn is runnung! 9AM was clicked");
    event.preventDefault();
    var textArea9 = document.getElementById("textArea9").value;
    if(event.target.value == moment().hour()){
    }
    localStorage.setItem("textArea9", textArea9);//setItem(storageName, value)
    alert("the information was saved");
    console.log("textArea9 information saved: " + textArea9);
    
});
saveButton10.addEventListener("click", function(event){
    console.log("saveBtn is running! 10AM was clicked");
    event.preventDefault();
    var textArea10 = document.getElementById("textArea10").value;
    localStorage.setItem("textArea10", textArea10)
    alert("the information was saved");
    console.log("textArea10 information saved: " + textArea10);

});
saveButton11.addEventListener("click", function(event){
    console.log("saveBtn is running! 11AM was clicked");
    event.preventDefault();
    var textArea11 = document.getElementById("textArea11").value;
    localStorage.setItem("textArea11", textArea11)
    alert("the information was saved");
    console.log("textArea11 information saved: " + textArea11);
});
saveButton12.addEventListener("click", function(event){
    console.log("saveBtn is running! 12PM was clicked");
    event.preventDefault();
    var textArea12 = document.getElementById("textArea12").value;
    localStorage.setItem("textArea12", textArea12)
    alert("the information was saved");
    console.log("textArea12 information saved: " + textArea12);
});
saveButton13.addEventListener("click", function(event){
    console.log("saveBtn is running! 1PM was clicked");
    event.preventDefault();
    var textArea13 = document.getElementById("textArea13").value;
    localStorage.setItem("textArea13", textArea13)
    alert("the information was saved");
    console.log("textArea13 information saved: " + textArea13);
});
saveButton14.addEventListener("click", function(event){
    console.log("saveBtn is running! 2PM was clicked");
    event.preventDefault();
    var textArea14 = document.getElementById("textArea14").value;
    localStorage.setItem("textArea14", textArea14)
    alert("the information was saved");
    console.log("textArea14 information saved: " + textArea14);
});
saveButton15.addEventListener("click", function(event){
    console.log("saveBtn is running! 3PM was clicked");
    event.preventDefault();
    var textArea15 = document.getElementById("textArea15").value;
    localStorage.setItem("textArea15", textArea15)
    alert("the information was saved");
    console.log("textArea15 information saved: " + textArea15);
});
saveButton16.addEventListener("click", function(event){
    console.log("saveBtn is running! 4PM was clicked");
    event.preventDefault();
    var textArea16 = document.getElementById("textArea16").value;
    localStorage.setItem("textArea16", textArea16)
    alert("the information was saved");
    console.log("textArea16 information saved: " + textArea16);
});
saveButton17.addEventListener("click", function(event){
    console.log("saveBtn is running! 5PM was clicked");
    event.preventDefault();
    var textArea17 = document.getElementById("textArea17").value;
    localStorage.setItem("textArea17", textArea17)
    alert("the information was saved");
    console.log("textArea17 information saved: " + textArea17);
});





//OPTIMIZED CODE -- WILL BE IMPLEMENTED IN NEXT JS UPDATE

// var timeBlocks = document.querySelectorAll("container");
// var buttons = document.querySelectorAll("button");
// var startingHour = buttons[0].value;

// for(var i = 0; i<timeBlocks.length; i++){
//     var textArea = document.getElementById(`textArea${i+startingHour}`);//these `` just make it so you don't have to break up the code like this: "" + i
//     textArea.value = localStorage.getItem(`textArea${i}`);
    
//     if(moment().hour()+1 === i+9){             //if it is the current time
//         textArea.classList.add("text-bg-danger");
//     }else if(moment().hour()>9){           //if it is a time that passed
//         textArea.classList.add("text-bg-secondary");
//     }else{
//         textArea.classList.add("text-bg-success"); //if the time has not occurred yet
//     };

// }