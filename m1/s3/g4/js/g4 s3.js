let tabella = document.getElementById('tabella');
let bottone = document.getElementById('bottone');
let numeriEstratti = new Set();

function generaTabellone() {
    for (let i = 1; i <= 76; i++) {
        let cella = document.createElement('div');
        cella.classList.add('cella');
        cella.textContent = i;
        tabella.appendChild(cella);
    }
}

function estraiNumero() {
    let numeroCasuale;
    do {
        numeroCasuale = Math.floor(Math.random() * 76) + 1;
    } while (numeriEstratti.has(numeroCasuale));

    numeriEstratti.add(numeroCasuale);
    let celle = document.querySelectorAll('.cella');
    celle[numeroCasuale - 1].classList.add('estratto');

    if (numeriEstratti.size === 76) {
        Swal.fire({
            title: 'Tutti i numeri sono stati estratti!',
            showDenyButton: true,
            confirmButtonText: 'Gioca di nuovo',
            denyButtonText: `Salva`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Salvato!', '', 'success');
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        });
        return;
    }
}

bottone.addEventListener('click', () => {
    estraiNumero();
});

generaTabellone();


let ancora = document.getElementById('ancora');
function illuminaAncora() {
    ancora.style.backgroundColor = 'yellow';
    ancora.style.border = '2px solid orange';
}

function spegniAncora() {
    ancora.style.backgroundColor = '';
    ancora.style.border = '';
}

setInterval(function() {
    illuminaAncora(); // chiamata per illuminare l'ancora
    setTimeout(spegniAncora, 500);
}, 1000);
