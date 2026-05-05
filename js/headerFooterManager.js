class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header class="header" id="header">
        <div class="navbar">
                <div><a href="https://barnabas-edu.github.io/tanitas/" class="nav__logo">Horváth Barnabás Oldala</a></div>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">

                        <li class="nav__item">
                            <a href="/tanitas/" class="nav__link">
                                <i class='bx bx-home-alt nav__icon'></i>
                                <span class="nav__name">Kezdőlap</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="/tanitas/tananyagok/" class="nav__link">
                                <i class='bx bx-book nav__icon'></i>
                                <span class="nav__name">Tananyagok</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="/tanitas/szamologep/" class="nav__link">
                                <i class='bx bx-calculator nav__icon'></i>
                                <span class="nav__name">Számológép</span>
                            </a>
                        </li>
						
						<li class="nav__item">
                            <a href="/tanitas/rolam/" class="nav__link">
                                <i class='bx bx-user nav__icon'></i>
                                <span class="nav__name">Rólam</span>
                            </a>
                        </li>
                    </ul>
                </div>
        <div class="theme-button" id="themeMenuButton">
            <i class='bx bx-palette nav__icon'></i>
        </div>

        <div class="popup" id="themePopup">
            <!-- Mód választó -->
            <div class="section-title" style="text-align: center">Mód</div>
            <div class="option-group" id="modeOptions">
				<div class="option" data-mode="auto"><span class="material-symbols-outlined">routine</span> Auto</div>
                <div class="option" data-mode="light"><span class="material-symbols-outlined">light_mode</span> Világos</div>
                <div class="option" data-mode="dark"><span class="material-symbols-outlined">dark_mode</span> Sötét</div>
            </div>

            <div class="section-title" style="text-align: center">Szín</div>
            <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;" id="colorOptions">
                <span class="color-option" data-color="default" title="Alapértelmezett"></span>
                <span class="color-option" data-color="blue" title="Kék"></span>
                <span class="color-option" data-color="green" title="Zöld"></span>
				<span class="color-option" data-color="green" title="Valami"></span>
            </div>
        </div>
    </header>
		`
	}
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<center><footer>
		<nav>
        <li><a href="index.html">Kezdőlap</a></li>
        <li><a href="altkem.html">Általános kémia</a></li>
        </nav></footer><center>
		`
	}
}

customElements.define('my-footer', MyFooter)
