// Define a new class extending HTMLElement
class Testimonials extends HTMLElement {
    constructor() {
        super(); // Always call super() first in constructor
        // Create a shadow root (optional)
        this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {

        this.shadowRoot.innerHTML = `
            <style>

                @import url('components/main.css');

                .testimonial {
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    margin: 1rem;
                }

                .testimonial_img {
                    width: 5rem; 
                    height: auto;
                }

                .testimonial_text {
                    margin-left: 1rem;
                }

                .testimonial strong {
                    margin-left: 2rem;
                    font-weight: 700;
                }
            </style>
            
            <div class="section">
                <h1 class="title_back">What Our Customers Say</h1>
                <div class="testimonial">
                    <p class="testimonial_text">4 Seasons Windows are good and efficient in their profession. They also speak Spanish and English. Had a new sliding door fully replaced and installed in less than a day. Very respectful and hardworking.</p>
                    <strong>— Edgar Alatorre</strong>
                </div>
                <div class="testimonial">
                    <p class="testimonial_text">Muy buen servicio, muy amables y las ventanas muy bien colocadas.</p>
                    <strong>— Lucía Ramírez</strong>
                </div>
                <div class="testimonial">
                    <p class="testimonial_text">4 Seasons Windows did such a great job installing all the windows on our house! They were so easy and pleasant to work with. Very prompt service and exceptional work ethic! We would happily use their services again!</p>
                    <strong>— Brady &amp; Amber Beckstead</strong>
                </div>
                <div class="testimonial">
                    <p class="testimonial_text">The owner was very helpful! He installed a glass shower door and replaced two window screens. Very reasonable on the price and very diligent.</p>
                    <strong>— William Orellana</strong>
                </div>
                <div class="testimonial">
                    <p class="testimonial_text">We love our window! It looks beautiful and the quality is fantastic. The response time was fast and the communication was clear. Even with a schedule change, everything was handled very well. We’d definitely recommend them.</p>
                    <strong>— Anisha Ivie</strong>
                </div>
                <div class="testimonial">
                    <p class="testimonial_text">4 Seasons does a great job. They are very professional and did the work promptly. Miguel was good to work with. I’ll happily do business with them again!</p>
                    <strong>— Anonymous (Dec 2023)</strong>
                </div>
                <div class="testimonial">
                    <p class="testimonial_text">Wow! These guys are awesome! They've done such an awesome job on both projects they have done for us and are so great to work with. They are super personable and fair in their business.</p>
                    <strong>— Chelsea Mills</strong>
                </div>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('testimonials-div', Testimonials);