(function() {
    // --- 1. CONFIGURACIÓN DE SCRIPTS (COOKIES Y ANALYTICS) ---
    const head = document.head;

    const tfScript = document.createElement('script');
    tfScript.src = "https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js";
    tfScript.charset = "UTF-8";
    head.appendChild(tfScript);

    tfScript.onload = function() {
        cookieconsent.run({
            "notice_banner_type": "simple",
            "consent_type": "express",
            "palette": "dark",
            "language": "es",
            "page_load_consent_levels": ["strictly-necessary"],
            "notice_banner_reject_button_hide": false,
            "preferences_center_close_button_hide": false,
            "website_name": "Cocacolalandia",
            "website_privacy_policy_url": "https://cocacolalandia.github.io/privacidad"
        });
    };

    // Google Analytics (Bloqueado hasta consentimiento)
    const gaScript = document.createElement('script');
    gaScript.type = "text/plain";
    gaScript.setAttribute('data-cookie-consent', 'tracking');
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-KFVQX643H7";
    head.appendChild(gaScript);

    const gaConfig = document.createElement('script');
    gaConfig.type = "text/plain";
    gaConfig.setAttribute('data-cookie-consent', 'tracking');
    gaConfig.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KFVQX643H7');`;
    head.appendChild(gaConfig);

    // --- 2. ESTILOS GLOBALES DEL FOOTER (CSS) ---
    const style = document.createElement('style');
    style.innerHTML = `
        footer {
            background: rgba(10, 12, 25, 0.9);
            color: #fff;
            padding: 40px 5%;
            font-family: 'Courier New', Courier, monospace;
            border-top: 2px solid var(--accent, #00c6ff);
            text-align: center;
            margin-top: 50px;
        }
        .footer-links {
            margin: 20px 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
        }
        .footer-links a, #open_preferences_center {
            color: var(--accent, #00c6ff);
            text-decoration: none;
            font-weight: 600;
            background: none;
            border: none;
            cursor: pointer;
            font-family: inherit;
            font-size: 1rem;
            transition: 0.3s;
        }
        .footer-links a:hover, #open_preferences_center:hover {
            color: var(--accent2, #bc13fe);
            text-shadow: 0 0 10px var(--accent2);
        }
        .copyright-container {
            max-width: 800px;
            margin: 20px auto;
            border: 1px solid rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 10px;
        }
        .toggle-btn {
            background: rgba(255,255,255,0.05);
            color: #fff;
            border: 1px solid var(--accent);
            padding: 8px 15px;
            cursor: pointer;
            border-radius: 5px;
            font-family: inherit;
        }
        .copyright-text {
            display: none;
            text-align: left;
            font-size: 0.85rem;
            margin-top: 15px;
            color: #ccc;
            line-height: 1.5;
        }
    `;
    head.appendChild(style);

    // --- 3. INYECCIÓN DEL FOOTER Y LÓGICA ---
    window.addEventListener('DOMContentLoaded', () => {
        let footer = document.querySelector('footer');
        
        // Si no existe el footer, lo creamos
        if (!footer) {
            footer = document.createElement('footer');
            document.body.appendChild(footer);
        }

        footer.innerHTML = `
            <div class="footer-content">
                <p>© 2025-2026 Cocacolalandia. Todos los derechos reservados. <br>Versión 26.3.0</p>
                <div class="footer-links">
                    <a href="/aviso-legal">Aviso Legal</a>
                    <a href="/privacidad">Privacidad</a>
                    <a href="/condiciones">Condiciones</a>
                    <a href="/copyright">DMCA</a>
                    <button id="open_preferences_center">Cookies</button>
                </div>
                <div class="copyright-container">
                    <button id="toggle-copyright" class="toggle-btn">Mostrar declaración de copyright</button>
                    <div id="copyright-text" class="copyright-text">
                        <p><strong>Uso del Logotipo de Coca-Cola:</strong> El nombre Cocacolalandia y su estética son puramente ilustrativos. No existe afiliación oficial con The Coca-Cola Company.</p>
                        <p><strong>Contenido de los Juegos:</strong> Este sitio aloja juegos de terceros. Cocacolalandia no es propietario de los mismos y actúa como un repositorio bajo políticas de uso legítimo.</p>
                        <p><strong>Exoneración:</strong> El uso de este sitio web es bajo el propio riesgo del usuario.</p>
                    </div>
                </div>
            </div>
        `;

        // Funcionalidad del botón de Copyright
        const toggleBtn = footer.querySelector('#toggle-copyright');
        const copyrightText = footer.querySelector('#copyright-text');
        
        toggleBtn.onclick = () => {
            const isHidden = copyrightText.style.display === 'none' || copyrightText.style.display === '';
            copyrightText.style.display = isHidden ? 'block' : 'none';
            toggleBtn.textContent = isHidden ? 'Ocultar declaración de copyright' : 'Mostrar declaración de copyright';
        };

        // Funcionalidad del botón de Cookies (abre el panel de TermsFeed)
        footer.querySelector('#open_preferences_center').onclick = () => {
            if (typeof cookieconsent !== 'undefined') {
                cookieconsent.openPreferencesCenter();
            }
        };
    });
})();