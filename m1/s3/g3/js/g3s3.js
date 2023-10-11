let bottone = document.getElementById('bottone');
let lista = document.getElementById('lista');

bottone.addEventListener('click', function () {

    let inputTesto = document.getElementById('testo');

    if (!inputTesto.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Non dimenticare di scrivere la tua task!',
        });
        return;
    }

    let li = document.createElement('li');
    li.innerText = inputTesto.value;
    li.className = 'taskItem'
    let elimina = document.createElement('button');
    elimina.innerText = 'Elimina';
    elimina.addEventListener('click', function () {
        li.remove();
    });

    let barrato = false;

    li.addEventListener('click', function () {
        barrato = !barrato;
        if (barrato) {
            li.style.textDecoration = 'line-through';
        } else {
            li.style.textDecoration = 'none';
        }
    });

    li.appendChild(elimina);
    lista.prepend(li);
    inputTesto.value = '';
});
