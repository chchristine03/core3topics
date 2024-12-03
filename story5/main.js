function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

  
const divElement = document.querySelector('.backcandle'); 

divElement.addEventListener('click', function() {
  window.location.href = 'https://chchristine03.github.io/core3topics/index.html';
});