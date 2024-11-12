
const listImages = [
    {
       
        src: 'https://media.tenor.com/1jrUvITt1QcAAAAj/github-sticker.gif',
        nameImg: "cat"
    }

]

const img = document.querySelector('img');
const button = document.querySelector('button');

const setImg = currentDataImg => {
    img.src = currentDataImg.src;
    img.alt = currentDataImg.nameImg;
};

setImg(listImages[0]);

button.addEventListener('click', onchangeImg);
let count = 0;

function onchangeImg(){
    count += 1;

    setImg(listImages[count]);
}
