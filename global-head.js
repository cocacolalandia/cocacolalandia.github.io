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
// --- GADGET DE PÁNICO "DOBLE ESCAPE" + CAMUFLAJE DE HISTORIAL ---
let ultimoEscTime = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const tiempoActual = new Date().getTime();
        const diferencia = tiempoActual - ultimoEscTime;

        // Si pulsas ESC dos veces en menos de 500ms (medio segundo)
        if (diferencia > 0 && diferencia < 500) {
            
            // 1. Camuflaje visual inmediato (por si tarda en cargar la web)
            document.title = "Google Classroom"; 
            
            // 2. Cambiar el favicon (icono de la pestaña) al de Google
            const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = 'https://ssl.gstatic.com/classroom/favicon.png'; // Icono oficial de Classroom
            document.getElementsByTagName('head')[0].appendChild(link);

            // 3. Redirección instantánea
            // Usamos .replace para que el usuario no pueda darle atrás y volver al juego fácilmente
            window.location.replace("https://classroom.google.com");
        }

        ultimoEscTime = tiempoActual;
    }
});
// --- CONFIGURACIÓN MAESTRA DE TEMAS COCACOLALANDIA ---

const listaTemas = [
    'classic', 'theme-matrix', 'theme-light', 'theme-vaporwave', 
    'theme-blood', 'theme-golden', 'theme-ocean', 'theme-gameboy', 
    'theme-cyberpunk', 'theme-dracula'
];

// 1. INYECTAR EL CSS DE LOS TEMAS AUTOMÁTICAMENTE
const inyectarEstilosTemas = () => {
    const css = `
        body.theme-matrix { --bg-color: #000; --card-color: #050505; --text-color: #00ff41; --accent: #00ff41; --accent2: #008f11; --shadow: 0 0 15px rgba(0, 255, 65, 0.4); }
        body.theme-light { --bg-color: #f4f6fa; --card-color: #ffffff; --text-color: #0c0e1b; --accent: #555; --accent2: #888; --shadow: 0 0 5px rgba(0,0,0,0.1); }
        body.theme-vaporwave { --bg-color: #2d004d; --card-color: #4b0082; --text-color: #00f2ff; --accent: #ff00ff; --accent2: #00f2ff; --shadow: 0 0 15px #ff00ff; }
        body.theme-blood { --bg-color: #1a0000; --card-color: #2d0000; --text-color: #ff4d4d; --accent: #ff0000; --accent2: #800000; --shadow: 0 0 15px rgba(255, 0, 0, 0.4); }
        body.theme-golden { --bg-color: #1a1a1a; --card-color: #262626; --text-color: #f3cf7a; --accent: #ffd700; --accent2: #b8860b; --shadow: 0 0 15px rgba(255, 215, 0, 0.3); }
        body.theme-ocean { --bg-color: #001f3f; --card-color: #003366; --text-color: #7fdbff; --accent: #39cccc; --accent2: #0074d9; --shadow: 0 0 15px #39cccc; }
        body.theme-gameboy { --bg-color: #8bab0f; --card-color: #9bbc0f; --text-color: #0f380f; --accent: #306230; --accent2: #0f380f; --shadow: none; }
        body.theme-cyberpunk { --bg-color: #fcee0a; --card-color: #000; --text-color: #000; --accent: #000; --accent2: #ff003c; --shadow: 0 0 10px rgba(0,0,0,0.5); }
        body.theme-dracula { --bg-color: #282a36; --card-color: #44475a; --text-color: #f8f8f2; --accent: #bd93f9; --accent2: #ff79c6; --shadow: 0 0 15px rgba(189, 147, 249, 0.3); }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);
};

// 2. FUNCIÓN PARA CAMBIAR EL TEMA
function cambiarTema() {
    const b = document.body;
    let temaActual = localStorage.getItem('cocacola-pref-theme') || 'classic';
    let idx = listaTemas.indexOf(temaActual);
    
    if (temaActual !== 'classic') b.classList.remove(temaActual);
    
    idx = (idx + 1) % listaTemas.length;
    const nuevoTema = listaTemas[idx];
    
    if (nuevoTema !== 'classic') b.classList.add(nuevoTema);
    
    localStorage.setItem('cocacola-pref-theme', nuevoTema);
}

// 3. INSERTAR LA PALETA EN EL HEADER
function insertarIconoPaleta() {
    const contenedor = document.querySelector('.search-wrap') || document.querySelector('header');
    if (contenedor && !document.getElementById('btn-tema-global')) {
        const btn = document.createElement('i');
        btn.id = 'btn-tema-global';
        btn.className = 'fa-solid fa-palette';
        btn.style.cssText = "cursor:pointer; margin-left:15px; font-size:20px; color:var(--accent); transition:0.3s;";
        btn.title = 'Cambiar Estilo';
        btn.onclick = cambiarTema;
        btn.onmouseover = () => btn.style.color = 'var(--accent2)';
        btn.onmouseout = () => btn.style.color = 'var(--accent)';
        contenedor.appendChild(btn);
    }
}

// 4. INICIALIZACIÓN
(function iniciarCocacolaGlobal() {
    const ejecutar = () => {
        if (document.body && document.head) {
            inyectarEstilosTemas(); // Inyecta el CSS de los 10 temas
            const guardado = localStorage.getItem('cocacola-pref-theme');
            if (guardado && guardado !== 'classic') document.body.classList.add(guardado);
            insertarIconoPaleta();
        } else {
            setTimeout(ejecutar, 10);
        }
    };
    ejecutar();
})();