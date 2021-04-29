let txt1 = document.getElementById('txt1');

const database =firebase.database();

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/nuevoTopico').push({
        campo1: txt1.value
    }).key;
    txt1.value=""
});