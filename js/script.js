document.addEventListener("DOMContentLoaded", function () {

    let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

    document.querySelectorAll(".favori-btn").forEach(btn => {

        let ville = btn.getAttribute("data-ville");

        // cœur rempli si déjà favori
        if (favoris.includes(ville)) {
            btn.textContent = "♥";
            btn.classList.add("favori-actif");
        }

        btn.addEventListener("click", function(event) {

            event.preventDefault();
            event.stopPropagation();

            if (btn.textContent === "♡") {
                btn.textContent = "♥";
                btn.classList.add("favori-actif");
                favoris.push(ville);
            } else {
                btn.textContent = "♡";
                btn.classList.remove("favori-actif");
                favoris = favoris.filter(v => v !== ville);
            }

            localStorage.setItem("favoris", JSON.stringify(favoris));
        });

    });

});
