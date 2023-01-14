particlesJS.load('particles-js', 'path/to/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  
  const matrix = document.getElementById("matrix");

  for (let i = 0; i < 50; i++) {
      const matrixNumber = document.createElement("span");
      matrixNumber.classList.add("matrix-number");
      matrixNumber.textContent = Math.floor(Math.random() * 10);
      matrixNumber.style.left = `${Math.floor(Math.random() * 100)}%`;
      matrix.appendChild(matrixNumber);
  }
  
