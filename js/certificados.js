/* =========================================================
   CERTIFICADOS
   Datos + generación + filtros
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       CONFIGURACIÓN DE IDIOMA
    ====================================================== */

    const isEnglish =
        document.documentElement.lang === "en";


    const text = {

        es: {
            clearFilters: "Limpiar filtros",

            filterHelp:
                "Haz clic una vez para incluir, dos veces para excluir y tres veces para volver al estado neutro.",

            certificateSingular: "certificado",

            certificatePlural: "certificados",

            viewCertificate: "Ver certificado →",

            noResultsTitle:
                "No se encontraron certificados",

            noResultsDescription:
                "No hay certificados que coincidan con los filtros seleccionados.",

            noTags:
                "No hay filtros disponibles."

        },

        en: {
            clearFilters: "Clear filters",

            filterHelp:
                "Click once to include, twice to exclude, and three times to return to neutral.",

            certificateSingular: "certificate",

            certificatePlural: "certificates",

            viewCertificate: "View certificate →",

            noResultsTitle:
                "No certificates found",

            noResultsDescription:
                "No certificates match the selected filters.",

            noTags:
                "No filters available."

        }

    };


    const ui =
        isEnglish
            ? text.en
            : text.es;


    /* =====================================================
       DATOS
    ====================================================== */
    const certificados = [


        /* ================================================
           NFPA 70E
        ================================================= */

        {
            titulo: {
                es: "NFPA 70E",
                en: "NFPA 70E"
            },

            descripcion: {
                es: "Fundamentos de la Norma NFPA 70E “Norma para la Seguridad Eléctrica en Lugares de Trabajo”.",
                en: "Fundamentals of NFPA 70E, “Standard for Electrical Safety in the Workplace.”"
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "nfpa-70e",
                    es: "NFPA 70E",
                    en: "NFPA 70E"
                },
                {
                    id: "seguridad-electrica",
                    es: "Seguridad Eléctrica",
                    en: "Electrical Safety"
                },
                {
                    id: "cargill",
                    es: "Cargill",
                    en: "Cargill"
                },
                {
                    id: "grupo-abc",
                    es: "Grupo ABC Ingenieros",
                    en: "Grupo ABC Ingenieros"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/17zNIBl-dJZozlRN5eRyR3YqF1JuL70OJ/view?usp=sharing"
                }
            ]
        },


        /* ================================================
           POWER BI
        ================================================= */

        {
            titulo: {
                es: "Power BI",
                en: "Power BI"
            },

            descripcion: {
                es: "Reconocimiento por la dedicación y esfuerzo en el dominio de competencias clave de Microsoft Power BI.",
                en: "Recognition for dedication and effort in mastering key Microsoft Power BI competencies."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "power-bi",
                    es: "Power BI",
                    en: "Power BI"
                },
                {
                    id: "analisis-datos",
                    es: "Análisis de Datos",
                    en: "Data Analysis"
                },
                {
                    id: "microsoft",
                    es: "Microsoft",
                    en: "Microsoft"
                },
                {
                    id: "cargill",
                    es: "Cargill",
                    en: "Cargill"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1L0rGZCOx386nbvcb7GvymAhYSYedEKUr/view?usp=sharing"
                }
            ]
        },


        /* ================================================
           ANÁLISIS DE PROBLEMAS TÉCNICOS
        ================================================= */

        {
            titulo: {
                es: "Análisis de problemas técnicos reales",
                en: "Technical Problem Analysis"
            },

            descripcion: {
                es: "Laboratorio práctico basado en un caso real de gestión energética desarrollado en Canadá.",
                en: "Practical laboratory based on a real energy management case developed in Canada."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "gestion-energetica",
                    es: "Gestión Energética",
                    en: "Energy Management"
                },
                {
                    id: "analisis-tecnico",
                    es: "Análisis Técnico",
                    en: "Technical Analysis"
                },
                {
                    id: "eficiencia-energetica",
                    es: "Eficiencia Energética",
                    en: "Energy Efficiency"
                },
                {
                    id: "nova-gaia",
                    es: "Nova Gaia Kefas",
                    en: "Nova Gaia Kefas"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1BJiH4iqvgWG7SJ6h4vmr6ol8dZbFgR4I/view?usp=sharing"
                }
            ]
        },


        /* ================================================
           DISTRIBUCIÓN ELÉCTRICA
        ================================================= */

        {
            titulo: {
                es: "Soluciones de Distribución Eléctrica",
                en: "Electrical Distribution Solutions"
            },

            descripcion: {
                es: "Capacitación sobre soluciones de distribución eléctrica para sistemas de baja y media tensión.",
                en: "Training on electrical distribution solutions for low- and medium-voltage systems."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "distribucion-electrica",
                    es: "Distribución Eléctrica",
                    en: "Electrical Distribution"
                },
                {
                    id: "baja-tension",
                    es: "Baja Tensión",
                    en: "Low Voltage"
                },
                {
                    id: "media-tension",
                    es: "Media Tensión",
                    en: "Medium Voltage"
                },
                {
                    id: "schneider",
                    es: "Schneider Electric",
                    en: "Schneider Electric"
                },
                {
                    id: "cimeqh",
                    es: "CIMEQH",
                    en: "CIMEQH"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1rEl2L9vdxwsBlSNqNRuDzPqsvNG5TyhI/view?usp=sharing"
                }
            ]
        },


        /* ================================================
           FORMULACIÓN DE PROYECTOS
        ================================================= */

        {
            titulo: {
                es: "Formulación y Evaluación de Proyectos",
                en: "Project Formulation and Evaluation"
            },

            descripcion: {
                es: "Curso a distancia enfocado en la formulación y evaluación de proyectos de inversión.",
                en: "Distance course focused on the formulation and evaluation of investment projects."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "gestion-proyectos",
                    es: "Gestión de Proyectos",
                    en: "Project Management"
                },
                {
                    id: "evaluacion-proyectos",
                    es: "Evaluación de Proyectos",
                    en: "Project Evaluation"
                },
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1LFweW9pIr3qq0_PdlY7Jr6U7VCPgZz0u/view?usp=sharing"
                }
            ]
        },


        /* ================================================
           LIDERAZGO (UNAM / Coursera)
        ================================================= */

        {
            titulo: {
                es: "Autoridad, Dirección y Liderazgo",
                en: "Authority, Management and Leadership"
            },

            descripcion: {
                es: "Curso en línea autorizado por la Universidad Nacional Autónoma de México y ofrecido a través de Coursera.",
                en: "Online course authorized by the National Autonomous University of Mexico and offered through Coursera."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "liderazgo",
                    es: "Liderazgo",
                    en: "Leadership"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                },
                {
                    id: "unam",
                    es: "UNAM",
                    en: "UNAM"
                },
                {
                    id: "coursera",
                    es: "Coursera",
                    en: "Coursera"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1BwN3TVcDDZSbpsn5MgDn0jMq1ffAhbvt/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           ENERGY INDUSTRY LANDSCAPE
        ================================================= */

        {
            titulo: {
                es: "Energy Industry Landscape",
                en: "Energy Industry Landscape"
            },

            descripcion: {
                es: "Curso sobre el panorama de la industria energética, impartido por Nova Gaia Kefas.",
                en: "Course on the energy industry landscape, taught by Nova Gaia Kefas."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "gestion-energetica",
                    es: "Gestión Energética",
                    en: "Energy Management"
                },
                {
                    id: "nova-gaia",
                    es: "Nova Gaia Kefas",
                    en: "Nova Gaia Kefas"
                },
                {
                    id: "energia",
                    es: "Energía",
                    en: "Energy"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1oHLGWKCRDe_rR5bIVkHFyM6miCFKlbWZ/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           ANÁLISIS DE EMISIONES DE FUENTES FIJAS Y MÓVILES
        ================================================= */

        {
            titulo: {
                es: "Análisis de Emisiones de Fuentes Fijas y Móviles",
                en: "Analysis of Emissions from Stationary and Mobile Sources"
            },

            descripcion: {
                es: "Capacitación sobre análisis de emisiones, impartida por CIMEQH y SERVIR MEDIO AMBIENTE.",
                en: "Training on emissions analysis, taught by CIMEQH and SERVIR MEDIO AMBIENTE."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "cimeqh",
                    es: "CIMEQH",
                    en: "CIMEQH"
                },
                {
                    id: "analisis-tecnico",
                    es: "Análisis Técnico",
                    en: "Technical Analysis"
                },
                {
                    id: "medio-ambiente",
                    es: "Medio Ambiente",
                    en: "Environment"
                },
                {
                    id: "energia",
                    es: "Energía",
                    en: "Energy"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/10vDLs4rAzTBzTaV4vQ04YIgeqM75UVpl/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           SUPRESORES DE TRANSIENTES
        ================================================= */

        {
            titulo: {
                es: "Supresores de Transientes",
                en: "Transient Suppressors"
            },

            descripcion: {
                es: "Curso sobre supresores de transientes, impartido por Schneider Electric y Distribuidora Industrial.",
                en: "Course on transient suppressors, taught by Schneider Electric and Distribuidora Industrial."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "schneider",
                    es: "Schneider Electric",
                    en: "Schneider Electric"
                },
                {
                    id: "distribucion-electrica",
                    es: "Distribución Eléctrica",
                    en: "Electrical Distribution"
                },
                {
                    id: "electricidad",
                    es: "Electricidad",
                    en: "Electricity"
                },
                {
                    id: "proteccion",
                    es: "Protección",
                    en: "Protection"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1rZ1JCgS03EIbw9dE7SA9TFr-M6oaEpmV/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           ADMINISTRACIÓN DE CENTROS DE CÓMPUTO (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Administración de Centros de Cómputo",
                en: "Computer Center Administration"
            },

            descripcion: {
                es: "Curso de INFOP sobre administración de centros de cómputo.",
                en: "INFOP course on computer center administration."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1o_PW9F0ItBHN7leiCrqH35BbK48O6v6z/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           CONTABILIDAD BÁSICA 1 PARA NO CONTADORES (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Contabilidad Básica 1 para No Contadores",
                en: "Basic Accounting 1 for Non-Accountants"
            },

            descripcion: {
                es: "Curso de INFOP sobre contabilidad básica para no contadores.",
                en: "INFOP course on basic accounting for non-accountants."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1QIPIszs16MzMdFg6cN3dkUBMcjgh4E75/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           CONTABILIDAD BÁSICA 2 PARA NO CONTADORES (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Contabilidad Básica 2 para No Contadores",
                en: "Basic Accounting 2 for Non-Accountants"
            },

            descripcion: {
                es: "Curso de INFOP sobre contabilidad básica para no contadores.",
                en: "INFOP course on basic accounting for non-accountants."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1hMNgwDIomvwNkMZjnbVETjXc61HxlxHb/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           ETIQUETA Y PROTOCOLO (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Etiqueta y Protocolo",
                en: "Etiquette and Protocol"
            },

            descripcion: {
                es: "Curso de INFOP sobre etiqueta y protocolo.",
                en: "INFOP course on etiquette and protocol."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1C6oJJCdOzmE8cf5x9X7SViT3Qx7KhJOC/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           INGLÉS BÁSICO (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Inglés Básico",
                en: "Basic English"
            },

            descripcion: {
                es: "Curso de INFOP para reforzar el dominio del idioma inglés.",
                en: "INFOP course to reinforce English language proficiency."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1cPGFeiIZyt_efoIJPpO1k61865Af8twO/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           MS. EXCEL AVANZADO (INFOP)
        ================================================= */

        {
            titulo: {
                es: "MS. Excel Avanzado",
                en: "MS Excel Advanced"
            },

            descripcion: {
                es: "Curso de INFOP sobre Microsoft Excel avanzado, incluyendo macros.",
                en: "INFOP course on advanced Microsoft Excel, including macros."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "analisis-datos",
                    es: "Análisis de Datos",
                    en: "Data Analysis"
                },
                {
                    id: "excel",
                    es: "Excel",
                    en: "Excel"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1TM10NxN3RKf2z3ZXYrO-wXlvkdtSZuZ7/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           PROGRAMAR EN PYTHON (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Programar en Python",
                en: "Programming in Python"
            },

            descripcion: {
                es: "Curso de INFOP sobre programación en Python.",
                en: "INFOP course on programming in Python."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "analisis-datos",
                    es: "Análisis de Datos",
                    en: "Data Analysis"
                },
                {
                    id: "python",
                    es: "Python",
                    en: "Python"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/19U5cLc4mFu8BAXsY0XqlY8qBXnYMr2OG/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           ADMINISTRACIÓN DE MANTENIMIENTO (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Administración de Mantenimiento",
                en: "Maintenance Management"
            },

            descripcion: {
                es: "Curso de INFOP sobre administración de mantenimiento.",
                en: "INFOP course on maintenance management."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                },
                {
                    id: "mantenimiento",
                    es: "Mantenimiento",
                    en: "Maintenance"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },

        /* ================================================
           ADMINISTRACIÓN DEL TIEMPO (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Administración del Tiempo",
                en: "Time Management"
            },

            descripcion: {
                es: "Curso de INFOP sobre administración del tiempo.",
                en: "INFOP course on time management."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },

        /* ================================================
           GESTIÓN DEL TALENTO HUMANO (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Gestión del Talento Humano",
                en: "Human Talent Management"
            },

            descripcion: {
                es: "Curso de INFOP sobre gestión del talento humano.",
                en: "INFOP course on human talent management."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },

        /* ================================================
           LIDERAZGO (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Liderazgo",
                en: "Leadership"
            },

            descripcion: {
                es: "Curso de INFOP sobre liderazgo.",
                en: "INFOP course on leadership."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "liderazgo",
                    es: "Liderazgo",
                    en: "Leadership"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },

        /* ================================================
           MOTIVACIÓN AL TRABAJO (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Motivación al Trabajo",
                en: "Work Motivation"
            },

            descripcion: {
                es: "Curso de INFOP sobre motivación al trabajo.",
                en: "INFOP course on work motivation."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },

        /* ================================================
           ORATORIA (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Oratoria",
                en: "Public Speaking"
            },

            descripcion: {
                es: "Curso de INFOP sobre oratoria.",
                en: "INFOP course on public speaking."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },

        /* ================================================
           DEBERES Y DERECHOS LABORALES (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Deberes y Derechos Laborales",
                en: "Labor Duties and Rights"
            },

            descripcion: {
                es: "Curso de INFOP sobre deberes y derechos laborales.",
                en: "INFOP course on labor duties and rights."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },

        /* ================================================
           INTRODUCCIÓN A LA ADMINISTRACIÓN BÁSICA PARA MIPYMES (INFOP)
        ================================================= */

        {
            titulo: {
                es: "Introducción a la Administración Básica para MIPYMES",
                en: "Introduction to Basic Administration for MSMEs"
            },

            descripcion: {
                es: "Curso de INFOP sobre administración básica para MIPYMES.",
                en: "INFOP course on basic administration for MSMEs."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "infop",
                    es: "INFOP",
                    en: "INFOP"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },

        /* ================================================
           ADMINISTRACIÓN DE PERSONAL (CIMEQH)
        ================================================= */

        {
            titulo: {
                es: "Administración de Personal",
                en: "Personnel Administration"
            },

            descripcion: {
                es: "Capacitación de CIMEQH sobre administración de personal.",
                en: "CIMEQH training on personnel administration."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "cimeqh",
                    es: "CIMEQH",
                    en: "CIMEQH"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                },
                {
                    id: "administracion",
                    es: "Administración",
                    en: "Administration"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/1csQN5DwePUnSDBZbWYe01q-qdy7kgLjL?usp=drive_link"
                }
            ]
        },

        /* ================================================
           5G BASICS (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "5G Basics: What it's all about",
                en: "5G Basics: What it's all about"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre fundamentos de 5G.",
                en: "Huawei ICT Academy course on 5G fundamentals."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "5g",
                    es: "5G",
                    en: "5G"
                },
                {
                    id: "redes",
                    es: "Redes",
                    en: "Networks"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1AdvS4CHRuBM_u8uKvU_pthr68WY3iuyU/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           5G NETWORK ARCHITECTURE (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "5G Network Architecture and Key Technologies",
                en: "5G Network Architecture and Key Technologies"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre arquitectura y tecnologías clave de 5G.",
                en: "Huawei ICT Academy course on 5G architecture and key technologies."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "5g",
                    es: "5G",
                    en: "5G"
                },
                {
                    id: "redes",
                    es: "Redes",
                    en: "Networks"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/15gW2OsM39dDfE35ODWkKzSF5h_wfD0RZ/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           CLOUD ADVANCED (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "Cloud Advanced: Architecture and Technologies",
                en: "Cloud Advanced: Architecture and Technologies"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre arquitectura y tecnologías avanzadas de nube.",
                en: "Huawei ICT Academy course on advanced cloud architecture and technologies."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "cloud",
                    es: "Cloud",
                    en: "Cloud"
                },
                {
                    id: "redes",
                    es: "Redes",
                    en: "Networks"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/17UOYS3DBGEte5PMUKOlOzlGz87GT34IL/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           CLOUD BASICS (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "Cloud Basics: Development and Basic Concepts",
                en: "Cloud Basics: Development and Basic Concepts"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre conceptos básicos y desarrollo en la nube.",
                en: "Huawei ICT Academy course on cloud basics and development."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "cloud",
                    es: "Cloud",
                    en: "Cloud"
                },
                {
                    id: "redes",
                    es: "Redes",
                    en: "Networks"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1zMomvdWzQ8qfumWYSjQ--sBWIa2Z-PYk/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           COMPUTER NETWORK (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "Computer Network",
                en: "Computer Network"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre redes de computadoras.",
                en: "Huawei ICT Academy course on computer networks."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "redes",
                    es: "Redes",
                    en: "Networks"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1LF-DNbw6_-3t6-UmQPv2WGjIex5y1NUL/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           DATA MANAGEMENT AND ANALYSIS (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "Data Management and Analysis",
                en: "Data Management and Analysis"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre gestión y análisis de datos.",
                en: "Huawei ICT Academy course on data management and analysis."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "datos",
                    es: "Datos",
                    en: "Data"
                },
                {
                    id: "analisis-datos",
                    es: "Análisis de Datos",
                    en: "Data Analysis"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1Ze3tDfSNQYMBp19M-X0mJismxp84gpSt/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           INFORMATION REPRESENTATION (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "Information Representation and Data Organization",
                en: "Information Representation and Data Organization"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre representación de información y organización de datos.",
                en: "Huawei ICT Academy course on information representation and data organization."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "datos",
                    es: "Datos",
                    en: "Data"
                },
                {
                    id: "analisis-datos",
                    es: "Análisis de Datos",
                    en: "Data Analysis"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1tquUnqKo-e7t5vdOpgCugC0boss8cGlt/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           NEXT-GEN CYBER SECURITY (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "Next-Generation Cyber Security",
                en: "Next-Generation Cyber Security"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre ciberseguridad de próxima generación.",
                en: "Huawei ICT Academy course on next-generation cyber security."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "seguridad",
                    es: "Seguridad",
                    en: "Security"
                },
                {
                    id: "ciberseguridad",
                    es: "Ciberseguridad",
                    en: "Cybersecurity"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1IDWxb7d6kdwrTOxr0de2cKppgGISUOBN/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           OVERVIEW OF AI (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "Overview of AI",
                en: "Overview of AI"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre introducción a la inteligencia artificial.",
                en: "Huawei ICT Academy course on introduction to artificial intelligence."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "ia",
                    es: "IA",
                    en: "AI"
                },
                {
                    id: "datos",
                    es: "Datos",
                    en: "Data"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1MjPoD_FXluYoDqrF2t-ZGS83GbzGdzp4/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           OVERVIEW OF IOT (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "Overview of IoT Technologies",
                en: "Overview of IoT Technologies"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre introducción a las tecnologías IoT.",
                en: "Huawei ICT Academy course on introduction to IoT technologies."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "iot",
                    es: "IoT",
                    en: "IoT"
                },
                {
                    id: "redes",
                    es: "Redes",
                    en: "Networks"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/15WS0_BD4SKBS0rXJrKn8VAGLU5xHq33v/view?usp=sharing"
                }
            ]
        },

        /* ================================================
           SEARCH AND AI (Huawei ICT Academy)
        ================================================= */

        {
            titulo: {
                es: "Search and AI",
                en: "Search and AI"
            },

            descripcion: {
                es: "Curso de Huawei ICT Academy sobre búsqueda e inteligencia artificial.",
                en: "Huawei ICT Academy course on search and artificial intelligence."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                },
                {
                    id: "ia",
                    es: "IA",
                    en: "AI"
                },
                {
                    id: "datos",
                    es: "Datos",
                    en: "Data"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/file/d/1UK1uP-dG7czMV4DLv7oxjDLmDPXcBMG4/view?usp=sharing"
                }
            ]
        }
    ];


    /* =====================================================
       ESTADO DE FILTROS
    ====================================================== */

    const filterStates = {};


    /* =====================================================
       ELEMENTOS DEL DOM
    ====================================================== */

    const certificatesContainer =
        document.getElementById(
            "certificates-container"
        );

    const filterTagsContainer =
        document.getElementById(
            "filter-tags"
        );

    const clearFiltersButton =
        document.getElementById(
            "clear-filters"
        );

    const certificatesCount =
        document.getElementById(
            "certificates-count"
        );

    const certificatesEmpty =
        document.getElementById(
            "certificates-empty"
        );

    const emptyTitle =
        certificatesEmpty.querySelector(
            "h2"
        );

    const emptyDescription =
        certificatesEmpty.querySelector(
            "p"
        );

    const filterHelp =
        document.getElementById(
            "filter-help"
        );
    const mobileFilterToggle =
        document.getElementById(
            "mobile-filter-toggle"
        );

    const filtersPanel =
        document.getElementById(
            "certificates-filters"
        );

    /* =====================================================
       UTILIDADES
    ====================================================== */

    function getText(value) {

        if (
            value &&
            typeof value === "object" &&
            value.es !== undefined
        ) {
            return isEnglish
                ? value.en
                : value.es;
        }

        return value;

    }


    function getAllTags() {

        const map = new Map();

        certificados.forEach((certificado) => {

            certificado.tags.forEach((tag) => {

                if (!map.has(tag.id)) {
                    map.set(tag.id, tag);
                }

            });

        });

        return Array.from(map.values());

    }


    function getActiveFilterIds() {

        return Object.entries(filterStates)
            .filter(
                ([, state]) => state !== "neutral"
            )
            .map(
                ([id]) => id
            );

    }


    /* =====================================================
       GENERAR TARJETA
    ====================================================== */

    function createCertificateCard(
        certificado
    ) {

        const article =
            document.createElement("article");

        article.className =
            "certificate-gallery-card";


        /* ---------- Imagen ---------- */

        const imageLink =
            document.createElement("a");

        imageLink.className =
            "certificate-gallery-image-link";

        imageLink.href =
            certificado.enlaces[0].url;

        imageLink.target =
            "_blank";

        imageLink.rel =
            "noopener noreferrer";


        const image =
            document.createElement("img");

        image.src =
            certificado.imagen;

        image.alt =
            getText(certificado.titulo);

        image.className =
            "certificate-gallery-image";


        imageLink.appendChild(image);


        /* ---------- Contenido ---------- */

        const content =
            document.createElement("div");

        content.className =
            "certificate-gallery-content";


        const title =
            document.createElement("h2");

        title.textContent =
            getText(certificado.titulo);


        const description =
            document.createElement("p");

        description.textContent =
            getText(certificado.descripcion);


        /* ---------- Tags ---------- */

        const tagsContainer =
            document.createElement("div");

        tagsContainer.className =
            "certificate-gallery-tags";


        certificado.tags.forEach((tag) => {

            const tagElement =
                document.createElement("span");

            tagElement.className =
                "certificate-gallery-tag";

            tagElement.textContent =
                getText(tag);

            tagsContainer.appendChild(
                tagElement
            );

        });


        /* ---------- Enlaces ---------- */

        const linksContainer =
            document.createElement("div");

        linksContainer.className =
            "certificate-gallery-links";


        certificado.enlaces.forEach(
            (link) => {

                const anchor =
                    document.createElement("a");

                anchor.href =
                    link.url;

                anchor.target =
                    "_blank";

                anchor.rel =
                    "noopener noreferrer";

                anchor.className =
                    "certificate-gallery-link";

                anchor.textContent =
                    getText(link.texto);


                linksContainer.appendChild(
                    anchor
                );

            }
        );


        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(tagsContainer);
        content.appendChild(linksContainer);


        article.appendChild(imageLink);
        article.appendChild(content);


        return article;

    }


    /* =====================================================
       APLICAR FILTROS
    ====================================================== */

    function certificateMatchesFilters(
        certificado
    ) {

        const included =
            Object.entries(filterStates)
                .filter(
                    ([, state]) =>
                        state === "include"
                )
                .map(
                    ([id]) => id
                );


        const excluded =
            Object.entries(filterStates)
                .filter(
                    ([, state]) =>
                        state === "exclude"
                )
                .map(
                    ([id]) => id
                );


        const certificateTagIds =
            certificado.tags.map(
                (tag) => tag.id
            );


        /* ---------- INCLUDE ---------- */

        const includesAll =
            included.every(
                (id) =>
                    certificateTagIds.includes(id)
            );


        if (!includesAll) {
            return false;
        }


        /* ---------- EXCLUDE ---------- */

        const includesExcluded =
            excluded.some(
                (id) =>
                    certificateTagIds.includes(id)
            );


        if (includesExcluded) {
            return false;
        }


        return true;

    }


    /* =====================================================
       OBTENER CERTIFICADOS VISIBLES
    ====================================================== */

    function getVisibleCertificates() {

        return certificados.filter(
            certificateMatchesFilters
        );

    }


    /* =====================================================
       GENERAR FILTROS
    ====================================================== */

    function renderFilters(
        visibleCertificates
    ) {

        filterTagsContainer.innerHTML =
            "";


        const availableTags =
            new Map();


        /*
         * Mostramos tags de los certificados
         * actualmente visibles.
         *
         * Los filtros que ya están activos
         * se conservan aunque temporalmente
         * no aparezcan en los resultados.
         */

        visibleCertificates.forEach(
            (certificado) => {

                certificado.tags.forEach(
                    (tag) => {

                        availableTags.set(
                            tag.id,
                            tag
                        );

                    }
                );

            }
        );


        getActiveFilterIds()
            .forEach((id) => {

                const tag =
                    getAllTags()
                        .find(
                            (item) =>
                                item.id === id
                        );

                if (tag) {
                    availableTags.set(
                        tag.id,
                        tag
                    );
                }

            });


        if (availableTags.size === 0) {

            const empty =
                document.createElement("p");

            empty.className =
                "filter-empty";

            empty.textContent =
                ui.noTags;

            filterTagsContainer.appendChild(
                empty
            );

            return;

        }


        const sortedTags =
            Array.from(availableTags.values())
                .sort((a, b) => {

                    const stateA =
                        filterStates[a.id] || "neutral";

                    const stateB =
                        filterStates[b.id] || "neutral";


                    /* -----------------------------------------
                       PRIORIDAD DE LOS ESTADOS
        
                       include → primero
                       exclude → segundo
                       neutral → último
                    ----------------------------------------- */

                    const priority = {
                        include: 0,
                        exclude: 1,
                        neutral: 2
                    };


                    const priorityA =
                        priority[stateA];

                    const priorityB =
                        priority[stateB];


                    /* -----------------------------------------
                       Primero ordenamos por estado
                    ----------------------------------------- */

                    if (priorityA !== priorityB) {
                        return priorityA - priorityB;
                    }


                    /* -----------------------------------------
                       Dentro del mismo estado,
                       orden alfabético
                    ----------------------------------------- */

                    const nameA =
                        getText(a).toLowerCase();

                    const nameB =
                        getText(b).toLowerCase();


                    return nameA.localeCompare(
                        nameB,
                        isEnglish ? "en" : "es"
                    );

                });


        sortedTags.forEach(
            (tag) => {

                if (
                    !filterStates[tag.id]
                ) {
                    filterStates[tag.id] =
                        "neutral";
                }


                const button =
                    document.createElement("button");

                button.type =
                    "button";

                button.className =
                    "certificate-filter-tag";


                const state =
                    filterStates[tag.id];


                button.dataset.state =
                    state;

                button.dataset.tagId =
                    tag.id;


                const textElement =
                    document.createElement("span");

                textElement.className =
                    "filter-tag-text";

                textElement.textContent =
                    getText(tag);


                const stateElement =
                    document.createElement("span");

                stateElement.className =
                    "filter-tag-state";


                if (state === "include") {

                    stateElement.textContent =
                        "✓";

                }
                else if (
                    state === "exclude"
                ) {

                    stateElement.textContent =
                        "×";

                }
                else {

                    stateElement.textContent =
                        "";

                }


                button.appendChild(
                    textElement
                );

                button.appendChild(
                    stateElement
                );


                button.addEventListener(
                    "click",
                    () => {

                        cycleFilterState(
                            tag.id
                        );

                    }
                );


                filterTagsContainer.appendChild(
                    button
                );

            }
        );

    }


    /* =====================================================
       CAMBIAR ESTADO DEL FILTRO
    ====================================================== */

    function cycleFilterState(
        tagId
    ) {

        const current =
            filterStates[tagId] ||
            "neutral";


        if (current === "neutral") {

            filterStates[tagId] =
                "include";

        }
        else if (
            current === "include"
        ) {

            filterStates[tagId] =
                "exclude";

        }
        else {

            filterStates[tagId] =
                "neutral";

        }


        renderGallery();

    }


    /* =====================================================
       GENERAR GALERÍA
    ====================================================== */

    function renderGallery() {

        const visibleCertificates =
            getVisibleCertificates();


        certificatesContainer.innerHTML =
            "";


        visibleCertificates.forEach(
            (certificado) => {

                certificatesContainer.appendChild(
                    createCertificateCard(
                        certificado
                    )
                );

            }
        );


        /* ---------- Contador ---------- */

        const count =
            visibleCertificates.length;


        if (count === 1) {

            certificatesCount.textContent =
                `1 ${ui.certificateSingular}`;

        }
        else {

            certificatesCount.textContent =
                `${count} ${ui.certificatePlural}`;

        }


        /* ---------- Sin resultados ---------- */

        const hasResults =
            count > 0;


        certificatesEmpty.hidden =
            hasResults;


        if (!hasResults) {

            emptyTitle.textContent =
                ui.noResultsTitle;

            emptyDescription.textContent =
                ui.noResultsDescription;

        }


        /* ---------- Filtros ---------- */

        renderFilters(
            visibleCertificates
        );

    }


    /* =====================================================
       LIMPIAR FILTROS
    ====================================================== */

    clearFiltersButton.textContent =
        ui.clearFilters;

    filterHelp.textContent =
        ui.filterHelp;


    clearFiltersButton.addEventListener(
        "click",
        () => {

            Object.keys(filterStates)
                .forEach((id) => {

                    filterStates[id] =
                        "neutral";

                });


            renderGallery();

        }
    );
    /* =====================================================
   FILTROS MÓVILES
===================================================== */

    if (
        mobileFilterToggle &&
        filtersPanel
    ) {

        mobileFilterToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    filtersPanel.classList.toggle(
                        "active"
                    );

                mobileFilterToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );

    }

    /* =====================================================
       INICIALIZAR
    ====================================================== */

    renderGallery();

});