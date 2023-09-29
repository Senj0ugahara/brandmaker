const dotsImagesBtn = document.querySelectorAll('.cabinet-images__dot');
const dopsImagesFrame = document.querySelectorAll('.cabinet-images__frame');

for (let i = 0; i < dotsImagesBtn.length; i++) {
  dotsImagesBtn[i].addEventListener('click', () => {
    dopsImagesFrame[i].classList.toggle('show');
  })
}