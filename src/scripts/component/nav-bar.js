class NavBar extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="nav-container">
    <img src="./images/logo/logo.png" alt="Logo Foody" tabindex="0" class="image-logo-nav"/>
    <button class="hamburger" id="hamburger">☰</button>
    <nav class="drawer" id="drawer">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://www.instagram.com/adfzia/">About Us</a></li>
      </ul>
    </nav>
    </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);
