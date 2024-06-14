// Arreglo para almacenar las tareas
let tareas = [];

// Función para agregar una nueva tarea
function agregarTarea() {
  const nuevaTarea = document.getElementById('nuevaTarea').value.trim();
  if (nuevaTarea !== '') {
    tareas.push(nuevaTarea);
    actualizarListaTareas();
    document.getElementById('nuevaTarea').value = '';
  }
}

// Función para eliminar una tarea
function eliminarTarea(index) {
  tareas.splice(index, 1);
  actualizarListaTareas();
}

// Función para editar una tarea
function editarTarea(index) {
  const nuevaDescripcion = prompt('Ingresa la nueva descripción:', tareas[index]);
  if (nuevaDescripcion !== null && nuevaDescripcion.trim() !== '') {
    tareas[index] = nuevaDescripcion.trim();
    actualizarListaTareas();
  }
}

// Función para actualizar la lista de tareas
function actualizarListaTareas() {
  const listaElement = document.getElementById('lista');
  listaElement.innerHTML = '';
  tareas.forEach((tarea, index) => {
    const itemElement = document.createElement('li');
    const descripcionElement = document.createElement('span');
    descripcionElement.textContent = tarea;
    itemElement.appendChild(descripcionElement);
    const botonEditar = document.createElement('button');
    botonEditar.textContent = 'Editar';
    botonEditar.addEventListener('click', () => editarTarea(index));
    itemElement.appendChild(botonEditar);
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => eliminarTarea(index));
    itemElement.appendChild(botonEliminar);
    listaElement.appendChild(itemElement);
  });
}