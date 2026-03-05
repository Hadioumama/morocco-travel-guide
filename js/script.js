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

// Afficher seulement la liste des favoris
function afficherListeFavoris() {
    let favoris = JSON.parse(localStorage.getItem("favoris")) || [];
    let liste = document.getElementById("listeFavoris");
    if (liste) {
        liste.innerHTML = "";
        favoris.forEach(ville => {
            let li = document.createElement("li");
            li.textContent = ville;
            liste.appendChild(li);
        });
    }
}
