let forward = 0
const forwardSlider = document.querySelector('.btns_ostrov')

document.querySelector('.btn-strelka').addEventListener('click', function() {
  console.log('asas')
  forward = forward + 230;
  if(forward > 230) {
    forward = 0
  }
  forwardSlider.style.top = -forward + 'px'
})