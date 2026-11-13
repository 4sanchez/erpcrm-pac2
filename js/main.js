/*
 * Formulari de contacte (support.html)
 * GitHub Pages només serveix fitxers estàtics i no pot processar formularis.
 * Aquest script valida els camps i mostra un missatge de confirmació sense enviar res.
 */
(function () {
  "use strict";

  var form = document.getElementById("form-contacte");
  if (!form) {
    return;
  }
  var status = document.getElementById("form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Si falta algun camp obligatori, el navegador mostra l'avís i hi porta el focus
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var nom = form.elements.nom.value.trim().split(" ")[0];
    status.textContent = "Gràcies, " + nom + "! Hem rebut la teva consulta i et respondrem aviat.";
    status.hidden = false;
    form.reset();
    status.focus();
  });
})();
