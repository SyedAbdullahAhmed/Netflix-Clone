const images = document.getElementsByClassName('d-block');
const maxWidth = 650; // Set your desired maximum width here

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
  
    Array.from(images).forEach(image => {
      if (window.innerWidth <= 700 && window.innerWidth > 500) {
        image.classList.remove('h-25');
        image.classList.add('h-50');
      } 
      else if (window.innerWidth <= 500 && window.innerWidth >= 100) {
        image.classList.remove('h-50');
        image.classList.add('h-25');
      } 
      else {
        image.classList.remove('h-50');
        image.classList.remove('h-25');
      }
    });
    
  });
  
  const rli = document.getElementsByClassName('a');

  window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
  
    Array.from(rli).forEach(li => {
      if (windowWidth <= 570) {
        li.classList.add('d-none');
      } else {
        li.classList.remove('d-none');
      }
    });
  });
  
  

  