class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="logo-link">              
                <a href="/"><img src="/images/jm-logo-dark.png"/></a>
            </div>
            <a class="lines-button navbar-toggle">
                <span class="lines"></span>
            </a>
            <nav class="nav-panel">
                <ul class="nav-bar">
                    <li id="home-link"><a href="/">Home</a></li>
                    <li id="portfolio-link" class="has-submenu">
                        <a>Portfolio</a>
                        <ul class="sub-menu">
                            <li id="peacebuilding-link"><a href="/portfolio/peacebuilding">Peacebuilding</a></li>
                            <li id="journalism-link"><a href="/portfolio/journalism">Journalism</a></li>
                            <li id="politicalrisk-link"><a href="/portfolio/politicalriskforecasting">Political Risk Forecasting</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        `;
    }   
}

customElements.define('header-component', Header);

const menuItems = document.querySelectorAll(".nav-bar li");
const currentUrl = window.location.pathname;

if (currentUrl === '/') {
    document.querySelector('#home-link').classList.add('active');
} else if (currentUrl.includes('/portfolio/')) {
    document.querySelector('#portfolio-link').classList.add('active');

    if(currentUrl.includes('/peacebuilding/')) {
        document.querySelector('#peacebuilding-link').classList.add('active-child');
    }
    else if(currentUrl.includes('/journalism/')) {
        document.querySelector('#journalism-link').classList.add('active-child');
    }
    else if(currentUrl.includes('/politicalriskforecasting/')) {
        document.querySelector('#politicalrisk-link').classList.add('active-child');
    }
}

menuItems.forEach((menuItem) => {
    const subMenu = menuItem.querySelector("ul");
    if (subMenu) {
        const menuItemLink = menuItem.querySelector("a");
        menuItemLink.addEventListener("click", (event) => {
            subMenu.classList.toggle("show");
        });

        // const subMenuItems = subMenu.querySelectorAll('a');

        // subMenuItems.forEach((item) => {
        //     item.addEventListener('click', (event) => {
        //         event.stopPropagation(); // Prevent event propagation to parent elements
        //     });
        //   });
    }
});


document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.nav-panel').classList.toggle('open');
    document.querySelector('.lines-button').classList.toggle('nav-open');
  });

document.querySelector('#portfolio-link').addEventListener('click', function(event) {
    event.stopPropagation()
    document.querySelector('#portfolio-link').classList.toggle('is-open');
});
