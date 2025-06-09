document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Smooth Scrolling for Navigation Links ---
    // This allows for a smooth animation when clicking internal navigation links.
    document.querySelectorAll('nav.navbar ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default jump behavior
            e.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute('href').substring(1); // Remove '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Use scrollIntoView with smooth behavior
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // If the link is for a different page (e.g., index.html),
                // navigate normally. This handles cases where you're on 'home'
                // and click 'projects', and the JS shouldn't try to scroll
                // on the current page for a non-existent ID.
                window.location.href = this.getAttribute('href');
            }

            // **NEW: Close the mobile menu if it's open after clicking a link**
            const navList = document.querySelector('nav.navbar ul');
            if (navList && navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });


    // --- 2. Active Navigation Link on Scroll (for single-page feel, or when navigating between sections within a page) ---
    // Highlights the current active section in the navigation bar as the user scrolls.
    const sections = document.querySelectorAll('main section'); // Select all main content sections
    const navLinks = document.querySelectorAll('nav.navbar ul li a'); // Select all navigation links

    const activateNavLink = () => {
        let current = '';

        sections.forEach(section => {
            // Get the current scroll position relative to the top of the viewport
            // Subtract a small offset (e.g., 100px) to activate the link
            // slightly before the section fully enters the viewport.
            const sectionTop = section.offsetTop - 100; // Adjusted offset for fixed header
            const sectionHeight = section.clientHeight;

            // Make sure the section is in view
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active'); // **Changed:** Use 'active' class as per your CSS
            // Check if the link's href matches the current section's ID
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active'); // **Changed:** Use 'active' class as per your CSS
            }
        });
    };

    // Add scroll event listener to the window
    window.addEventListener('scroll', activateNavLink);
    // Call it once on load to set the initial active link
    activateNavLink();

    // --- 3. Dynamic Footer Year ---
    // Automatically updates the copyright year in the footer.
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        // Assuming your copyright text is like "© 2025 by Kiteluva. All rights reserved."
        // We'll replace the existing year (2025 in your HTML) with the current year.
        // This regex ensures it replaces exactly the "© YYYY" pattern.
        footerYear.textContent = footerYear.textContent.replace(/© \d{4}/, `© ${currentYear}`);
    }


    // --- 4. Basic Contact Form Handling (If you plan to add a form) ---
    const contactForm = document.getElementById('contact-form'); // Assuming your form has this ID

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            console.log('Form submitted successfully!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset(); // Clear the form
        });
    }

    // --- 5. Project Card Hover Effect (Example - can be expanded with more interactivity) ---
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
    });

    // --- 6. Hamburger Menu Toggle (NEW SECTION) ---
    const navToggle = document.getElementById('navToggle'); // Ensure your hamburger button has id="navToggle"
    const navList = document.querySelector('nav.navbar ul'); // Ensure this selects your navigation <ul>

    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
});