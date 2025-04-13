class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<center>
		<header>
        <nav>
            <ul>
            <li class="nav__links"><a href="index.html">Kezdőlap</a></li>
            <li class="nav__links"><a href="altkem.html">Általános kémia</a></li>
            </ul>
        </nav></header></center>
		`
	}
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<p style="display:flex; justify-connect:space-around; background-color:#eeeeee; padding:10px;">
		...
		</p>
		`
	}
}

customElements.define('my-footer', MyFooter)