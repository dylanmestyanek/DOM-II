let blocks = document.querySelectorAll('.block');
let blocksContainer = document.querySelector('.blocks');
let count = 2;
let moveBox;
let moveBoxDelay;
let mouseDown;

blocks.forEach(block => block.addEventListener('click', () => {
    clearTimeout(moveBoxDelay);
    mouseDown = false;

    // Moves box to an "absolute" position, so it can float to the
    // top of the container, without leaving an empty space from
    // where it originally was. Also shifts the whole parent container
    // down 120px to make space for the new box at the top
    block.style.transform = `translateY(-${120}px)`;
    blocksContainer.style.transform = `translateY(120px)`;
    block.style.position = "absolute";
    block.style.transition = "all .3s";
    blocksContainer.style.transition = "all .3s";
    
    // Prepends the box to the beginning of the container
    // and returns it's position to static, to put it back
    // in the flow of all the other boxes. Also shifts the 
    // whole parent container back to it's original spot
    setTimeout(() => {
        block.style.position = "static";
        blocksContainer.prepend(block);
        block.style.transition = "all 0s";
        blocksContainer.style.transition = "all 0s";
        block.style.transform = `translateY(0px)`;
        blocksContainer.style.transform = `translateY(0px)`;
    }, 500);
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
