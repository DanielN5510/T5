document.addEventListener("DOMContentLoaded", cargarPersonajes);
var characters = [];
function cargarPersonajes() {
    fetch('/act1/json/personajes.json')
        .then(response => response.json())
        .then(data => {
            characters = data;
            filtrarPersonajes(characters);
        });
}

function mostrarPersonajes(data) {
    const listaPersonajes = document.getElementById('listaPersonajes');
    listaPersonajes.innerHTML = " ";
    data.forEach (element => {
        let li = document.createElement("li");
        li.innerHTML = `
            <h3>${element.nombre} (Edad: ${element.edad})</h3>
            <p>${element.descripcion}</p>
            <p><strong>Universo:</strong> ${element.universo}</p>
        `;
        listaPersonajes.append(li)
    })
}

function filtrarPersonajes(characters) {
    var universoFiltro = document.getElementById("universoFiltro").value;
    console.log(universoFiltro);
    if (universoFiltro != "Todos"){
        personajesFiltrados = characters.filter(pj => pj.universo === universoFiltro);
        mostrarPersonajes(personajesFiltrados);
    }else{
        mostrarPersonajes(characters);
    }
}