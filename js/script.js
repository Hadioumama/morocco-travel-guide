document.addEventListener("DOMContentLoaded", function() {

    // Sélectionner tous les boutons favoris
    document.querySelectorAll(".favori-btn").forEach(btn => {

        // Ajouter l'événement clic
        btn.addEventListener("click", function(event) {
            event.preventDefault();  // empêche le lien <a> de s'activer
            event.stopPropagation(); // empêche la propagation vers la carte

            let ville = btn.getAttribute("data-ville");
            let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

            if (!favoris.includes(ville)) {
                // Ajouter aux favoris
                favoris.push(ville);
                btn.classList.add("favori-actif");
                btn.textContent = '♥'; // cœur rempli rouge
            } else {
                // Retirer des favoris
                favoris = favoris.filter(v => v !== ville);
                btn.classList.remove("favori-actif");
                btn.textContent = '♡'; // cœur vide
            }

            localStorage.setItem("favoris", JSON.stringify(favoris));

            // Mettre à jour la liste des favoris seulement
            afficherListeFavoris();
        });
    });

    // Mettre à jour l'état des boutons au chargement
    mettreAJourBoutons();
});

// Mettre à jour tous les boutons selon les favoris sauvegardés
function mettreAJourBoutons() {
    let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

    document.querySelectorAll(".favori-btn").forEach(btn => {
        let ville = btn.getAttribute("data-ville");
        if (favoris.includes(ville)) {
            btn.classList.add("favori-actif");
            btn.textContent = '♥';
        } else {
            btn.classList.remove("favori-actif");
            btn.textContent = '♡';
        }
    });
}

// Fonction qui met à jour les boutons selon les favoris
function mettreAJourBoutons() {
    let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

    document.querySelectorAll(".favori-btn").forEach(btn => {
        let ville = btn.getAttribute("data-ville");
        if (favoris.includes(ville)) {
            btn.classList.add("favori-actif"); // cœur rempli rouge
            btn.textContent = '♥';
        } else {
            btn.classList.remove("favori-actif"); // cœur vide
            btn.textContent = '♡';
        }
    });
}

// Appeler cette fonction au chargement
window.addEventListener("DOMContentLoaded", mettreAJourBoutons);

// Sélectionner le bouton existant
document.querySelectorAll(".favori-btn").forEach(btn => {
    btn.addEventListener("click", function(event){
        event.stopPropagation(); // empêche la propagation au lien parent
        window.alert("distination ajouté au favoris");
    });
});
