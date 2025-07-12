// Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu after clicking a link
                    const mobileMenu = document.getElementById('mobileMenu');
                    if (mobileMenu.classList.contains('is-open')) {
                        mobileMenu.classList.remove('is-open');
                    }
                }
            });
        });

        // Hero dots active state (optional, for visual feedback)
        const heroDots = document.querySelectorAll('.hero-social-dots .dot');
        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                heroDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                // In a real scenario, this would scroll to a specific section or change hero content
                console.log(`Dot ${index + 1} clicked`);
            });
        });

        // Mobile Menu Toggle Logic
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenuClose = document.getElementById('mobileMenuClose');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('is-open');
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('is-open');
        });

        // WhatsApp Form Submission Logic
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;

            // Replace with the actual WhatsApp number (e.g., '5511999999999')
            const whatsappNumber = '244945087842'; // Seu número de WhatsApp

            let whatsappMessage = `Olá VersaPro!%0A%0AGostaria de me inscrever no ginásio com os seguintes dados:%0A`;
            whatsappMessage += `Nome: ${nome}%0A`;
            whatsappMessage += `E-mail: ${email}%0A`;
            whatsappMessage += `Telefone: ${telefone}%0A`;
            if (mensagem) {
                whatsappMessage += `Mensagem: ${mensagem}%0A`;
            }
            whatsappMessage += `%0AAguardando contato!`;

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(decodeURIComponent(whatsappMessage));

            // Open WhatsApp chat
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

            // Optionally, clear the form after submission attempt
            this.reset();
        });