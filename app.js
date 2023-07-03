const blueButton = document.getElementById("blue");
const grayButton = document.getElementById("gray");
const yellowButton = document.getElementById("yellow");
const photoElement = document.getElementById("foto");

const hamburger = document.querySelector('.hamburger');
const navBarElements = document.querySelector('.navBarElements');

blueButton.addEventListener("click", changePhoto);
yellowButton.addEventListener("click", changePhoto);
grayButton.addEventListener("click", changePhoto);

function changePhoto(event){
    const color = event.target.id;
    console.log(color)
    const photoPath = `./pics/${color}.jpg`;
    
    photoElement.src = photoPath;

}



hamburger.addEventListener('click', () => {
  navBarElements.classList.toggle('show');
  console.log("click")
});
