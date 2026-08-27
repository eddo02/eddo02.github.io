document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       IDIOMA DE LA PÁGINA
    ========================================= */

    const isEnglish =
        document.documentElement.lang === "en";


    /* =========================================
       FRASE ALEATORIA DEL HERO
    ========================================= */

    const heroTitle =
        document.getElementById("hero-title");


    const phrasesES = [
        "Ingeniería que conecta ideas con soluciones.",
        "Automatización y control aplicados a problemas reales.",
        "De la ingeniería eléctrica a soluciones que funcionan.",
        "Tecnología aplicada a la industria.",
        "Ingeniería eléctrica con enfoque en automatización, análisis y mejora continua."
    ];


    const phrasesEN = [
        "Engineering that connects ideas with solutions.",
        "Automation and control applied to real-world problems.",
        "From electrical engineering to solutions that work.",
        "Technology applied to industry.",
        "Electrical engineering focused on automation, analysis, and continuous improvement."
    ];


    const phrases = isEnglish
        ? phrasesEN
        : phrasesES;


    const randomIndex = Math.floor(
        Math.random() * phrases.length
    );


    if (heroTitle) {

        heroTitle.textContent =
            phrases[randomIndex];

    }


    /* =========================================
       MENÚ RESPONSIVE
    ========================================= */

    const menuToggle =
        document.getElementById("menu-toggle");

    const navMenu =
        document.getElementById("nav-menu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navMenu.classList.toggle("active");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* =========================================
           CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
        ========================================= */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================================
       LUCIDE ICONS
    ========================================= */

    if (typeof lucide !== "undefined") {

        lucide.createIcons();

    }


    /* =========================================
       COPIAR CORREO
    ========================================= */

    const copyEmailButton =
        document.getElementById("copy-email");

    const copyFeedback =
        document.getElementById("copy-feedback");


    if (copyEmailButton && copyFeedback) {

        copyEmailButton.addEventListener(
            "click",
            async () => {

                const email =
                    "edgardo03alfredo@gmail.com";


                try {

                    await navigator.clipboard.writeText(
                        email
                    );


                    copyFeedback.textContent =
                        isEnglish
                            ? "✓ Email copied to clipboard"
                            : "✓ Correo copiado al portapapeles";


                    copyFeedback.classList.add(
                        "show"
                    );


                    setTimeout(() => {

                        copyFeedback.classList.remove(
                            "show"
                        );

                    }, 2500);


                } catch (error) {

                    copyFeedback.textContent =
                        isEnglish
                            ? "Unable to copy email"
                            : "No se pudo copiar el correo";


                    copyFeedback.classList.add(
                        "show"
                    );


                    setTimeout(() => {

                        copyFeedback.classList.remove(
                            "show"
                        );

                    }, 2500);

                }

            }
        );

    }

});
