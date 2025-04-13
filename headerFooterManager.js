class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<center>
		<header>
        <nav>
            <ul>
            <li class="nav__links"><a href="https://barnabas-edu.github.io/tanitas/">Kezdőlap</a></li>
            <li class="nav__links"><a href="altkem">Általános kémia</a></li>
            </ul>
        </nav></header></center>
		`
	}
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<footer>
		<p style="display:flex; justify-connect:space-around; color:#ffffff; padding:10px;">
		...
		</p>
		</footer>
		`
	}
}

customElements.define('my-footer', MyFooter)
