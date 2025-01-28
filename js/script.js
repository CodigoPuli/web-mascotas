// Actualiza el año automáticamente en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Función para abrir la imagen en tamaño completo
function openImage(img) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  modal.style.display = "flex"; // Muestra el modal
  modalImg.src = img.src; // Establece la fuente de la imagen en el modal
}

// Función para cerrar el modal
function closeImage() {
  var modal = document.getElementById("modal");
  modal.style.display = "none"; // Oculta el modal
}

// Función de búsqueda (en desarrollo)
function searchItems() {
  alert("Función de búsqueda en desarrollo...");
}

let slideIndex = 0;

// Función para mover el slide
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Función para mostrar el slide actual
function showSlides(n) {
  let slides = document.querySelectorAll('.carousel-image');
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Iniciar el slider automáticamente
setInterval(() => moveSlide(1), 3000);  // Desplazamiento automático cada 3 segundos

// Efecto de cambio de estilo al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Ocultar el loading al cargar la página
window.addEventListener('load', () => {
  document.getElementById('loading').style.display = 'none';
});
