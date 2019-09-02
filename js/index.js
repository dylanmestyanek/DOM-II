let logoHeading = document.querySelector(".logo-heading");
let nav = document.querySelector("nav");
let navItems = nav.querySelectorAll('a');
let welcomeTitle = document.querySelector('.intro h2');
let welcomeText = document.querySelector('.intro p');
let welcomeImg = document.querySelector('.intro img');
let contentSection = document.querySelector('.content-section')
let letsGoImg = document.querySelector('.img-content img');
let count = 0;


// Event Listener 1 -- Logo letter spread on hover
logoHeading.addEventListener('mouseover', function(){
    this.style.letterSpacing = "10px";
    this.style.transition = "all .3s";
});

logoHeading.addEventListener('mouseout', function(){
    this.style.letterSpacing = "0px";
});

//Event Listener 2 -- Pink nav bar on keydown
window.addEventListener('keydown', () => {
   nav.style.background = "pink";
})

//Event Listener 3 -- Logo letter spread on scroll
window.addEventListener('wheel', () => {
    count++;
    logoHeading.style.letterSpacing = `${count}px`;
})

//Event Listener 4 -- Bold h2 on double click
welcomeTitle.addEventListener('dblclick', function(){
    this.style.fontWeight = 'bold';
});

welcomeTitle.addEventListener('mouseover', function(){
    this.style.cursor = 'pointer';
});

//Event Listener 5 -- Disappearing div on copy
welcomeText.addEventListener('copy', function(){
    this.style.display = "none";
})


//Event Listener 6
welcomeImg.addEventListener('mouseenter', function(){
    this.style.boxShadow = "0px 0px 50px 1px gold";
});

//Event Listener 7
welcomeImg.addEventListener('mousedown', function(){
    setInterval(() => {
        count++;
        this.style.boxShadow = `0px 0px 50px ${count}px gold`;
    });
}, 2000)

//Event Listener 8
welcomeImg.addEventListener('mouseup', function(){
    setInterval(() => {
        count--;
        this.style.boxShadow = `0px 0px 50px ${count}px gold`;
    });
}, 2000)

//Event Listener 9
window.addEventListener('pointerdown', (e) => {
    document.body.style.background = "black";
})

//Event Listener 10
window.addEventListener('pointerup', (e) => {
    document.body.style.background = "pink";
})

//Event.preventDefault() 
navItems.forEach(item => item.addEventListener('click', (e) => e.preventDefault()));

//Preventing event propagation
//Turns background orange
contentSection.addEventListener('click', function(){
    this.style.background = "orange";
});

//Image is inside of the contentSection div, but when you click the image
//the contentSection div will not turn orange, because of the e.stopPropagation();
letsGoImg.addEventListener('click', function(e){
    e.stopPropagation();
    this.style.display = "none";
})