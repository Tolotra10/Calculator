//------------DOM------------
const ecran = document.querySelector('.ecran');
const touches = [...document.querySelectorAll('.bouton')];
//Afficher les keycodes de chaque touches 
const listeKeyCode = touches.map(touche => touche.dataset.key);

//------------Ecouteurs------------

//Ecouteurs sur les touches du claviers
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString;
})

//Ecouteurs sur click
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

//------------Fonctions------------
//Empecher les autres touches d'etre executer
//Donner une tache à chaque touche
function calculer(valeur) {
    if (listeKeyCode.includes(valeur)) {
        switch (valeur) {
            case "8":
                ecran.textContent = "";
                break;
            case "13":
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                //Recuperation de l'index de chaque
                const indexKeyCode = listeKeyCode.indexOf(valeur);
                //Recuperation de la touche à partir de l'index
                const touche = touches[indexKeyCode];
                //Afficher la touche sur l'ecran
                ecran.textContent += touche.innerHTML;
                break;
        }
    }
}
//En cas d'erreur
window.addEventListener('error', afficherErreur);

function afficherErreur(e) {
    alert('Une erreur est survenue lors de votre calcul:' + e.message);
}