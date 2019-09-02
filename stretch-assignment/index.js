let blocks = document.querySelectorAll('.block');
let blocksContainer = document.querySelector('.blocks');

let pink = document.querySelector('.block--pink')
// block.forEach(block => block.addEventListener('click', function(){
//     document.querySelector('.blocks').prepend(this);
// }));


blocks.forEach(block => block.addEventListener('click', () => {
    block.style.transition = 'all 1s';
    blocksContainer.style.transition = 'all 1s';
    block.style.transform = `translateY(${document.body.scrollTop - 600}px)`;
    blocksContainer.style.transform = `translateY(121.8px)`;
    setTimeout(() => {
    blocksContainer.style.transition = 'all 0s';
        blocksContainer.prepend(block);
        block.style.position = "static";
        block.style.transform = `translateY(0px)`;
        blocksContainer.style.transform = `translateY(0px)`;
    }, 1000);
}));
