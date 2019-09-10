let blocks = document.querySelectorAll('.block');
let blocksContainer = document.querySelector('.blocks');
let count = 2;
let moveBox;
let moveBoxDelay;
let mouseDown;

blocks.forEach(block => block.addEventListener('click', () => {
    clearTimeout(moveBoxDelay);
    mouseDown = false;

    // Floats box to the top of the stack and 
    // shifts entire container down 124px to make room for box
    // that is floating to the top of stack
    blocksContainer.style.transform = `translateY(124px)`; 
    blocksContainer.style.transition = "all 1s";
    TweenMax.to(block, 0.75, {
        y: -block.offsetTop - 110,
    });
    
    // After 750 miliseconds, return box to original y coordinate
    // location, and prepend it to the beginning of the stack and 
    // places parent container back at original position
    setTimeout(() => {
        blocksContainer.prepend(block);
        blocksContainer.style.transform = `translateY(0px)`; 
        blocksContainer.style.transition = `all 0s`; 
        TweenMax.to(block, 0, {
            y: 0,
        }); 
    }, 750);
}));

blocks.forEach(block => block.addEventListener('mousedown', function(){
    mouseDown = true;
    clearInterval(moveBox);

    // Wait 1 second to run this interval function, incase they are
    // just single clicking, and not holding down
    moveBoxDelay = setTimeout(() => {
        // Interval that moves the box to the right, if the mouse is down, 
        // or to the left, if the mouse is up, every 10 miliseconds
        moveBox = setInterval(() => {
            mouseDown ? count += 3 : count -= 3;
            block.style.transform = `translateX(${count}px)`;
            // If the box reaches it's original position, stop function
            count <= 0 && clearInterval(moveBox);
        }, 10);
    }, 1000);
}));

window.addEventListener('mouseup', () => mouseDown = false);



  