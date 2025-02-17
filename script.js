document.addEventListener("DOMContentLoaded", function() {
    let habilidades = document.querySelectorAll(".habilidad");

    habilidades.forEach(function(habilidad) {
        habilidad.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        habilidad.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
