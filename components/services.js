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
                    height: 20rem; /* Maintain aspect ratio */
                    object-fit: cover;
                }

            </style>
            <div class="section">

                <h1 class="title_back">Services</h1>
                <div id="services_section">
                    <div class="service">
                        <img class="services_img" src="assets/highlights/324A5305.jpg">
                        <h2>Window Installation & Repair</h2>
                        <p>Windows are more than glass and frames — they're how you see and experience the world from your home. Whether you need a brand-new installation or a quick repair, we make sure every window is fitted with care, precision, and a promise to last.</p>
                    </div>
                    <div class="service">
                        <img class="services_img" src="assets/highlights/324A5151.jpg">
                        <h2>Shower Door & Glass Replacement </h2>
                        <p>Your bathroom should feel like your own personal retreat. From elegant frameless shower doors to crystal-clear glass replacements, we bring beauty and durability together in every piece we install.</p>
                    </div>
                    <div class="service">
                        <img class="services_img" src="assets/highlights/324A5178.jpg">
                        <h2>Screen Window Installation & Repair</h2>
                        <p>Fresh air is one of life's simple pleasures. Our custom-fit screen windows let the breeze in while keeping pests out — installed or repaired with the same attention to detail we give every project.</p>
                    </div>

                    
                </div>
                <br>
                <p>
                    Call us or <a id="forms_link" href="https://docs.google.com/forms/d/e/1FAIpQLScezCJd3OOmwQR2TQPbMwIYf0fpTVnUrHDVVY7vZzsazQmitg/viewform?usp=dialog">fill out a request</a> to get a free quote! We'd love to meet you and see how we can help
                </p>

                <p></p>
            </div>
        `;

        // assets/highlights/324A5323.jpg
        // assets/highlights/229828768721894835.jpg.jpeg
        // assets/highlights/324A5305.jpg
        // assets/highlights/324A5178.jpg
        // assets/highlights/324A5166.jpg
        // assets/highlights/324A5151.jpg
    }
}

// Register the custom element
customElements.define('services-div', Services);