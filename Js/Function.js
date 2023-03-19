document.addEventListener("DOMContentLoaded", () => {
    const mainBtn = document.getElementById("mainBtn");
    const loadingBox = document.getElementById("loadingBox");
    const loadingBar = document.getElementById("loadingBar");
    const successBox = document.getElementById("successBox");
    const okBtn = document.getElementById("okBtn");

    const messages = [
        "Paiement de vos dettes...",
		"Réparation de votre cœur brisé...",
		"Chargement gratuit,<br> un peu de patience !",
        "Traitement en cours...<br> même pour votre ego.",
        "Offert avec le sourire, patientez !",
		"Désolés pour l'attente,<br> on vous économise du temps.",
        "Publication de votre historique de navigation..."
    ];

    mainBtn.addEventListener("click", () => {
        mainBtn.classList.add("hidden");
        loadingBox.classList.remove("hidden");

        let progress = 0;
        let messageIndex = 0;

        function increaseLoading() {
            if (progress < 100) {
                progress++;
                loadingBar.style.width = `${progress}%`;

                setTimeout(increaseLoading, 215);
            } else {
                loadingBox.classList.add("hidden");
                successBox.classList.remove("hidden");
            }
        }

        increaseLoading();

        function showMessage() {
            if (messageIndex < messages.length) {
                document.getElementById("message").innerHTML = 							messages[messageIndex];
                messageIndex++;
                setTimeout(showMessage, 3200);
            }
        }

        showMessage();
    });

    okBtn.addEventListener("click", () => {
        successBox.classList.add("hidden");
        loadingBar.style.width = "0";
        mainBtn.classList.remove("hidden");
    });
});
