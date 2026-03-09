document.addEventListener("DOMContentLoaded", function () {

    const boutons = document.querySelectorAll(".favori-btn");

    boutons.forEach(btn => {

        btn.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            // remplir le cœur
            btn.textContent = "♥";
            btn.style.color = "whit";
  window.alert("Ville ajoutée aux favoris !");
            // afficher un message en haut
            let message = document.getElementById("messageFavori");

            message.textContent = "Ville ajoutée aux favoris 🤍";
            message.style.display = "block";

            // cacher le message après 3 secondes
            setTimeout(() => {
                message.style.display = "none";
            }, 3000);
        });

    });

});
