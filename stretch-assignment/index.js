let blocks = document.querySelectorAll('.block');
let blocksContainer = document.querySelector('.blocks');
let count = 2;
let moveBox;
let moveBoxDelay;
let mouseDown;

blocks.forEach(block => block.addEventListener('click', () => {
    clearTimeout(moveBoxDelay);
    mouseDown = false;
    block.style.transform = `translateY(-${block.offsetTop + 108}px)`;
    blocksContainer.style.transform = `translateY(120px)`;
    block.style.transition = "all .3s";
    blocksContainer.style.transition = "all .3s";
    
    setTimeout(() => {
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

    moveBoxDelay = setTimeout(() => {
        moveBox = setInterval(() => {
            mouseDown ? count += 3 : count -= 3;
            block.style.transform = `translateX(${count}px)`;
            count <= 0 && clearInterval(moveBox);
        }, 10);
    }, 1000);
}));

window.addEventListener('mouseup', () => mouseDown = false);
