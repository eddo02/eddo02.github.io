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
                "../img/certificados/titulo.png",

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
                "../img/certificados/titulo.png",

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
                "../img/certificados/titulo.png",

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
                "../img/certificados/titulo.png",

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
                "../img/certificados/titulo.png",

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
           LIDERAZGO
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
                "../img/certificados/titulo.png",

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
                es: "Formación sobre el panorama y principales aspectos de la industria energética.",
                en: "Training on the landscape and key aspects of the energy industry."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "energia",
                    es: "Energía",
                    en: "Energy"
                },
                {
                    id: "industria",
                    es: "Industria",
                    en: "Industry"
                },
                {
                    id: "gestion-energetica",
                    es: "Gestión Energética",
                    en: "Energy Management"
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
                        es: "Ver certificados",
                        en: "View certificates"
                    },

                    url:
                        "https://drive.google.com/drive/folders/1xw9Wygc6enxCMIT_mb7NyyAtIF25_aTV?usp=drive_link"
                }
            ]
        },


        /* ================================================
           INFOP - ADMINISTRACIÓN DE MANTENIMIENTO
        ================================================= */

        {
            titulo: {
                es: "Administración de Mantenimiento",
                en: "Maintenance Management"
            },

            descripcion: {
                es: "Capacitación en administración y gestión de actividades de mantenimiento.",
                en: "Training in maintenance administration and management."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "mantenimiento",
                    es: "Mantenimiento",
                    en: "Maintenance"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
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
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },


        /* ================================================
           INFOP - ADMINISTRACIÓN DEL TIEMPO
        ================================================= */

        {
            titulo: {
                es: "Administración del Tiempo",
                en: "Time Management"
            },

            descripcion: {
                es: "Capacitación orientada a la organización y administración eficiente del tiempo.",
                en: "Training focused on efficient time management and organization."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
                },
                {
                    id: "productividad",
                    es: "Productividad",
                    en: "Productivity"
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
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },


        /* ================================================
           INFOP - GESTIÓN DEL TALENTO HUMANO
        ================================================= */

        {
            titulo: {
                es: "Gestión del Talento Humano",
                en: "Human Talent Management"
            },

            descripcion: {
                es: "Capacitación en gestión del talento humano y administración de personas.",
                en: "Training in human talent and people management."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "recursos-humanos",
                    es: "Recursos Humanos",
                    en: "Human Resources"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
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
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },


        /* ================================================
           INFOP - LIDERAZGO
        ================================================= */

        {
            titulo: {
                es: "Liderazgo",
                en: "Leadership"
            },

            descripcion: {
                es: "Capacitación orientada al desarrollo de habilidades de liderazgo.",
                en: "Training focused on leadership skills development."
            },

            imagen:
                "../img/certificados/titulo.png",

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
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },


        /* ================================================
           INFOP - MOTIVACIÓN AL TRABAJO
        ================================================= */

        {
            titulo: {
                es: "Motivación al Trabajo",
                en: "Work Motivation"
            },

            descripcion: {
                es: "Capacitación orientada al desarrollo de la motivación y el desempeño laboral.",
                en: "Training focused on motivation and workplace performance."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "liderazgo",
                    es: "Liderazgo",
                    en: "Leadership"
                },
                {
                    id: "desarrollo-profesional",
                    es: "Desarrollo Profesional",
                    en: "Professional Development"
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
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },


        /* ================================================
           INFOP - ORATORIA
        ================================================= */

        {
            titulo: {
                es: "Oratoria",
                en: "Public Speaking"
            },

            descripcion: {
                es: "Capacitación enfocada en comunicación oral y expresión efectiva.",
                en: "Training focused on oral communication and effective speaking."
            },

            imagen:
                "/img/certificados/titulo.png",

            tags: [
                {
                    id: "comunicacion",
                    es: "Comunicación",
                    en: "Communication"
                },
                {
                    id: "desarrollo-profesional",
                    es: "Desarrollo Profesional",
                    en: "Professional Development"
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
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },


        /* ================================================
           INFOP - DEBERES Y DERECHOS LABORALES
        ================================================= */

        {
            titulo: {
                es: "Deberes y Derechos Laborales",
                en: "Labor Rights and Duties"
            },

            descripcion: {
                es: "Capacitación sobre derechos, deberes y aspectos fundamentales del ámbito laboral.",
                en: "Training on fundamental labor rights, duties, and workplace matters."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "legislacion-laboral",
                    es: "Legislación Laboral",
                    en: "Labor Law"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
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
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },


        /* ================================================
           INFOP - ADMINISTRACIÓN BÁSICA PARA MIPYMES
        ================================================= */

        {
            titulo: {
                es: "Introducción a la Administración Básica para MIPYMES",
                en: "Introduction to Basic Administration for MSMEs"
            },

            descripcion: {
                es: "Capacitación introductoria en administración y gestión básica para micro, pequeñas y medianas empresas.",
                en: "Introductory training in basic administration and management for micro, small, and medium-sized enterprises."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "administracion",
                    es: "Administración",
                    en: "Administration"
                },
                {
                    id: "emprendimiento",
                    es: "Emprendimiento",
                    en: "Entrepreneurship"
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
                        "https://drive.google.com/drive/folders/1WioGWURs2fA8LvZUpa-_nMiT-a7KQwt5?usp=drive_link"
                }
            ]
        },

        /* ================================================
           CIMEQH - EMISIONES
        ================================================= */

        {
            titulo: {
                es: "Análisis de Emisiones de Fuentes Fijas y Móviles",
                en: "Analysis of Emissions from Stationary and Mobile Sources"
            },

            descripcion: {
                es: "Capacitación sobre análisis y evaluación de emisiones provenientes de fuentes fijas y móviles.",
                en: "Training on the analysis and evaluation of emissions from stationary and mobile sources."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "energia",
                    es: "Energía",
                    en: "Energy"
                },
                {
                    id: "medio-ambiente",
                    es: "Medio Ambiente",
                    en: "Environment"
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
                        "https://drive.google.com/drive/folders/1csQN5DwePUnSDBZbWYe01q-qdy7kgLjL?usp=drive_link"
                }
            ]
        },


        /* ================================================
           CIMEQH - ADMINISTRACIÓN DE PERSONAL
        ================================================= */

        {
            titulo: {
                es: "Administración de Personal",
                en: "Personnel Administration"
            },

            descripcion: {
                es: "Capacitación relacionada con la administración y gestión del personal.",
                en: "Training related to personnel administration and management."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "recursos-humanos",
                    es: "Recursos Humanos",
                    en: "Human Resources"
                },
                {
                    id: "gestion",
                    es: "Gestión",
                    en: "Management"
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
                        "https://drive.google.com/drive/folders/1csQN5DwePUnSDBZbWYe01q-qdy7kgLjL?usp=drive_link"
                }
            ]
        },


        /* ================================================
           CIMEQH - SUPRESORES
        ================================================= */

        {
            titulo: {
                es: "Supresores de Transientes",
                en: "Transient Voltage Suppressors"
            },

            descripcion: {
                es: "Capacitación sobre protección de sistemas eléctricos mediante supresores de transientes.",
                en: "Training on electrical system protection using transient voltage suppressors."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "electricidad",
                    es: "Electricidad",
                    en: "Electrical"
                },
                {
                    id: "proteccion-electrica",
                    es: "Protección Eléctrica",
                    en: "Electrical Protection"
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
                        "https://drive.google.com/drive/folders/1csQN5DwePUnSDBZbWYe01q-qdy7kgLjL?usp=drive_link"
                }
            ]
        },


        /* ================================================
           CIMEQH - DISTRIBUCIÓN ELÉCTRICA
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
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "electricidad",
                    es: "Electricidad",
                    en: "Electrical"
                },
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
                    id: "cimeqh",
                    es: "CIMEQH",
                    en: "CIMEQH"
                },
                {
                    id: "schneider",
                    es: "Schneider Electric",
                    en: "Schneider Electric"
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
           HUAWEI - REDES
        ================================================= */

        {
            titulo: {
                es: "Redes de Computadoras",
                en: "Computer Networks"
            },

            descripcion: {
                es: "Formación en fundamentos y tecnologías de redes de computadoras.",
                en: "Training in computer networking fundamentals and technologies."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "redes",
                    es: "Redes",
                    en: "Networking"
                },
                {
                    id: "telecomunicaciones",
                    es: "Telecomunicaciones",
                    en: "Telecommunications"
                },
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/16k7AEKfkuDU1dLHAy28VboxS166kFM_0?usp=drive_link"
                }
            ]
        },


        /* ================================================
           HUAWEI - 5G
        ================================================= */

        {
            titulo: {
                es: "Tecnologías 5G",
                en: "5G Technologies"
            },

            descripcion: {
                es: "Formación relacionada con fundamentos y aplicaciones de las tecnologías 5G.",
                en: "Training related to the fundamentals and applications of 5G technologies."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "5g",
                    es: "5G",
                    en: "5G"
                },
                {
                    id: "telecomunicaciones",
                    es: "Telecomunicaciones",
                    en: "Telecommunications"
                },
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/16k7AEKfkuDU1dLHAy28VboxS166kFM_0?usp=drive_link"
                }
            ]
        },


        /* ================================================
           HUAWEI - CLOUD
        ================================================= */

        {
            titulo: {
                es: "Computación en la Nube",
                en: "Cloud Computing"
            },

            descripcion: {
                es: "Formación sobre fundamentos y tecnologías de computación en la nube.",
                en: "Training on cloud computing fundamentals and technologies."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "cloud",
                    es: "Computación en la Nube",
                    en: "Cloud Computing"
                },
                {
                    id: "tecnologia",
                    es: "Tecnología",
                    en: "Technology"
                },
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/16k7AEKfkuDU1dLHAy28VboxS166kFM_0?usp=drive_link"
                }
            ]
        },


        /* ================================================
           HUAWEI - INTELIGENCIA ARTIFICIAL
        ================================================= */

        {
            titulo: {
                es: "Inteligencia Artificial",
                en: "Artificial Intelligence"
            },

            descripcion: {
                es: "Formación introductoria en conceptos y aplicaciones de inteligencia artificial.",
                en: "Introductory training in artificial intelligence concepts and applications."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "ia",
                    es: "Inteligencia Artificial",
                    en: "Artificial Intelligence"
                },
                {
                    id: "tecnologia",
                    es: "Tecnología",
                    en: "Technology"
                },
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/16k7AEKfkuDU1dLHAy28VboxS166kFM_0?usp=drive_link"
                }
            ]
        },


        /* ================================================
           HUAWEI - IoT
        ================================================= */

        {
            titulo: {
                es: "Internet de las Cosas (IoT)",
                en: "Internet of Things (IoT)"
            },

            descripcion: {
                es: "Formación relacionada con fundamentos y aplicaciones del Internet de las Cosas.",
                en: "Training related to Internet of Things fundamentals and applications."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "iot",
                    es: "IoT",
                    en: "IoT"
                },
                {
                    id: "tecnologia",
                    es: "Tecnología",
                    en: "Technology"
                },
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/16k7AEKfkuDU1dLHAy28VboxS166kFM_0?usp=drive_link"
                }
            ]
        },


        /* ================================================
           HUAWEI - CIBERSEGURIDAD
        ================================================= */

        {
            titulo: {
                es: "Ciberseguridad",
                en: "Cybersecurity"
            },

            descripcion: {
                es: "Formación en fundamentos de ciberseguridad y protección de sistemas y redes.",
                en: "Training in cybersecurity fundamentals and the protection of systems and networks."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "ciberseguridad",
                    es: "Ciberseguridad",
                    en: "Cybersecurity"
                },
                {
                    id: "seguridad",
                    es: "Seguridad",
                    en: "Security"
                },
                {
                    id: "redes",
                    es: "Redes",
                    en: "Networking"
                },
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/16k7AEKfkuDU1dLHAy28VboxS166kFM_0?usp=drive_link"
                }
            ]
        },


        /* ================================================
           HUAWEI - DATOS
        ================================================= */

        {
            titulo: {
                es: "Gestión y Análisis de Datos",
                en: "Data Management and Analysis"
            },

            descripcion: {
                es: "Formación relacionada con la gestión, procesamiento y análisis de datos.",
                en: "Training related to data management, processing, and analysis."
            },

            imagen:
                "../img/certificados/titulo.png",

            tags: [
                {
                    id: "datos",
                    es: "Datos",
                    en: "Data"
                },
                {
                    id: "analisis-datos",
                    es: "Análisis de Datos",
                    en: "Data Analysis"
                },
                {
                    id: "tecnologia",
                    es: "Tecnología",
                    en: "Technology"
                },
                {
                    id: "huawei",
                    es: "Huawei",
                    en: "Huawei"
                }
            ],

            enlaces: [
                {
                    texto: {
                        es: "Ver certificado",
                        en: "View certificate"
                    },

                    url:
                        "https://drive.google.com/drive/folders/16k7AEKfkuDU1dLHAy28VboxS166kFM_0?usp=drive_link"
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