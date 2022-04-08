
window.onload = function() { //loads when the window is opened
    var c = document.getElementById("bigcanvas"); //creates a variable for the html canvas
    var ctx = c.getContext("2d"); //defines it as a 2d element

    ctx.fillStyle = "#FFFFFF"; //defines colour of object
    ctx.fillRect(675,520,100,130); //draws rectangle using the sizes and x-y coordinates provided

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(675,650,30,50); 

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(745,650,30,50); 

    ctx.fillStyle = "#000000";
    ctx.fillRect(690,520,70,100); 

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(650,400,150,120);

    ctx.fillStyle = "#000000";
    ctx.fillRect(620,400,30,80);

    ctx.fillStyle = "#000000";
    ctx.fillRect(800,400,30,80);

    ctx.beginPath();
    ctx.arc(680, 450, 25, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(672, 442, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(688, 458, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(770, 450, 25, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(762, 442, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(778, 458, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1300, 150, 75, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'yellow';
    ctx.fill();
};

document.getElementById("nose").addEventListener("click", myFunction); //creates listener for clicks on the button/nose

function myFunction() { //creates function for if the listener is activated
    var c = document.getElementById("bigcanvas");
    var ctx = c.getContext("2d");
    document.getElementById("bigcanvas").setAttribute("id", "sleep"); //changes id of the canvas

    document.getElementById("sub").innerHTML = "He sleep as heck!"; //changes content of html element

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(675,520,100,130); 

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(675,650,30,50); 

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(745,650,30,50); 

    ctx.fillStyle = "#000000";
    ctx.fillRect(690,520,70,100); 

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(650,400,150,120);

    ctx.fillStyle = "#000000";
    ctx.fillRect(620,400,30,80);

    ctx.fillStyle = "#000000";
    ctx.fillRect(800,400,30,80);

    ctx.beginPath();
    ctx.arc(680, 450, 25, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(770, 450, 25, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(650,400,150,60);

    ctx.beginPath();
    ctx.arc(680, 445, 25, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(770, 445, 25, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1300, 150, 75, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1300, 150, 75, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    
};
