class FootBar extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <img src="./images/logo/logo.png" alt="Logo Foody" class="image-logo-foot"/>
        <p class="copyright">Copyright &copy; 2023 - Ahmad Fauzi Ariyanto</p>
      `;
  }
}

customElements.define('foot-bar', FootBar);
