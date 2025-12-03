const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');
const h1 = window.getComputedStyle(h1).fontSize; //32px
document.querySelector('#container').textContent = center;

for (let link of links) {
    console.log(link.href)
}


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const span = document.querySelectorAll('span');
for (let i = 0; i < colors.length; i++) {
    span[i].style.color = colors[i];
}
