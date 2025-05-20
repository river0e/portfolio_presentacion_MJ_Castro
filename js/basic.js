// Mostrar panel al intentar salir
function showExitPanel() {
  const panel = document.getElementById("exitPanel");
  panel.style.display = "block";
  document.body.style.overflow = "hidden"; // Bloquea el scroll
}

// Cerrar panel manualmente
document.getElementById("closeExitPanel")?.addEventListener("click", function() {
  document.getElementById("exitPanel").style.display = "none";
  document.body.style.overflow = "auto"; // Restaura el scroll
});

// Detectar salida por la parte superior (para escritorio)
document.addEventListener("mouseout", function(e) {
  if (e.clientY < 10) { // Se activa al llegar al borde superior
    showExitPanel();
  }
});

// Detectar cambio de pestaña o app (para móviles)
window.addEventListener("blur", function() {
  showExitPanel();
});

// Evitar que se cierre al hacer clic fuera 
document.getElementById("exitPanel")?.addEventListener("click", function(e) {
  if (e.target === this) {
    e.stopPropagation(); // Evita cerrar al hacer clic en el fondo
  }
}); 