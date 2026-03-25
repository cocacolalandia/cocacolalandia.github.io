(function() {
    const head = document.head;

    // 1. SCRIPTS (TermsFeed + Analytics + GTM)
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

    // Google Analytics & GTM
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

    const gtmScript = document.createElement('script');
    gtmScript.type = "text/plain";
    gtmScript.setAttribute('data-cookie-consent', 'tracking');
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TQ2GGR87');`;
    head.appendChild(gtmScript);

    // 2. ESTILOS NEÓN PARA TU BOTÓN #open_preferences_center
    const style = document.createElement('style');
    style.innerHTML = `
        #open_preferences_center {
            display: inline-block;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--accent, #00c6ff);
            color: var(--text-color, #fff);
            font-family: "Courier New", Courier, monospace;
            font-weight: 600;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 8px;
            transition: all 0.3s ease;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0, 198, 255, 0.1);
            text-transform: uppercase;
            font-size: 0.9rem;
            margin: 20px;
        }
        #open_preferences_center:hover {
            background: var(--accent, #00c6ff);
            color: #000;
            box-shadow: 0 0 20px var(--accent, #00c6ff);
            transform: translateY(-2px);
        }
    `;
    head.appendChild(style);

    // 3. INYECCIÓN AUTOMÁTICA DEL BOTÓN Y FUNCIONALIDAD
    window.addEventListener('DOMContentLoaded', function() {
        // Crear el botón si no existe en el HTML
        if (!document.getElementById('open_preferences_center')) {
            const btn = document.createElement('button');
            btn.id = "open_preferences_center";
            btn.innerHTML = "Cambiar preferencias de cookies";
            
            // Intentar ponerlo en el footer, si no, al final del body
            const footer = document.querySelector('footer');
            (footer || document.body).appendChild(btn);
        }

        // Hacer que el botón abra el panel de TermsFeed
        document.addEventListener('click', function(e) {
            if (e.target && e.target.id === 'open_preferences_center') {
                cookieconsent.openPreferencesCenter();
            }
        });
    });
})();