(function() {
            // ---- DOM elemek ----
            const popup = document.getElementById('themePopup');
            const menuButton = document.getElementById('themeMenuButton');
            const modeOptions = document.querySelectorAll('#modeOptions .option');
            const colorOptions = document.querySelectorAll('#colorOptions .color-option');
            // Ezt a sort:
            // const footerInfo = document.getElementById('footerInfo');

            // Írd át erre:
            const footerInfo = document.getElementById('footerInfo') || { textContent: '' };

            // ---- Állapotok ----
            const colorDisplayNames = {
                default: 'Alapértelmezett',
                blue: 'Kék',
                green: 'Zöld'
            };

            const modeDisplayNames = {
                light: 'Világos',
                dark: 'Sötét',
                auto: 'Rendszer'
            };

            // ---- Téma alkalmazása ----
            function applyTheme(color, mode) {
                document.documentElement.setAttribute('data-color-theme', color);
                const effectiveMode = (mode === 'auto')
                    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                    : mode;
                document.documentElement.setAttribute('data-mode', effectiveMode);

                // Frissítse a láblécet
                footerInfo.textContent = `${colorDisplayNames[color]} · ${modeDisplayNames[mode]}`;

                // Jelölje ki az aktív opciókat a popupban
                modeOptions.forEach(opt => {
                    opt.classList.toggle('active', opt.dataset.mode === mode);
                });
                colorOptions.forEach(opt => {
                    opt.classList.toggle('active', opt.dataset.color === color);
                });
            }

            // ---- Mentés és alkalmazás ----
            function saveAndApply(color, mode) {
                localStorage.setItem('themeColor', color);
                localStorage.setItem('themeMode', mode);
                applyTheme(color, mode);
            }

            // ---- Betöltés ----
            function loadSettings() {
                const savedColor = localStorage.getItem('themeColor') || 'default';
                const savedMode = localStorage.getItem('themeMode') || 'light';
                applyTheme(savedColor, savedMode);
            }

            // ---- Popup nyitása/zárása ----
            function togglePopup() {
                popup.classList.toggle('open');
            }

            function closePopup() {
                popup.classList.remove('open');
            }

            // ---- Események ----
            menuButton.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePopup();
            });

            // Opció kattintások
            modeOptions.forEach(opt => {
                opt.addEventListener('click', (e) => {
                    const mode = e.currentTarget.dataset.mode;
                    const currentColor = localStorage.getItem('themeColor') || 'default';
                    saveAndApply(currentColor, mode);
                });
            });

            colorOptions.forEach(opt => {
                opt.addEventListener('click', (e) => {
                    const color = e.currentTarget.dataset.color;
                    const currentMode = localStorage.getItem('themeMode') || 'light';
                    saveAndApply(color, currentMode);
                });
            });

            // Kattintás a popupon kívülre → bezár
            document.addEventListener('click', (event) => {
                if (!popup.contains(event.target) && !menuButton.contains(event.target)) {
                    closePopup();
                }
            });

            // Rendszer téma változás figyelése, ha 'auto' mód aktív
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                const currentMode = localStorage.getItem('themeMode');
                if (currentMode === 'auto') {
                    const color = localStorage.getItem('themeColor') || 'default';
                    applyTheme(color, 'auto');
                }
            });

            // Indítás
            loadSettings();

            // Kiolvassuk a CSS változó értékét
const stilus = getComputedStyle(document.documentElement);
const szin = stilus.getPropertyValue('--header-bg').trim();

// Beállítjuk a fejléc színét
document.querySelector('meta[name="theme-color"]').setAttribute("content", szin);
        })();
