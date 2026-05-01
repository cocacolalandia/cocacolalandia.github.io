/**
 * COCACOLALANDIA CORE SYSTEM v4.0
 * Gestión Global de Temas, Seguridad y Cumplimiento Legal
 */

(function() {
    const head = document.head;

    // --- 1. MOTOR DE ESTILOS GLOBALES (CSS VARIABLE INJECTION) ---
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --primary: #ff003c;
            --primary-rgb: 255, 0, 60;
            --bg: #080808;
            --surface: #121212;
            --border: rgba(255, 255, 255, 0.1);
            --font: 'Space Grotesk', sans-serif;
        }

        /* --- TEMAS DINÁMICOS --- */
        body.theme-matrix { --primary: #00ff41; --primary-rgb: 0, 255, 65; --bg: #000; }
        body.theme-vaporwave { --primary: #ff00ff; --primary-rgb: 255, 0, 255; --bg: #2d004d; }
        body.theme-cyberpunk { --primary: #fcee0a; --primary-rgb: 252, 238, 10; --bg: #000; }
        body.theme-blood { --primary: #ff4d4d; --primary-rgb: 255, 77, 77; --bg: #1a0000; }
        
        /* --- EVENTOS OBLIGATORIOS --- */
        body.event-halloween { --primary: #ff6600; --bg: #0f0f0f; }
        body.event-8m { --primary: #bc13fe; --bg: #2e003e; }

        /* --- FOOTER REDISEÑADO --- */
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
        .footer-col a, #open_preferences_center {
            display: block; color: #888; text-decoration: none; margin-bottom: 10px;
            transition: 0.3s; background: none; border: none; font-family: inherit; font-size: 0.95rem; cursor: pointer;
        }
        .footer-col a:hover { color: var(--primary); transform: translateX(5px); }
        
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
                "website_privacy_policy_url": "https://cocacolalandia.github.io/privacidad"
            });
        };

        // Google Analytics (Solo se activa con consentimiento)
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
    const checkEvents = () => {
        const hoy = new Date();
        const d = hoy.getDate();
        const m = hoy.getMonth() + 1;
        if (m === 10 && d === 31) return 'event-halloween';
        if (m === 3 && d === 8) return 'event-8m';
        return null;
    };

    const applyTheme = () => {
        const event = checkEvents();
        if (event) {
            document.body.classList.add(event);
            return;
        }
        const saved = localStorage.getItem('cocacola-pref-theme');
        if (saved && saved !== 'classic') document.body.classList.add(saved);
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
                    <a href="/copyright">DMCA Policy</a>
                    <button id="open_preferences_center">Ajustes de Cookies</button>
                </div>
                <div class="footer-col" style="grid-column: span 2;">
                    <h4>COCACOLALANDIA SYSTEM</h4>
                    <p style="color:#555; font-size:0.9rem;">Versión 26.4.0 Rebirth. Desarrollado para la libertad digital. <br>© 2026 Cocacolalandia Network.</p>
                </div>
            </div>
            <div class="legal-box">
                <strong>Disclaimer:</strong> Cocacolalandia es un repositorio educativo de juegos. No estamos afiliados con The Coca-Cola Company. Todas las marcas pertenecen a sus respectivos dueños bajo Fair Use.
            </div>
        `;
        document.body.appendChild(footer);

        // Bind Cookies Button
        const cookBtn = document.getElementById('open_preferences_center');
        if (cookBtn) {
            cookBtn.onclick = () => {
                if (typeof cookieconsent !== 'undefined') cookieconsent.openPreferencesCenter();
            };
        }
    });

})();