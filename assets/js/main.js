/****************** FUNCTIONS ******************/
// Create HTML Elements
const createElement = (tag, classes, content, id, src, alt) => {
    const element = document.createElement(tag);
    id = id != "undefined" ? element.setAttribute("id", id) : null; //if id isn't undefined
    classes = classes != "undefined" ? element.setAttribute("class", classes) : null; //if classes isn't undefined
    element.innerText = (content);
    src = src != "undefined" ? element.setAttribute("src", src) : null; //if src isn't undefined
    alt = alt != "undefined" ? element.setAttribute("alt", alt) : null; //if alt isn't undefined
    return element;
};

// Execute any method of any object 
const doSomethingFunc = (what, selector, key, value) => document[what](selector)[key] = value;
//Example to use it correctly: doSomethingFunc("querySelector", "h1", "innerHTML", "HELLO WORLD!");
// Unfixed Bug: with style.something, classList.add, className and other, func doesn't work, even changing the arguments/function syntax.

/****************** VARIABLES ******************/
// DOM's Variables 
const sliderElement = document.getElementById('slider');
const thumbBarElement = document.getElementById('thumbBar');
const slide = document.getElementsByClassName('slide');
const thumb = document.getElementsByClassName('thumbCard');
const thumbClasses = ['w100Perc', 'thumbCard', 'cPointer', 'inactive'];
const btnBack = document.getElementById('btnBack');
const btnNext = document.getElementById('btnNext');

// Array Object 
// (Difference from the exercise instructions: there are 10 items instead of 5)
const images = [
    new Image('./assets/img/01.webp', 'Marvel\'s Spiderman Miles Morale', 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'),
    new Image('./assets/img/02.webp', 'Ratchet & Clank: Rift Apart', 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'),
    new Image('./assets/img/03.webp', 'Fortnite', 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.'),
    new Image('./assets/img/04.webp', 'Stray', 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'),
    new Image('./assets/img/05.webp', "Marvel's Avengers", 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'),
    new Image('./assets/img/01.webp', 'Marvel\'s Spiderman Miles Morale', 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'),
    new Image('./assets/img/02.webp', 'Ratchet & Clank: Rift Apart', 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'),
    new Image('./assets/img/03.webp', 'Fortnite', 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.'),
    new Image('./assets/img/04.webp', 'Stray', 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'),
    new Image('./assets/img/05.webp', "Marvel's Avengers", 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'),
];

console.log("Array Created with images:", images);

/******************   INIT    ******************/
debugger;

// Create and add images to the carousel on page
images.forEach((element, i, array) => {

    // Create Slider Images
    const slideCreated = createElement("img", "slide", "", `img-${i}`, `${element['image']}`, "slider-img");
    i != 0 ? slideCreated.classList.add('dNone') : null;
    sliderElement.appendChild(slideCreated);

    // Create Thumbnails Images
    const thumbCreated = createElement("div", `${thumbClasses.join(" ")}`, "", `imgThumb-${i}`, `${element['image']}`, "slider-img");
    thumbCreated.style.backgroundImage = `url("${element['image']}")`;  
    thumbCreated.style.height = `calc( 100% / ${images.length} * 3)`;
    if (i === 0) {

        // If first thumb image
        thumbCreated.classList.replace('inactive', 'active');
        thumbCreated.style.marginTop = "-26px";
    }
    i === images.length - 1 ? thumbCreated.style.marginBottom = "26px" : null; // If last thumb image
    thumbBarElement.appendChild(thumbCreated);

});



/******************  EVENTS   ******************/