/**
 * COCACOLALANDIA CORE SYSTEM v4.3
 * Rediseño Premium del Centro de Preferencias y Fusión Alfabética de Juegos
 */

(function() {
    const head = document.head;

    // --- 1. MOTOR DE ESTILOS GLOBALES E INYECCIÓN DE UI (REDiseño PREMIUM) ---
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --primary: #ff003c; /* Rojo Cocacola vibrante */
            --primary-rgb: 255, 0, 60;
            --bg: #0d0d0d; /* Fondo ultra oscuro */
            --surface: #1a1a1a; /* Superficie ligeramente más clara */
            --border: rgba(255, 255, 255, 0.08);
            --font: 'Space Grotesk', sans-serif; /* Tu tipografía oficial unificada */
            --transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            --radius-main: 20px;
            --radius-sub: 10px;
        }

        body {
            font-family: var(--font);
            margin: 0;
            background: var(--bg);
            color: #eee;
        }

        /* --- REDISEÑO TOTAL TERMSFEED (CENTRO DE PREFERENCIAS) --- */
        
        /* Capa externa translúcida */
        .termsfeed-com---pc-dialog {
            background: rgba(0, 0, 0, 0.92) !important;
            backdrop-filter: blur(8px) !important;
            animation: fadeIn 0.4s ease-out;
        }

        /* Contenedor principal */
        .cc-pc-container {
            background: #141414 !important; /* Fondo interior sólido y oscuro */
            border: 2px solid var(--primary) !important;
            border-radius: var(--radius-main) !important;
            font-family: var(--font) !important;
            box-shadow: 0 10px 60px rgba(var(--primary-rgb), 0.3) !important;
            max-width: 900px !important;
            width: 90% !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
        }

        /* Cabecera */
        .cc-pc-head {
            background: #1a1a1a !important; /* Cabecera ligeramente diferente */
            border-bottom: 1px solid var(--border) !important;
            padding: 20px 30px !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
        }
        .cc-pc-head-title-text {
            color: var(--primary) !important;
            font-family: var(--font) !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            font-size: 1.3rem !important;
            letter-spacing: 2px !important;
        }
        #cc-pc-head-title-headline {
            color: #ffffff !important;
            font-family: var(--font) !important;
            font-weight: 600 !important;
            font-size: 1rem !important;
        }
        .cc-pc-head-close {
            color: #888888 !important;
            font-size: 1.4rem !important;
            transition: var(--transition) !important;
            background: none !important;
            border: none !important;
            cursor: pointer !important;
        }
        .cc-pc-head-close:hover {
            color: var(--primary) !important;
            transform: scale(1.1) rotate(90deg) !important;
        }
        .cc-pc-head-lang-select {
            background: #262626 !important;
            color: #ffffff !important;
            border: 1px solid var(--border) !important;
            border-radius: var(--radius-sub) !important;
            font-family: var(--font) !important;
            font-size: 0.9rem !important;
            padding: 6px 12px !important;
        }

        /* Cuerpo (Columnas) */
        .cc-cp-body {
            display: flex !important;
            flex: 1 !important;
            background: #141414 !important;
        }

        /* Columna Izquierda (Pestañas) */
        .cc-cp-body-tabs {
            border-right: 1px solid var(--border) !important;
            background: #1a1a1a !important; /* Mismo tono que la cabecera */
            padding: 20px !important;
            width: 300px !important;
            flex-shrink: 0 !important;
        }
        .cc-cp-body-tabs-item-link {
            border: none !important;
            background: transparent !important;
            color: #888888 !important;
            font-family: var(--font) !important;
            font-size: 0.95rem !important;
            font-weight: 600 !important;
            padding: 15px 20px !important;
            border-radius: var(--radius-sub) !important;
            width: 100% !important;
            text-align: left !important;
            cursor: pointer !important;
            transition: var(--transition) !important;
            display: block !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
        }
        .cc-cp-body-tabs-item-link:hover {
            background: rgba(var(--primary-rgb), 0.05) !important;
            color: #ffffff !important;
            padding-left: 25px !important; /* Desplazamiento lateral en hover */
        }
        .cc-cp-body-tabs-item[active="true"] .cc-cp-body-tabs-item-link {
            background: var(--primary) !important;
            color: #ffffff !important;
            box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
        }

        /* Columna Derecha (Contenido) */
        .cc-cp-body-content {
            padding: 30px !important;
            background: transparent !important;
        }
        .cc-cp-body-content-entry-title {
            font-family: var(--font) !important;
            color: #ffffff !important;
            font-weight: 700 !important;
            font-size: 1.3rem !important;
            margin-bottom: 20px !important;
        }
        .cc-cp-body-content-entry-text {
            font-family: var(--font) !important;
            color: #aaaaaa !important;
            font-size: 0.95rem !important;
            line-height: 1.7 !important;
            margin-bottom: 15px !important;
        }
        .cc-cp-body-content-entry-text a {
            color: var(--primary) !important;
            text-decoration: none !important;
        }
        .cc-cp-body-content-entry-text a:hover {
            text-decoration: underline !important;
        }

        /* Interruptores (Checkboxes) */
        .cc-custom-checkbox {
            background: rgba(255, 255, 255, 0.03) !important;
            border: 1px solid var(--border) !important;
            padding: 12px 20px !important;
            border-radius: var(--radius-sub) !important;
            display: flex !important;
            align-items: center !important;
            gap: 15px !important;
            margin-top: 25px !important;
        }
        .cc-custom-checkbox label {
            font-family: var(--font) !important;
            font-weight: 600 !important;
            color: var(--primary) !important;
            font-size: 0.9rem !important;
        }
        .cc-custom-checkbox label.is-inactive {
            color: #777777 !important;
        }
        .cc-custom-checkbox input[type="checkbox"] {
            accent-color: var(--primary) !important;
            transform: scale(1.2) !important;
            cursor: pointer !important;
        }

        /* Pie del modal */
        .cc-cp-foot {
            border-top: 1px solid var(--border) !important;
            background: #1a1a1a !important; /* Tono de cabecera/menú */
            padding: 20px 30px !important;
            display: flex !important;
            justify-content: flex-end !important; /* Solo el botón a la derecha */
        }
        
        /* ELIMINAR MARCA DE AGUA (Firma de TermsFeed) */
        .cc-cp-foot-byline {
            display: none !important; /* ¡DESAPARECE! */
        }
        
        /* Botón Guardar */
        .cc-cp-foot-save {
            background: var(--primary) !important;
            color: #ffffff !important;
            border: none !important;
            border-radius: var(--radius-sub) !important;
            padding: 14px 40px !important;
            font-family: var(--font) !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            cursor: pointer !important;
            transition: var(--transition) !important;
            box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
            letter-spacing: 1px !important;
            font-size: 0.9rem !important;
        }
        .cc-cp-foot-save:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 7px 25px rgba(var(--primary-rgb), 0.5) !important;
        }

        /* --- FOOTER DE COCACOLALANDIA --- */
        .coca-footer {
            background: var(--surface);
            border-top: 1px solid var(--border);
            padding: 60px 5%;
            margin-top: 100px;
            color: white;
            font-family: var(--font);
            text-align: center;
        }
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            max-width: 1200px;
            margin: 0 auto 40px;
        }
        .footer-col h4 { color: var(--primary); margin-bottom: 20px; font-weight: 700; }
        
        /* Estilos unificados para enlaces y el botón de ajustes */
        .footer-col a, #open_preferences_center {
            display: block; 
            color: #888; 
            text-decoration: none; 
            margin-bottom: 10px;
            transition: 0.3s; 
            background: none; 
            border: none; 
            font-family: inherit; 
            font-size: 0.95rem; 
            cursor: pointer;
            padding: 0;
            width: 100%;
            text-align: center;
        }
        
        /* Efecto Hover unificado (Desplazamiento e iluminación) */
        .footer-col a:hover, #open_preferences_center:hover { 
            color: var(--primary); 
            transform: translateX(5px); 
        }
        
        .legal-box {
            background: rgba(255,255,255,0.02);
            padding: 20px; border-radius: 15px; border: 1px solid var(--border);
            font-size: 0.8rem; color: #555; text-align: left; margin-top: 30px;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    head.appendChild(style);

    // --- 2. GESTIÓN DE COOKIES Y ANALYTICS (TERMSFEED) ---
    const loadLegalScripts = () => {
        const tfScript = document.createElement('script');
        tfScript.src = "https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js";
        head.appendChild(tfScript);

        tfScript.onload = () => {
            cookieconsent.run({
                "notice_banner_type": "simple",
                "consent_type": "express",
                "palette": "dark",
                "language": "es",
                "website_name": "Cocacolalandia",
                "website_privacy_policy_url": "https://cocacolalandia1.github.io/privacidad"
            });
        };

        const gaID = 'G-KFVQX643H7';
        const gaScript = document.createElement('script');
        gaScript.type = "text/plain";
        gaScript.setAttribute('data-cookie-consent', 'tracking');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaID}`;
        head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', gaID);
    };

    // --- 3. LÓGICA DE EVENTOS Y TEMAS ---
    const applyTheme = () => {
        const hoy = new Date();
        const d = hoy.getDate();
        const m = hoy.getMonth() + 1;
        if (m === 10 && d === 31) document.body.classList.add('event-halloween');
        else if (m === 3 && d === 8) document.body.classList.add('event-8m');
        else {
            const saved = localStorage.getItem('cocacola-pref-theme');
            if (saved && saved !== 'classic') document.body.classList.add(saved);
        }
    };

    // --- 4. GADGET DE SEGURIDAD "DOUBLE ESCAPE" ---
    let escCount = 0;
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            escCount++;
            setTimeout(() => escCount = 0, 500);
            if (escCount === 2) {
                document.title = "Google Classroom";
                const link = document.createElement('link');
                link.rel = 'icon'; link.href = 'https://ssl.gstatic.com/classroom/favicon.png';
                head.appendChild(link);
                window.location.replace("https://classroom.google.com");
            }
        }
    });

    // --- 5. INYECCIÓN DINÁMICA DEL FOOTER ---
    window.addEventListener('DOMContentLoaded', () => {
        applyTheme();
        loadLegalScripts();

        const footer = document.createElement('footer');
        footer.className = 'coca-footer';
        footer.innerHTML = `
            <div class="footer-grid">
                <div class="footer-col">
                    <h4>NAVEGACIÓN</h4>
                    <a href="/">Inicio</a>
                    <a href="/juegos">Juegos Desbloqueados</a>
                    <a href="/chat">Chat Global</a>
                </div>
                <div class="footer-col">
                    <h4>LEGAL</h4>
                    <a href="/privacidad">Privacidad</a>
                    <a href="/condiciones">Términos de Uso</a>
                    <a href="/aviso-legal">Aviso Legal</a>
                    <a href="/copyright">Reclamaciones de Copyright</a>
                    <button id="open_preferences_center">Ajustes de Cookies</button>
                </div>
                <div class="footer-col" style="grid-column: span 2;">
                    <h4>COCACOLALANDIA</h4>
                    <p style="color:#555; font-size:0.9rem;">Versión 26.4.0. <br>© 2026 Cocacolalandia. Todos los derechos reservados. Según la Ley de Propiedad Intelectual Española, este sitio web está protegido por derechos de autor.</p>
                </div>
            </div>
            <div class="legal-box">
                <strong>Disclaimer:</strong> Cocacolalandia es un sitio web proveedor de juegos. Sin embargo, esos juegos no son almacenados por Cocacolalandia, ni son programados por Cocacolalandia. En el momento en el que un usuario haga click en un botón para acceder a un juego, estará saliendo de la propiedad de Cocacolalandia y, por tanto, fuera de los efectos de la Política de Privacidad, Condiciones de Uso, Copyright y del Aviso Legal. No estamos afiliados con The Coca-Cola Company. Todas las marcas pertenecen a sus respectivos dueños.
            </div>
        `;
        document.body.appendChild(footer);

        const cookBtn = document.getElementById('open_preferences_center');
        if (cookBtn) {
            cookBtn.onclick = () => {
                if (typeof cookieconsent !== 'undefined') cookieconsent.openPreferencesCenter();
            };
        }
    });
})();