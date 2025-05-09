class Color extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
		`
	}
}

customElements.define('color', Color)
