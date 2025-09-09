document.addEventListener('DOMContentLoaded', () => {
    // --- Custom Modal Elements ---
    const customModal = document.getElementById('custom-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalConfirmBtn = document.getElementById('modal-confirm-btn');
    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    const modalOkBtn = document.getElementById('modal-ok-btn');

    let currentModalCallback = null; // Stores the callback function for confirm/cancel actions

    // Function to show the custom message box
    function showCustomMessage(title, message, type, callback = null) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        currentModalCallback = callback;

        // Reset button visibility
        modalConfirmBtn.style.display = 'none';
        modalCancelBtn.style.display = 'none';
        modalOkBtn.style.display = 'none';

        if (type === 'confirm') {
            modalConfirmBtn.style.display = 'inline-block';
            modalCancelBtn.style.display = 'inline-block';
        } else { // 'alert' type
            modalOkBtn.style.display = 'inline-block';
        }

        customModal.classList.add('active'); // Show the modal
    }

    // Function to hide the custom message box
    //function hideCustomMessage() {
    //    customModal.classList.remove('active'); // Hide the modal
    //    currentModalCallback = null; // Clear the callback
    //}

    // Event listeners for modal buttons
    //modalConfirmBtn.addEventListener('click', () => {
    //    if (currentModalCallback) {
    //        currentModalCallback(true); // Pass true for confirmation
    //    }
    //    hideCustomMessage();
    //});

    //modalCancelBtn.addEventListener('click', () => {
    //    if (currentModalCallback) {
    //        currentModalCallback(false); // Pass false for cancellation
    //    }
    //    hideCustomMessage();
    //});

    //modalOkBtn.addEventListener('click', () => {
    //    if (currentModalCallback) {
    //        currentModalCallback(); // No specific value for OK
    //    }
    //    hideCustomMessage();
    //});


    // --- 1. Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('nav.navbar ul li a, nav.detail-page-navbar ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                window.location.href = this.getAttribute('href');
            }
        });
    });


    // --- 2. Active Navigation Link on Scroll ---
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav.navbar ul li a');

    const activateNavLink = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', activateNavLink);
    activateNavLink();

    // --- 3. Dynamic Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }


    // --- 4. Basic Contact Form Handling (Using custom modal instead of alert) ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (name === '' || email === '' || message === '') {
                showCustomMessage('Input Error', 'Please fill in all fields.', 'alert');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showCustomMessage('Input Error', 'Please enter a valid email address.', 'alert');
                return;
            }

            console.log('Form submitted successfully!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            showCustomMessage('Success', 'Thank you for your message! I will get back to you soon.', 'alert', () => {
                contactForm.reset(); // Clear the form after OK is clicked
            });
        });
    }

    // --- 5. Project Card Hover Effect ---
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
    });

    // The nav toggle button and its associated JavaScript logic have been removed.

    // --- NEW: Gmail Link Confirmation using Custom Modal ---
    const gmailContactItem = document.getElementById('gmail-contact-item');
    const gmailLink = document.getElementById('gmail-link'); // Get the actual mailto link

    if (gmailContactItem && gmailLink) {
        gmailContactItem.addEventListener('click', (e) => {
            // Prevent the default link behavior if the click originated from the link itself
            e.preventDefault();

            showCustomMessage(
                'Open Email Client?',
                'Do you want to open your default email client to send an email?',
                'confirm',
                (response) => {
                    if (response) {
                        console.log('User confirmed to open email client.');
                        console.log('Attempting to open mailto:', gmailLink.href);
                        // If user confirms, programmatically navigate to the mailto link
                        // Using window.location.href is the standard way to do this.
                        window.location.href = gmailLink.href;
                    } else {
                        console.log('User cancelled opening email client.');
                    }
                }
            );
        });
    }
});
