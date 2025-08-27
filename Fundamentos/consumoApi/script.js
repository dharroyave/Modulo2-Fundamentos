//Estandar -> ECMAScript6 - ECMAS6 - 2015
//Manejo de errores con try/catch

const cargarInformacion = async () => {

    try {
        const respuesta = await fetch('../json/persona.json');
        const persona = await respuesta.json();
        console.log('Datos de la persona:', persona);
        mostrarInfo(persona);
    } catch (error) {
        console.error('Error al cargar la información:', error);
        alert('Hubo un error inesperado, inténtelo de nuevo más tarde.');
    }
}

const cargarApi = async () => {
    try {
        const respuesta = await fetch('https://ghibliapi.vercel.app/films');
        const peliculas = await respuesta.json();
        console.log('Películas de Studio Ghibli:', peliculas);
    } catch (error) {
        console.error('Error al cargar la información:', error);
        alert('Hubo un error inesperado, inténtelo de nuevo más tarde.');
    }
}

const mostrarInfo = (persona) => {
    console.log('vamos a construir un html')

    const contenedor = document.getElementById('datos');

    contenedor.innerHTML = `
        <h2 class="miNombre">${persona.nombre}</h2>
            <p class="miEdad">Edad: ${persona.edad}</p>
            <div class="misHobbies" >
                <h3>Hobbies</h3>
                <ul>
                <li>${persona.hobbies[0]}</li>
                <li>${persona.hobbies[1]}</li>
                <li>${persona.hobbies[2]}</li>
                </ul>
            </div>
    `
}