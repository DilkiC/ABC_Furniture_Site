/*
 *
 *  * ................................................................
 *  *  Copyright (c) GDSE-55.year. All rights received.
 *  *  License under Sri Lankan informations.
 *  * .......................................................................
 *  *
 *
 */

/**
 * @author Dilki Cooray <dilkicooray97@gmail.com>
 * since 10/7/2021
 */

var home=document.getElementById("homeContent");
var about=document.getElementById("aboutContent");
var contact=document.getElementById("contactContent");

home.style.display="block";
about.style.display="none";
contact.style.display="none";


var homeBtn=document.getElementById("homeBtn");
homeBtn.addEventListener('click',function () {
    home.style.display="block";
    about.style.display="none";
    contact.style.display="none";
});

var aboutBtn=document.getElementById("aboutBtn");
aboutBtn.addEventListener('click',function () {
    home.style.display="none";
    about.style.display="block";
    contact.style.display="none";
});
var contactBtn=document.getElementById("contactBtn");
contactBtn.addEventListener('click',function () {
    home.style.display="none";
    about.style.display="none";
    contact.style.display="block";
});


