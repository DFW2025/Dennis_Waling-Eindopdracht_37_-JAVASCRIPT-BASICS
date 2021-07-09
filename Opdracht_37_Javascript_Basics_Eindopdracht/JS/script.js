// Javascript


// SELECTORS

const background = document.querySelector("body");

// Menu Selectors

const menu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navbar");

// Nav Items Selectors

const pink = document.querySelector(".nav-pink");
const red = document.querySelector(".nav-red");
const orange = document.querySelector(".nav-orange");
const yellow = document.querySelector(".nav-yellow");
const green = document.querySelector(".nav-green");
const turquoise = document.querySelector(".nav-turquoise");
const violet = document.querySelector(".nav-violet");
const random = document.querySelector(".nav-random");
const reset = document.querySelector(".nav-reset");

// Nav Radio Selectors

const pinkRadio = document.querySelector(".rad-pink");
const redRadio = document.querySelector(".rad-red");
const orangeRadio = document.querySelector(".rad-orange");
const yellowRadio = document.querySelector(".rad-yellow");
const greenRadio = document.querySelector(".rad-green");
const turquoiseRadio = document.querySelector(".rad-turguoise");
const violetRadio = document.querySelector(".rad-violet");
const randomRadio = document.querySelector(".rad-random");
const resetRadio = document.querySelector(".rad-reset");

// Text Box Selectors

const textBox = document.querySelector(".text-box");
const textBoxP = document.querySelector(".text-box p");
const close = document.querySelectorAll(".close");


// FUNCTIONS

// Clear Functions

const removeStyle = () => {
    document.body.removeAttribute("style");

};

const clear = () => {
    document.body.removeAttribute("style");
    background.classList.remove("bg-violet");
    background.classList.remove("bg-pink");
    background.classList.remove("bg-red");
    background.classList.remove("bg-orange");
    background.classList.remove("bg-yellow");
    background.classList.remove("bg-green");
    background.classList.remove("bg-turquoise");
    background.classList.remove("bg-random");
    textBox.style.opacity = "0.8";
    textBox.classList.add("txt-reset");
    textBox.classList.remove("txt-violet");
    textBox.classList.remove("txt-pink");
    textBox.classList.remove("txt-red");
    textBox.classList.remove("txt-orange");
    textBox.classList.remove("txt-yellow");
    textBox.classList.remove("txt-green");
    textBox.classList.remove("txt-turquoise");
    textBoxP.innerHTML = "BACKGROUND COLOR HAS BEEN RESET..";

};

// Menu Functions

const menuOn = () => {
    navBar.classList.add("menu-on");
    navBar.classList.remove("menu-off");
};

const menuOff = () => {
    navBar.classList.remove("menu-on");
    navBar.classList.add("menu-off");
};

// Background Color Functions

const bgPink = () => {
    background.classList.add("bg-pink");
    background.classList.remove("bg-red");
    background.classList.remove("bg-orange");
    background.classList.remove("bg-yellow");
    background.classList.remove("bg-green");
    background.classList.remove("bg-turquoise");
    background.classList.remove("bg-violet");
    background.classList.remove("bg-random");
};

const bgRed = () => {
    background.classList.add("bg-red");
    background.classList.remove("bg-pink");
    background.classList.remove("bg-orange");
    background.classList.remove("bg-yellow");
    background.classList.remove("bg-green");
    background.classList.remove("bg-turquoise");
    background.classList.remove("bg-violet");
    background.classList.remove("bg-random");


};

const bgOrange = () => {
    background.classList.add("bg-orange");
    background.classList.remove("bg-pink");
    background.classList.remove("bg-red");
    background.classList.remove("bg-yellow");
    background.classList.remove("bg-green");
    background.classList.remove("bg-turquoise");
    background.classList.remove("bg-violet");
    background.classList.remove("bg-random");

};

const bgYellow = () => {
    background.classList.add("bg-yellow");
    background.classList.remove("bg-pink");
    background.classList.remove("bg-red");
    background.classList.remove("bg-orange");
    background.classList.remove("bg-green");
    background.classList.remove("bg-turquoise");
    background.classList.remove("bg-violet");
    background.classList.remove("bg-random");

};

const bgGreen = () => {
    background.classList.add("bg-green");
    background.classList.remove("bg-pink");
    background.classList.remove("bg-red");
    background.classList.remove("bg-orange");
    background.classList.remove("bg-yellow");
    background.classList.remove("bg-turquoise");
    background.classList.remove("bg-violet");
    background.classList.remove("bg-random");

};

const bgTurquoise = () => {
    background.classList.add("bg-turquoise");
    background.classList.remove("bg-pink");
    background.classList.remove("bg-red");
    background.classList.remove("bg-orange");
    background.classList.remove("bg-yellow");
    background.classList.remove("bg-green");
    background.classList.remove("bg-violet");
    background.classList.remove("bg-random");

};

const bgViolet = () => {
    background.classList.add("bg-violet");
    background.classList.remove("bg-pink");
    background.classList.remove("bg-red");
    background.classList.remove("bg-orange");
    background.classList.remove("bg-yellow");
    background.classList.remove("bg-green");
    background.classList.remove("bg-turquoise");
    background.classList.remove("bg-random");

};

const bgRandom = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.backgroundColor = bgColor;
    background.classList.remove("bg-violet");
    background.classList.remove("bg-pink");
    background.classList.remove("bg-red");
    background.classList.remove("bg-orange");
    background.classList.remove("bg-yellow");
    background.classList.remove("bg-green");
    background.classList.remove("bg-turquoise");

};

// Nav Button Functions

const navButtonPink = () => {
    pink.classList.add("nav-pink-change");
    red.classList.remove("nav-red-change");
    orange.classList.remove("nav-orange-change");
    yellow.classList.remove("nav-yellow-change");
    green.classList.remove("nav-green-change");
    turquoise.classList.remove("nav-turquoise-change");
    violet.classList.remove("nav-violet-change");
    random.classList.remove("nav-random-change");
};

const navButtonRed = () => {
    red.classList.add("nav-red-change");
    pink.classList.remove("nav-pink-change");
    orange.classList.remove("nav-orange-change");
    yellow.classList.remove("nav-yellow-change");
    green.classList.remove("nav-green-change");
    turquoise.classList.remove("nav-turquoise-change");
    violet.classList.remove("nav-violet-change");
    random.classList.remove("nav-random-change");
};

const navButtonOrange = () => {
    orange.classList.add("nav-orange-change");
    red.classList.remove("nav-red-change");
    pink.classList.remove("nav-pink-change");
    yellow.classList.remove("nav-yellow-change");
    green.classList.remove("nav-green-change");
    turquoise.classList.remove("nav-turquoise-change");
    violet.classList.remove("nav-violet-change");
    random.classList.remove("nav-random-change");

};

const navButtonYellow = () => {
    yellow.classList.add("nav-yellow-change");
    orange.classList.remove("nav-orange-change");
    red.classList.remove("nav-red-change");
    pink.classList.remove("nav-pink-change");
    green.classList.remove("nav-green-change");
    turquoise.classList.remove("nav-turquoise-change");
    violet.classList.remove("nav-violet-change");
    random.classList.remove("nav-random-change");
};

const navButtonGreen = () => {
    green.classList.add("nav-green-change");
    yellow.classList.remove("nav-yellow-change");
    orange.classList.remove("nav-orange-change");
    red.classList.remove("nav-red-change");
    pink.classList.remove("nav-pink-change");
    turquoise.classList.remove("nav-turquoise-change");
    violet.classList.remove("nav-violet-change");
    random.classList.remove("nav-random-change");


};

const navButtonTurquoise = () => {
    turquoise.classList.add("nav-turquoise-change");
    green.classList.remove("nav-green-change");
    yellow.classList.remove("nav-yellow-change");
    orange.classList.remove("nav-orange-change");
    red.classList.remove("nav-red-change");
    pink.classList.remove("nav-nav-pink-change");
    violet.classList.remove("nav-violet-change");
    random.classList.remove("nav-random-change");


};

const navButtonViolet = () => {
    violet.classList.add("nav-violet-change");
    turquoise.classList.remove("nav-turquoise-change");
    green.classList.remove("nav-green-change");
    yellow.classList.remove("nav-yellow-change");
    orange.classList.remove("nav-orange-change");
    red.classList.remove("nav-red-change");
    pink.classList.remove("nav-pink-change");
    random.classList.remove("nav-random-change");

};

const navButtonRandom = () => {
    random.classList.add("nav-random-change");
    violet.classList.remove("nav-violet-change");
    turquoise.classList.remove("nav-turquoise-change");
    green.classList.remove("nav-green-change");
    yellow.classList.remove("nav-yellow-change");
    orange.classList.remove("nav-orange-change");
    red.classList.remove("nav-red-change");
    pink.classList.remove("nav-pink-change");

};


// Nav Radio Button Functions

const radioOnPink = () => {
    pinkRadio.classList.add("radio-on");
    pinkRadio.classList.remove("radio-off");
};

const radioOffPink = () => {
    pinkRadio.classList.add("radio-off");
    pinkRadio.classList.remove("radio-on");
};

const radioOnRed = () => {
    redRadio.classList.add("radio-on");
    redRadio.classList.remove("radio-off");
};

const radioOffRed = () => {
    redRadio.classList.add("radio-off");
    redRadio.classList.remove("radio-on");
};

const radioOnOrange = () => {
    orangeRadio.classList.add("radio-on");
    orangeRadio.classList.remove("radio-off");
};

const radioOffOrange = () => {
    orangeRadio.classList.add("radio-off");
    orangeRadio.classList.remove("radio-on");
};

const radioOnYellow = () => {
    yellowRadio.classList.add("radio-on");
    yellowRadio.classList.remove("radio-off");
};

const radioOffYellow = () => {
    yellowRadio.classList.add("radio-off");
    yellowRadio.classList.remove("radio-on");
};

const radioOnGreen = () => {
    greenRadio.classList.add("radio-on");
    greenRadio.classList.remove("radio-off");
};

const radioOffGreen = () => {
    greenRadio.classList.add("radio-off");
    greenRadio.classList.remove("radio-on");
};

const radioOnTurquoise = () => {
    turquoiseRadio.classList.add("radio-on");
    turquoiseRadio.classList.remove("radio-off");
};

const radioOffTurquoise = () => {
    turquoiseRadio.classList.add("radio-off");
    turquoiseRadio.classList.remove("radio-on");
};

const radioOnViolet = () => {
    violetRadio.classList.add("radio-on");
    violetRadio.classList.remove("radio-off");
};

const radioOffViolet = () => {
    violetRadio.classList.add("radio-off");
    violetRadio.classList.remove("radio-on");
};

const radioOnRandom = () => {
    randomRadio.classList.add("radio-on");
    randomRadio.classList.remove("radio-off");
};

const radioOffRandom = () => {
    randomRadio.classList.add("radio-off");
    randomRadio.classList.remove("radio-on");
};

const radioOnReset = () => {
    resetRadio.classList.add("radio-on");
    resetRadio.classList.remove("radio-off");
};

const radioOffReset = () => {
    resetRadio.classList.add("radio-off");
    resetRadio.classList.remove("radio-on");
};

// Textbox Functions

const textBoxPink = () => {
    textBox.style.opacity = "0.8";
    textBox.classList.add("txt-pink");
    textBox.classList.remove("txt-red");
    textBox.classList.remove("txt-orange");
    textBox.classList.remove("txt-yellow");
    textBox.classList.remove("txt-green");
    textBox.classList.remove("txt-turquoise");
    textBox.classList.remove("txt-violet");
    textBox.classList.remove("txt-random");
    textBox.classList.remove("txt-reset");
    textBoxP.innerHTML = "'Hot Pink' stands for LOVE..";
};

const textBoxRed = () => {
    textBox.style.opacity = "0.8";
    textBox.classList.add("txt-red");
    textBox.classList.remove("txt-pink");
    textBox.classList.remove("txt-orange");
    textBox.classList.remove("txt-yellow");
    textBox.classList.remove("txt-green");
    textBox.classList.remove("txt-turquoise");
    textBox.classList.remove("txt-violet");
    textBox.classList.remove("txt-random");
    textBox.classList.remove("txt-reset");
    textBoxP.innerHTML = "'RED' stands for LIFE..";
};

const textBoxOrange = () => {
    textBox.style.opacity = "0.8";
    textBox.classList.add("txt-orange");
    textBox.classList.remove("txt-pink");
    textBox.classList.remove("txt-red");
    textBox.classList.remove("txt-yellow");
    textBox.classList.remove("txt-green");
    textBox.classList.remove("txt-turquoise");
    textBox.classList.remove("txt-violet");
    textBox.classList.remove("txt-random");
    textBox.classList.remove("txt-reset");
    textBoxP.innerHTML = "'ORANGE' stands for HEALING..";
};

const textBoxYellow = () => {
    textBox.style.opacity = "0.8";
    textBox.classList.add("txt-yellow");
    textBox.classList.remove("txt-pink");
    textBox.classList.remove("txt-red");
    textBox.classList.remove("txt-orange");
    textBox.classList.remove("txt-green");
    textBox.classList.remove("txt-turquoise");
    textBox.classList.remove("txt-violet");
    textBox.classList.remove("txt-random");
    textBox.classList.remove("txt-reset");
    textBoxP.innerHTML = "'YELLOW' stands for SUNLIGHT..";
};

const textBoxGreen = () => {
    textBox.style.opacity = "0.8";
    textBox.classList.add("txt-green");
    textBox.classList.remove("txt-pink");
    textBox.classList.remove("txt-red");
    textBox.classList.remove("txt-orange");
    textBox.classList.remove("txt-yellow");
    textBox.classList.remove("txt-turquoise");
    textBox.classList.remove("txt-violet");
    textBox.classList.remove("txt-random");
    textBox.classList.remove("txt-reset");
    textBoxP.innerHTML = "'GREEN' stands for NATURE..";
};

const textBoxTurquoise = () => {
    textBox.style.opacity = "0.8";
    textBox.classList.add("txt-turquoise");
    textBox.classList.remove("txt-pink");
    textBox.classList.remove("txt-red");
    textBox.classList.remove("txt-orange");
    textBox.classList.remove("txt-yellow");
    textBox.classList.remove("txt-green");
    textBox.classList.remove("txt-violet");
    textBox.classList.remove("txt-random");
    textBox.classList.remove("txt-reset");
    textBoxP.innerHTML = "'TURQUOISE' stands for MAGIC..";
};

const textBoxViolet = () => {
    textBox.style.opacity = "0.8";
    textBox.classList.add("txt-violet");
    textBox.classList.remove("txt-pink");
    textBox.classList.remove("txt-red");
    textBox.classList.remove("txt-orange");
    textBox.classList.remove("txt-yellow");
    textBox.classList.remove("txt-green");
    textBox.classList.remove("txt-turquoise");
    textBox.classList.remove("txt-random");
    textBox.classList.remove("txt-reset");
    textBoxP.innerHTML = "'VIOLET' stands for SPIRIT..";
};

const textBoxRandom = () => {
    textBox.style.opacity = "0.8";
    textBox.classList.add("txt-random");
    textBox.classList.remove("txt-violet");
    textBox.classList.remove("txt-pink");
    textBox.classList.remove("txt-red");
    textBox.classList.remove("txt-orange");
    textBox.classList.remove("txt-yellow");
    textBox.classList.remove("txt-green");
    textBox.classList.remove("txt-turquoise");
    textBox.classList.remove("txt-reset");
    textBoxP.innerHTML = "MAKE LOVE, NOT WAR..";
};


// Shortcut Functions

function Key1(e) {
    var key = e.which || e.keyCode;
    if (key === 49) removeStyle() || menuOn() || bgPink() || navButtonPink() || radioOnPink() || textBoxPink();

};

function Key11(e) {
    var key = e.which || e.keyCode;
    if (key === 49) removeStyle() || menuOn() || bgPink() || navButtonPink() || radioOffPink();

};

function Key2(e) {
    var key = e.which || e.keyCode;
    if (key === 50) removeStyle() || menuOn() || bgRed() || navButtonRed() || radioOnRed() || textBoxRed();
};

function Key22(e) {
    var key = e.which || e.keyCode;
    if (key === 50) removeStyle() || menuOn() || bgRed() || navButtonRed() || radioOffRed();
};

function Key3(e) {
    var key = e.which || e.keyCode;
    if (key === 51) removeStyle() || menuOn() || bgOrange() || navButtonOrange() || radioOnOrange() || textBoxOrange();
};

function Key33(e) {
    var key = e.which || e.keyCode;
    if (key === 51) removeStyle() || menuOn() || bgOrange() || navButtonOrange() || radioOffOrange();
};

function Key4(e) {
    var key = e.which || e.keyCode;
    if (key === 52) removeStyle() || menuOn() || bgYellow() || navButtonYellow() || radioOnYellow() || textBoxYellow();
};

function Key44(e) {
    var key = e.which || e.keyCode;
    if (key === 52) removeStyle() || menuOn() || bgYellow() || navButtonYellow() || radioOffYellow();
};

function Key5(e) {
    var key = e.which || e.keyCode;
    if (key === 53) removeStyle() || menuOn() || bgGreen() || navButtonGreen() || radioOnGreen() || textBoxGreen();
};

function Key55(e) {
    var key = e.which || e.keyCode;
    if (key === 53) removeStyle() || menuOn() || bgGreen() || navButtonGreen() || radioOffGreen();
};

function Key6(e) {
    var key = e.which || e.keyCode;
    if (key === 54) removeStyle() || menuOn() || bgTurquoise() || navButtonTurquoise() || radioOnTurquoise() || textBoxTurquoise();
};

function Key66(e) {
    var key = e.which || e.keyCode;
    if (key === 54) removeStyle() || menuOn() || bgTurquoise() || navButtonTurquoise() || radioOffTurquoise();
};

function Key7(e) {
    var key = e.which || e.keyCode;
    if (key === 55) removeStyle() || menuOn() || bgViolet() || navButtonViolet() || radioOnViolet() || textBoxViolet();
};

function Key77(e) {
    var key = e.which || e.keyCode;
    if (key === 55) removeStyle() || menuOn() || bgViolet() || navButtonViolet() || radioOffViolet();
};

function Key8(e) {
    var key = e.which || e.keyCode;
    if (key === 56) removeStyle() || menuOn() || bgRandom() || navButtonRandom() || radioOnRandom() || textBoxRandom();
};

function Key88(e) {
    var key = e.which || e.keyCode;
    if (key === 56) removeStyle() || menuOn() || bgRandom() || navButtonRandom() || radioOffRandom();
};

function Key9(e) {
    var key = e.which || e.keyCode;
    if (key === 57) menuOn() || radioOnReset() || clear();
};

function Key99(e) {
    var key = e.which || e.keyCode;
    if (key === 57) menuOn() || radioOffReset() || clear();
};


// EVENT LISTENERS

// Menu

menu.addEventListener("click", menuOn);
menu.addEventListener("mouseover", menuOn);
navBar.addEventListener("mouseleave", menuOff);
navBar.addEventListener("click", menuOff);

// Change Background Colors

pink.addEventListener("click", bgPink);
pink.addEventListener("click", removeStyle);
red.addEventListener("click", bgRed);
red.addEventListener("click", removeStyle);
orange.addEventListener("click", bgOrange);
orange.addEventListener("click", removeStyle);
yellow.addEventListener("click", bgYellow);
yellow.addEventListener("click", removeStyle);
green.addEventListener("click", bgGreen);
green.addEventListener("click", removeStyle);
turquoise.addEventListener("click", bgTurquoise);
turquoise.addEventListener("click", removeStyle);
violet.addEventListener("click", bgViolet);
violet.addEventListener("click", removeStyle);
random.addEventListener("click", bgRandom);

// Change Nav Items

pink.addEventListener("mouseover", navButtonPink);
red.addEventListener("mouseover", navButtonRed);
orange.addEventListener("mouseover", navButtonOrange);
yellow.addEventListener("mouseover", navButtonYellow);
green.addEventListener("mouseover", navButtonGreen);
turquoise.addEventListener("mouseover", navButtonTurquoise);
violet.addEventListener("mouseover", navButtonViolet);
random.addEventListener("mouseover", navButtonRandom);
reset.addEventListener("click", clear);
resetRadio.addEventListener("click", clear);

// Change Nav Radio Items

pinkRadio.addEventListener("mouseover", radioOnPink);
pinkRadio.addEventListener("mouseleave", radioOffPink);
pinkRadio.addEventListener("click", bgPink);
pinkRadio.addEventListener("mouseover", navButtonPink);
pink.addEventListener("mouseover", radioOnPink);
pink.addEventListener("mouseleave", radioOffPink);
pinkRadio.addEventListener("click", removeStyle);

redRadio.addEventListener("mouseover", radioOnRed);
redRadio.addEventListener("mouseleave", radioOffRed);
redRadio.addEventListener("click", bgRed);
redRadio.addEventListener("mouseover", navButtonRed);
red.addEventListener("mouseover", radioOnRed);
red.addEventListener("mouseleave", radioOffRed);
redRadio.addEventListener("click", removeStyle);

orangeRadio.addEventListener("mouseover", radioOnOrange);
orangeRadio.addEventListener("mouseleave", radioOffOrange);
orangeRadio.addEventListener("click", bgOrange);
orangeRadio.addEventListener("mouseover", navButtonOrange);
orange.addEventListener("mouseover", radioOnOrange);
orange.addEventListener("mouseleave", radioOffOrange);
orangeRadio.addEventListener("click", removeStyle);

yellowRadio.addEventListener("mouseover", radioOnYellow);
yellowRadio.addEventListener("mouseleave", radioOffYellow);
yellowRadio.addEventListener("click", bgYellow);
yellowRadio.addEventListener("mouseover", navButtonYellow);
yellow.addEventListener("mouseover", radioOnYellow);
yellow.addEventListener("mouseleave", radioOffYellow);
yellowRadio.addEventListener("click", removeStyle);

greenRadio.addEventListener("mouseover", radioOnGreen);
greenRadio.addEventListener("mouseleave", radioOffGreen);
greenRadio.addEventListener("click", bgGreen);
greenRadio.addEventListener("mouseover", navButtonGreen);
green.addEventListener("mouseover", radioOnGreen);
green.addEventListener("mouseleave", radioOffGreen);
greenRadio.addEventListener("click", removeStyle);

turquoiseRadio.addEventListener("mouseover", radioOnTurquoise);
turquoiseRadio.addEventListener("mouseleave", radioOffTurquoise);
turquoiseRadio.addEventListener("click", bgTurquoise);
turquoiseRadio.addEventListener("mouseover", navButtonTurquoise);
turquoise.addEventListener("mouseover", radioOnTurquoise);
turquoise.addEventListener("mouseleave", radioOffTurquoise);
turquoiseRadio.addEventListener("click", removeStyle);

violetRadio.addEventListener("mouseover", radioOnViolet);
violetRadio.addEventListener("mouseleave", radioOffViolet);
violetRadio.addEventListener("click", bgViolet);
violetRadio.addEventListener("mouseover", navButtonViolet);
violet.addEventListener("mouseover", radioOnViolet);
violet.addEventListener("mouseleave", radioOffViolet);
violetRadio.addEventListener("click", removeStyle);

randomRadio.addEventListener("mouseover", radioOnRandom);
randomRadio.addEventListener("mouseleave", radioOffRandom);
randomRadio.addEventListener("click", bgRandom);
randomRadio.addEventListener("mouseover", navButtonRandom);
random.addEventListener("mouseover", radioOnRandom);
random.addEventListener("mouseleave", radioOffRandom);
randomRadio.addEventListener("click", removeStyle);

resetRadio.addEventListener("mouseover", radioOnReset);
resetRadio.addEventListener("mouseleave", radioOffReset);
resetRadio.addEventListener("mouseover", navButtonRandom);
reset.addEventListener("mouseover", radioOnReset);
reset.addEventListener("mouseleave", radioOffReset);
resetRadio.addEventListener("click", removeStyle);

// Text Box

pink.addEventListener("click", textBoxPink);
pinkRadio.addEventListener("click", textBoxPink);
red.addEventListener("click", textBoxRed);
redRadio.addEventListener("click", textBoxRed);
orange.addEventListener("click", textBoxOrange);
orangeRadio.addEventListener("click", textBoxOrange);
yellow.addEventListener("click", textBoxYellow);
yellowRadio.addEventListener("click", textBoxYellow);
green.addEventListener("click", textBoxGreen);
greenRadio.addEventListener("click", textBoxGreen);
turquoise.addEventListener("click", textBoxTurquoise);
turquoiseRadio.addEventListener("click", textBoxTurquoise);
violet.addEventListener("click", textBoxViolet);
violetRadio.addEventListener("click", textBoxViolet);
random.addEventListener("click", textBoxRandom);
randomRadio.addEventListener("click", textBoxRandom);


// Short Cuts

background.addEventListener("keypress", Key1);
background.addEventListener("keyup", Key11);
background.addEventListener("keypress", Key2);
background.addEventListener("keyup", Key22);
background.addEventListener("keypress", Key3);
background.addEventListener("keyup", Key33);
background.addEventListener("keypress", Key4);
background.addEventListener("keyup", Key44);
background.addEventListener("keypress", Key5);
background.addEventListener("keyup", Key55);
background.addEventListener("keypress", Key6);
background.addEventListener("keyup", Key66);
background.addEventListener("keypress", Key7);
background.addEventListener("keyup", Key77);
background.addEventListener("keypress", Key8);
background.addEventListener("keyup", Key88);
background.addEventListener("keypress", Key9);
background.addEventListener("keyup", Key99);

// Loops

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {

        let div = this.parentElement;
        div.style.opacity = "0";

    }
}