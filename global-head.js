/**
 * COCACOLALANDIA CORE SYSTEM v4.2
 * Gestión Global de Temas, Seguridad, UI de Cookies y Cumplimiento Legal
 */

(function() {
    const head = document.head;

    // --- 1. MOTOR DE ESTILOS GLOBALES E INYECCIÓN DE UI ---
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --primary: #ff003c;
            --primary-rgb: 255, 0, 60;
            --bg: #080808;
            --surface: #121212;
            --border: rgba(255, 255, 255, 0.1);
            --font: 'Space Grotesk', sans-serif;
            --transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* --- TEMAS DINÁMICOS --- */
        body.theme-matrix { --primary: #00ff41; --primary-rgb: 0, 255, 65; --bg: #000; }
        body.theme-vaporwave { --primary: #ff00ff; --primary-rgb: 255, 0, 255; --bg: #2d004d; }
        body.theme-cyberpunk { --primary: #fcee0a; --primary-rgb: 252, 238, 10; --bg: #000; }
        body.theme-blood { --primary: #ff4d4d; --primary-rgb: 255, 77, 77; --bg: #1a0000; }
        
        /* --- REDISEÑO TOTAL TERMSFEED (COOKIES UI - BANNER INFERIOR) --- */
        #termsfeed-com---nb {
            background: rgba(10, 10, 10, 0.96) !important;
            backdrop-filter: blur(15px) !important;
            border-top: 2px solid var(--primary) !important;
            padding: 25px 5% !important;
            font-family: var(--font) !important;
            box-shadow: 0 -10px 40px rgba(0,0,0,0.8) !important;
        }

        #termsfeed-com---nb p, #termsfeed-com---nb a, .cc-nb-title {
            font-family: var(--font) !important;
            color: #eee !important;
        }

        #termsfeed-com---nb a { color: var(--primary) !important; text-decoration: underline !important; }

        /* Botones del Banner */
        .cc-nb-okagree {
            background: var(--primary) !important;
            color: white !important;
            border-radius: 12px !important;
            padding: 12px 30px !important;
            font-family: var(--font) !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            border: none !important;
            cursor: pointer !important;
            transition: var(--transition) !important;
        }

        .cc-nb-okagree:hover { transform: translateY(-2px) !important; box-shadow: 0 5px 15px rgba(var(--primary-rgb), 0.4) !important; }

        .cc-nb-reject, .cc-nb-changep {
            background: rgba(255,255,255,0.05) !important;
            color: #ccc !important;
            border: 1px solid var(--border) !important;
            border-radius: 12px !important;
            padding: 12px 25px !important;
            font-family: var(--font) !important;
            cursor: pointer !important;
            transition: var(--transition) !important;
        }

        /* --- REDISEÑO DEL CENTRO DE PREFERENCIAS (MODAL GRANDE SEGÚN TU ESTRUCTURA REAL) --- */
        
        /* 1. Capa externa translúcida de fondo */
        .termsfeed-com---pc-dialog {
            background: rgba(0, 0, 0, 0.85) !important;
            backdrop-filter: blur(10px) !important;
        }

        /* 2. Caja principal del modal */
        .cc-pc-container {
            background: rgba(10, 10, 10, 0.98) !important;
            backdrop-filter: blur(20px) !important;
            border: 2px solid var(--primary) !important;
            border-radius: 24px !important;
            font-family: var(--font) !important;
            box-shadow: 0 0 50px rgba(var(--primary-rgb), 0.25) !important;
            color: #ffffff !important;
            overflow: hidden !important;
        }

        /* 3. Cabecera (Header) */
        .cc-pc-head {
            background: rgba(255, 255, 255, 0.02) !important;
            border-bottom: 1px solid var(--border) !important;
            padding: 20px 30px !important;
        }
        .cc-pc-head-title-text {
            color: var(--primary) !important;
            font-family: var(--font) !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 2px !important;
        }
        #cc-pc-head-title-headline {
            color: #ffffff !important;
            font-family: var(--font) !important;
            font-weight: 600 !important;
        }
        .cc-pc-head-close {
            background: none !important;
            border: none !important;
            color: #888888 !important;
            font-size: 1.2rem !important;
            cursor: pointer !important;
            transition: var(--transition) !important;
        }
        .cc-pc-head-close:hover {
            color: var(--primary) !important;
            transform: scale(1.1) rotate(90deg) !important;
        }
        .cc-pc-head-lang-select {
            background: var(--surface) !important;
            color: #ffffff !important;
            border: 1px solid var(--border) !important;
            border-radius: 8px !important;
            font-family: var(--font) !important;
            padding: 4px 8px !important;
        }

        /* 4. Columnas Internas (Cuerpo) */
        .cc-cp-body {
            background: transparent !important;
        }

        /* Columna Izquierda: Botones de las pestañas */
        .cc-cp-body-tabs {
            border-right: 1px solid var(--border) !important;
            background: rgba(0, 0, 0, 0.2) !important;
            padding: 15px !important;
        }
        .cc-cp-body-tabs-item {
            margin-bottom: 8px !important;
            background: transparent !important;
        }
        .cc-cp-body-tabs-item-link {
            background: rgba(255, 255, 255, 0.02) !important;
            color: #bbbbbb !important;
            border: 1px solid var(--border) !important;
            border-radius: 10px !important;
            font-family: var(--font) !important;
            padding: 12px 15px !important;
            text-align: left !important;
            width: 100% !important;
            cursor: pointer !important;
            transition: var(--transition) !important;
        }
        .cc-cp-body-tabs-item-link:hover {
            background: rgba(var(--primary-rgb), 0.05) !important;
            border-color: var(--primary) !important;
            color: #ffffff !important;
        }
        /* Cuando la pestaña está activa */
        .cc-cp-body-tabs-item[active="true"] .cc-cp-body-tabs-item-link {
            background: var(--primary) !important;
            border-color: var(--primary) !important;
            color: #ffffff !important;
            font-weight: 600 !important;
            box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.3) !important;
        }

        /* Columna Derecha: Textos y descripciones */
        .cc-cp-body-content {
            background: transparent !important;
            padding: 30px !important;
        }
        .cc-cp-body-content-entry-title {
            font-family: var(--font) !important;
            color: #ffffff !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            margin-bottom: 15px !important;
        }
        .cc-cp-body-content-entry-text {
            font-family: var(--font) !important;
            color: #aaaaaa !important;
            line-height: 1.6 !important;
            margin-bottom: 12px !important;
        }
        .cc-cp-body-content-entry-text a {
            color: var(--primary) !important;
            text-decoration: none !important;
        }
        .cc-cp-body-content-entry-text a:hover {
            text-decoration: underline !important;
        }

        /* 5. Interruptores de Activación (Checkboxes / Toggles) */
        .cc-custom-checkbox {
            background: rgba(255, 255, 255, 0.02) !important;
            border: 1px solid var(--border) !important;
            padding: 12px 20px !important;
            border-radius: 12px !important;
            display: flex !important;
            align-items: center !important;
            gap: 12px !important;
            margin-top: 20px !important;
        }
        .cc-custom-checkbox label {
            font-family: var(--font) !important;
            font-weight: 600 !important;
            color: var(--primary) !important;
        }
        .cc-custom-checkbox label.is-inactive {
            color: #666666 !important;
        }
        .cc-custom-checkbox input[type="checkbox"] {
            accent-color: var(--primary) !important;
            transform: scale(1.2) !important;
            cursor: pointer !important;
        }

        /* 6. Pie del modal (Footer interno) */
        .cc-cp-foot {
            background: rgba(0, 0, 0, 0.4) !important;
            border-top: 1px solid var(--border) !important;
            padding: 20px 30px !important;
        }
        
        /* Ocultar por completo la firma de TermsFeed */
        .cc-cp-foot-byline {
            display: none !important;
        }
        
        /* Botón de Guardar Preferencias */
        .cc-cp-foot-save {
            background: var(--primary) !important;
            color: #ffffff !important;
            border: none !important;
            border-radius: 12px !important;
            padding: 14px 35px !important;
            font-family: var(--font) !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            cursor: pointer !important;
            transition: var(--transition) !important;
            box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
        }
        .cc-cp-foot-save:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 25px rgba(var(--primary-rgb), 0.5) !important;
            background-color: #ffffff !important;
            color: #000000 !important;
        }

        /* --- FOOTER REDISEÑADO DE COCACOLALANDIA --- */
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