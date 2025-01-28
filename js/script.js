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

function searchItems() {
  alert("Función de búsqueda en desarrollo...");
}
