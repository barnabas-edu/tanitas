class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header class="header" id="header">
            <nav class="nav container">
                <a href="index.html" class="nav__logo">Horváth Barnabás Oldala</a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="index.html" class="nav__link">
                                <i class='bx bx-home-alt nav__icon'></i>
                                <span class="nav__name">Kezdőlap</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="tananyagok.html" class="nav__link">
                                <i class='bx bx-book nav__icon'></i>
                                <span class="nav__name">Tananyagok</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="szamologep.html" class="nav__link">
                                <i class='bx bx-calculator nav__icon'></i>
                                <span class="nav__name">Számológép</span>
                            </a>
                        </li>
						
						<li class="nav__item">
                            <a href="rolam.html" class="nav__link">
                                <i class='bx bx-user nav__icon'></i>
                                <span class="nav__name">Rólam</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
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
