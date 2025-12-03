const allLinks = document.querySelectorAll('a');

const content = document.getElementById('toc');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

content.style.color = 'rgb(1,255,1)';
