var btns; // to hold buttons

// Executes on page load
window.onload = function() {
    btns = document.getElementsByName("btn"); // get ttt buttons
    addlstn(btns);
};

// Adds listeners to all objects in box
function addlstn(box) {
    for (var i = 0; i < box.length; i++) { // add listeners
	box[i].addEventListener("click", drawx, false);
    }
};

// Removes listeners from all play buttons
function remlstn(box) {
    for (var i = 0; i < box.length; i++) { // remove listeners
	box[i].removeEventListener("click", drawx, false);
    }
};

// Draws an X on clicked button, then performs computer's move
function drawx() { // user's move
    // draw x
    var bt = document.getElementById(this.id); // get clicked button
    if (bt.innerHTML == "") {
	bt.innerHTML = "X";
	remlstn(btns); // remove listeners temporarily
	setTimeout(drawo, 500); // computer's move
    }
};

// Draws an O, wherever computer plays
function drawo() { // computer's move
    document.getElementById("C3").innerHTML = "O";
    addlstn(btns); // add listeners back to user can play
};

function crr() {
    var clr = document.getElementById("clr");
    for (var i = 0; i < btns.length; i++) {
	btns[i].innerHTML = "";
    }
};
