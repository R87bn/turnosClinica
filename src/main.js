// Selección de elementos del DOM
const turnoActual = document.getElementById("turnoActual");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnReset = document.getElementById("btnReset");
const btnCambiar = document.getElementById("btnCambiar");
const inputTurno = document.getElementById("inputTurno");
const errorMessage = document.getElementById("error-message"); // Mensaje de error

// Estado inicial del turno
let turno = 1;

// Función para actualizar el display del turno con dos dígitos
function actualizarDisplay() {
  turnoActual.textContent = turno.toString().padStart(2, "0");
  // Quitamos displayTurno, ya que no está definido y no es necesario
  mostrarError(""); // Limpia cualquier mensaje de error al actualizar
}

// Función para mostrar un mensaje de error visible durante 3 segundos
function mostrarError(mensaje) {
  errorMessage.textContent = mensaje; // Establece el texto del mensaje
  errorMessage.style.visibility = mensaje ? "visible" : "hidden"; // Muestra u oculta el mensaje
  if (mensaje) {
    // Si hay un mensaje, lo ocultamos después de 3 segundos
    setTimeout(() => {
      errorMessage.style.visibility = "hidden";
      errorMessage.textContent = ""; // Limpia el texto del mensaje
    }, 2000); // Tiempo de espera en milisegundos
  }
}

// Función para incrementar el turno
btnSiguiente.addEventListener("click", () => {
  if (turno < 99) {
    turno++;
    actualizarDisplay();
  } else {
    // Mostramos un error si el turno supera el límite
    mostrarError("El turno máximo permitido es 99");
  }
});

// Función para decrementar el turno
btnAnterior.addEventListener("click", () => {
  if (turno > 1) {
    turno--; // Evitamos valores negativos
    actualizarDisplay();
  } else {
    // Mostramos un error si intentamos ir por debajo de 1
    mostrarError("El turno mínimo permitido es 1");
  }
});

// Función para resetear el turno
btnReset.addEventListener("click", () => {
  turno = 1;
  actualizarDisplay();
});

// Función para cambiar el turno manualmente
btnCambiar.addEventListener("click", () => {
  const nuevoTurno = parseInt(inputTurno.value, 10);
  if (!isNaN(nuevoTurno) && nuevoTurno >= 1 && nuevoTurno <= 99) {
    // Cambiamos el turno solo si está dentro de los límites
    turno = nuevoTurno;
    actualizarDisplay();
  } else if (nuevoTurno < 1 || isNaN(nuevoTurno)) {
    // Error para números menores de 1 o valores no válidos
    mostrarError("Por favor, ingrese un turno válido mayor o igual a 1.");
  } else if (nuevoTurno > 99) {
    // Error para números mayores a 99
    mostrarError("Por favor, ingrese un turno válido menor o igual a 99.");
  }
  inputTurno.value = ""; // Limpiar el campo de entrada
});

// Inicializar el display al cargar la página
actualizarDisplay();
