class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="logo-link">              
                <a href=""><img src="/images/jm-logo-dark.png"/></a>
            </div>
            <ul class="nav-bar">
                <li id="home-link"><a href="/">Home</a></li>
                <li id="resume-link" ><a href="/resume/">Resume</a></li>
                <li id="portfolio-link">
                    <a href="/portfolio/">Portfolio</a>
                    <ul class="sub-menu">
                        <li><a href="#">Cote d'Ivoire</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                </li>
            </ul>
        `;
    }   
}

customElements.define('header-component', Header);

const menuItems = document.querySelectorAll(".nav-bar li");
const currentUrl = window.location.pathname;

if (currentUrl === '/') {
  document.querySelector('#home-link').classList.add('active');
} else if (currentUrl === '/resume.html') {
  document.querySelector('#resume-link').classList.add('active');
} else if (currentUrl === '/portfolio.html') {
  document.querySelector('#portfolio-link').classList.add('active');
  document.querySelector('#portfolio-link > ul > li').classList.add('active-child');
}

menuItems.forEach((menuItem) => {
    const subMenu = menuItem.querySelector("ul");
    if (subMenu) {
        const menuItemLink = menuItem.querySelector("a");
        menuItemLink.addEventListener("click", (event) => {
        subMenu.classList.toggle("show");
        });
    }
});
