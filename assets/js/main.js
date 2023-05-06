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

// Update slider image and text
const fillSlider = (index) => {
    sliderTitle.innerText = images[index].title;
    sliderText.innerText = images[index].text;
    sliderImg.src = images[index].image;
};

// Update slider image and text
const updateThumb = (index) => {
    document.querySelector(".active").classList.replace('active', 'inactive');
    thumb[index].classList.replace('inactive', 'active');
};

/****************** VARIABLES ******************/
// Global DOM's Variables 
const sliderElement = document.getElementById('slider');
const thumbBarElement = document.getElementById('thumbBar');
const thumb = document.getElementsByClassName('thumb');
const thumbClasses = ['w100Perc', 'thumb', 'cPointer', 'inactive'];
const sliderTitle = document.querySelector("#slider h3");
const sliderText = document.querySelector("#slider p");
const btnBack = document.getElementById('btnBack');
const btnNext = document.getElementById('btnNext');

// Global JS Variables
let currentSlide = 0;

// Global Array Object 
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

/******************   INIT    ******************/
// Create and add slider image to the carousel on page
const sliderImg = createElement("img", "slide", "", "undefined", `${images[0]['image']}`, "slider-img");
sliderElement.appendChild(sliderImg);
fillSlider(currentSlide);

// Create and add thumnails images to the carousel on page
images.forEach((element, i, array) => {

    // Create thumbnails images
    const thumbCreated = createElement("div", `${thumbClasses.join(" ")}`, "", `imgThumb-${i}`, `${element['image']}`, "thumb-img");
    thumbCreated.style.backgroundImage = `url("${element['image']}")`;  
    thumbCreated.style.height = `calc( 100% / ${images.length} * 3)`;
    thumbBarElement.appendChild(thumbCreated);

    // First and last thumb
    if (i === 0) {
        thumb[i].classList.replace('inactive', 'active');
        thumbCreated.style.marginTop = "-26px";
    }     
    i === images.length - 1 ? thumbCreated.style.marginBottom = "26px" : null;

    // Click on thumbnails image: update thumb and slide
    thumbCreated.addEventListener('click', function () {
        currentSlide = i;
        fillSlider(currentSlide);
        updateThumb(i);
    })
});

/******************  EVENTS   ******************/
// Click on Next button: image scrolling, create Loop
btnNext.addEventListener("click", function () {
    if (currentSlide === images.length - 1) {
        currentSlide = 0;
        fillSlider(currentSlide);
        updateThumb(currentSlide);
    } else {
        currentSlide++;
        fillSlider(currentSlide);
        updateThumb(currentSlide);
    }  
});

// Click on Back button: image scrolling, create Loop
btnBack.addEventListener("click", function () {
    if (currentSlide === 0) {
        currentSlide = images.length - 1;
        fillSlider(currentSlide);
        updateThumb(currentSlide);
    } else {
        currentSlide--;
        fillSlider(currentSlide);
        updateThumb(currentSlide);
    }
});

/******************  SOMETHING TO CHECK   ******************/
/* FUNCTION: Execute any method of any object 
const doSomethingFunc = (what, selector, key, value) => document[what](selector)[key] = value;
Example to use it correctly: doSomethingFunc("querySelector", "h1", "innerHTML", "HELLO WORLD!");
Unfixed Bug: with style.something, classList.add, className and other, func doesn't work, even changing the arguments/function syntax. */