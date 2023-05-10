class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <a target="_blank" href="https://www.linkedin.com/in/dr-jessica-moody-11085944"><img src="/images/linkedin.svg" alt="Linked In Icon"/></a>
            <a target="_blank" href="https://twitter.com/JessMoody89"><img src="/images/twitter.svg" alt="Twitter Icon"/></a>
            <a target="_blank" href="mailto:jessmoody475@gmail.com"><img src="/images/email.png" alt="Email Icon"/></a>
            <span class="icons-link">Icons by <a target="_blank" href="https://icons8.com" class="fdm__copy-html-content fdm__copy-html-content-link">Icons8</a></span>
        `;
    }   
}

customElements.define('footer-component', Footer);