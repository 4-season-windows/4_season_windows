// Define a new class extending HTMLElement
class Services extends HTMLElement {
    constructor() {
        super(); // Always call super() first in constructor
        // Create a shadow root (optional)
        this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {

        this.shadowRoot.innerHTML = `
            <style>

                @import url('components/main.css');

                #services_section {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    width: 100%;
                }

                .service{
                    margin: 1rem;

                }

                .services_img {
                    width: 100%; /* Take full width of the grid cell */
                    height: auto; /* Maintain aspect ratio */
                }

            </style>
            <div class="section">

                <h1 class="title_back">Services</h1>
                <div id="services_section">
                    <div class="service">
                        <img class="services_img" src="assets/default_image.jpg">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div class="service">
                        <img class="services_img" src="assets/default_image.jpg">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div class="service">
                        <img class="services_img" src="assets/default_image.jpg">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <br>
                <p>We provide the following services with the utmost quality and professionalism:</p>
                <ul>
                    <li>Broken Windows</li>
                    <li>Showers</li>
                    <li>Glass Storefronts</li>
                    <li>Mirrors</li>
                </ul>

                <p>Call us to get a free quote! We'd love to meet you and see how we can help</p>

                <br>
                <p>Or fill out a request for a <a id="forms_link" href="https://docs.google.com/forms/d/e/1FAIpQLScezCJd3OOmwQR2TQPbMwIYf0fpTVnUrHDVVY7vZzsazQmitg/viewform?usp=dialog">quote</a></p>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('services-div', Services);