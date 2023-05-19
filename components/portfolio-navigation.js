class PortfolioNavigation extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <section class="port-nav-menu"> 
                <ul>
                    <li>PORTFOLIO</li>
                    <li id="peacebuilding-sidelink"><a href="/portfolio/peacebuilding">Peacebuilding</a></li>
                    <li id="journalism-sidelink"><a href="/portfolio/journalism">Journalism</a></li>
                    <li id="politicalrisk-sidelink"><a href="/portfolio/politicalriskforecasting">Political Risk Forecasting</a></li>
                </ul>
            </section>
        `;
    }   
}


customElements.define('portfolio-nav-component', PortfolioNavigation);

if(currentUrl.includes('/peacebuilding/')) {
    document.querySelector('#peacebuilding-sidelink').classList.add('active');
}
else if(currentUrl.includes('/journalism/')) {
    document.querySelector('#journalism-sidelink').classList.add('active');
}
else if(currentUrl.includes('/politicalriskforecasting/')) {
    document.querySelector('#politicalrisk-sidelink').classList.add('active');
}
