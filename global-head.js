(function() {
    // 1. INYECTAR SCRIPTS EN EL HEAD
    const head = document.head;

    // Script de TermsFeed
    const tfScript = document.createElement('script');
    tfScript.src = "https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js";
    tfScript.charset = "UTF-8";
    head.appendChild(tfScript);

    // Configuración de Cookies
    tfScript.onload = function() {
        cookieconsent.run({
            "notice_banner_type": "simple",
            "consent_type": "express",
            "palette": "dark",
            "language": "es",
            "page_load_consent_levels": ["strictly-necessary"],
            "notice_banner_reject_button_hide": false,
            "preferences_center_close_button_hide": false,
            "page_refresh_confirmation_buttons": false,
            "website_name": "Cocacolalandia",
            "website_privacy_policy_url": "https://cocacolalandia.github.io/privacidad"
        });
    };

    // Google Analytics
    const gaScript = document.createElement('script');
    gaScript.type = "text/plain";
    gaScript.setAttribute('data-cookie-consent', 'tracking');
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-KFVQX643H7";
    head.appendChild(gaScript);

    const gaConfig = document.createElement('script');
    gaConfig.type = "text/plain";
    gaConfig.setAttribute('data-cookie-consent', 'tracking');
    gaConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KFVQX643H7');
    `;
    head.appendChild(gaConfig);

    // Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.type = "text/plain";
    gtmScript.setAttribute('data-cookie-consent', 'tracking');
    gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TQ2GGR87');
    `;
    head.appendChild(gtmScript);

    // 2. INYECTAR ESTILOS CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .open_preferences_center {
            display: inline-block;
            background: rgba(255, 255, 255, 0.05) !important;
            border: 1px solid var(--accent) !important;
            color: var(--text-color) !important;
            font-family: "Courier New", Courier, monospace !important;
            font-weight: 600 !important;
            text-decoration: none !important;
            padding: 10px 20px !important;
            border-radius: 8px !important;
            transition: all 0.3s ease !important;
            cursor: pointer !important;
            box-shadow: 0 0 10px rgba(0, 198, 255, 0.1) !important;
            text-transform: uppercase !important;
            font-size: 0.9rem !important;
            margin: 20px auto;
        }
        .open_preferences_center:hover {
            background: var(--accent) !important;
            color: #000 !important;
            box-shadow: 0 0 20px var(--accent) !important;
            transform: translateY(-2px) !important;
        }
    `;
    head.appendChild(style);

    // 3. AÑADIR EL BOTÓN AL FINAL DEL BODY AUTOMÁTICAMENTE
    window.addEventListener('load', function() {
        const btn = document.createElement('button');
        btn.type = "button";
        btn.className = "open_preferences_center";
        btn.innerHTML = "Cambiar preferencias de cookies";
        
        // Lo añade al final de cualquier página
        document.body.appendChild(btn);
    });
})();