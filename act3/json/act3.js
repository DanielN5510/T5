document.addEventListener("DOMContentLoaded", () => {
    cargarTareas();
    const formularioTarea = document.getElementById("formulario tarea");
    formularioTarea.addEventListener("submit", (e) => {
        e.preventDefault();
        agregarTarea();
    });
});
async function cargarTareas() {
    const respuesta = await fetch('/act3/json/act3.json');
    const tareas = await respuesta.json();
    const tablaTareas = document.getElementById("Tabla tareas");
    tablaTareas.innerHTML = '';
    tareas.forEach((tarea) => {
        const fila = document.createElement("tr");
        fila.setAttribute("data-id", tarea.id);
        fila.innerHTML = `
            <td>${tarea.nombre}</td>
            <td>${tarea.fecha_entrega}</td>
            <td><input type="checkbox" ${tarea.completada}></td>
            <td><button onclick="eliminarTarea(${tarea.id})">Eliminar</button></td>
        `;
        tablaTareas.appendChild(fila);
    });
}
function agregarTarea() {
    const nombreTarea = document.getElementById("nombre tarea").value;
    const fechaEntrega = document.getElementById("fecha entrega").value;
    const nuevaTarea = {
        id: Date.now(),
        nombre: nombreTarea,
        fecha_entrega: fechaEntrega,
        completada: false
    };
    const tablaTareas = document.getElementById("Tabla tareas");
    const fila = document.createElement("tr");
    fila.setAttribute("data-id", nuevaTarea.id);
    fila.innerHTML = `
        <td>${nuevaTarea.nombre}</td>
        <td>${nuevaTarea.fecha_entrega}</td>
        <td><input type="checkbox"></td>
        <td><button onclick="eliminarTarea(${nuevaTarea.id})">Eliminar</button></td>
    `;
    tablaTareas.appendChild(fila);
}
function eliminarTarea(idTarea) {
    const filaTarea = document.querySelector(`tr[data-id='${idTarea}']`);
    if (filaTarea) {
        filaTarea.remove();
    }
}