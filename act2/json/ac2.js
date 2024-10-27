document.addEventListener("DOMContentLoaded", mostrarGastos);
var gastosJSON = [];
var total = 0;
function agregarGasto() {
    var nombre = document.getElementById('nombre').value;
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var fecha = document.getElementById('fecha').value;
    if (nombre === '' || isNaN(cantidad) || cantidad <= 0 || fecha === '') {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }
    var gasto = {
        nombre: nombre,
        cantidad: cantidad,
        fecha: fecha
    };
    gastosJSON.push(gasto);
    total += cantidad;
    document.getElementById('totalAcumulado').innerText = total.toFixed(2);
    mostrarGastos();
    document.getElementById('nombre').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('fecha').value = '';
}

function mostrarGastos() {
    var gastosList = document.getElementById('gastosList');
    gastosList.innerHTML = '';
    gastosJSON.forEach(function(gasto) {
        var li = document.createElement('li');
        li.innerText = `${gasto.nombre} - ${gasto.cantidad.toFixed(2)}€ (Fecha: ${gasto.fecha})`;
        gastosList.appendChild(li);
    });
}