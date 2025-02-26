// Variable to track current mode (starting with dark mode)
let darkModeEnabled = true;

// Function to switch between dark and light modes
function switchMode() {
    // Toggle the mode state
    darkModeEnabled = !darkModeEnabled;
    
    // Get the button element
    const toggleButton = document.getElementById('toggleMode');
    
    // Get body and other key elements
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navBrand = document.querySelector('.navbar-brand');
    const infoCards = document.querySelectorAll('.info-card');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const paragraphs = document.querySelectorAll('p, li, td, th');
    const heroSection = document.querySelector('.hero-section');
    
    if (darkModeEnabled) {
        // Switch to Dark Mode
        body.style.backgroundColor = '#1E1E1E';
        navbar.style.backgroundColor = '#121212';
        
        // Update button text and style
        toggleButton.textContent = 'Light Mode';
        toggleButton.classList.remove('btn-dark');
        toggleButton.classList.add('btn-light');
        
        // Update navigation elements
        navBrand.style.color = 'white';
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
        
        // Update text colors
        headings.forEach(heading => {
            heading.style.color = 'white';
        });
        
        paragraphs.forEach(p => {
            // Don't change color for elements inside info cards
            if (!p.closest('.info-card')) {
                p.style.color = '#e0e0e0';
            }
        });
        
        // Update hero section
        heroSection.style.background = 'linear-gradient(135deg, #0cc0db 0%, #08b8db 100%)';
        
        // Info cards stay the same in dark mode
        infoCards.forEach(card => {
            card.style.background = 'linear-gradient(135deg, #0cc0db 0%, #08b8db 100%)';
        });
        
    } else {
        // Switch to Light Mode
        body.style.backgroundColor = '#f8f9fa';
        navbar.style.backgroundColor = '#ffffff';
        
        // Update button text and style
        toggleButton.textContent = 'Dark Mode';
        toggleButton.classList.remove('btn-light');
        toggleButton.classList.add('btn-dark');
        
        // Update navigation elements
        navBrand.style.color = '#2c3e50';
        navLinks.forEach(link => {
            link.style.color = '#2c3e50';
        });
        
        // Update text colors
        headings.forEach(heading => {
            heading.style.color = '#2c3e50';
        });
        
        paragraphs.forEach(p => {
            // Don't change color for elements inside info cards
            if (!p.closest('.info-card')) {
                p.style.color = '#2c3e50';
            }
        });
        
        // Update hero section with lighter gradient
        heroSection.style.background = 'linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)';
        
        // Lighten info cards in light mode
        infoCards.forEach(card => {
            card.style.background = 'linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)';
        });
    }
    
    // Save user preference in localStorage
    localStorage.setItem('darkMode', darkModeEnabled);
}

// Function to load saved preference on page load
function loadSavedMode() {
    const savedMode = localStorage.getItem('darkMode');
    
    // If a preference exists and is different from current state, switch mode
    if (savedMode !== null) {
        const savedDarkMode = savedMode === 'true';
        if (savedDarkMode !== darkModeEnabled) {
            darkModeEnabled = !savedDarkMode; // Set opposite so switchMode toggles correctly
            switchMode();
        }
    } else {
        // No saved preference, apply initial mode
        switchMode();
    }
}

// Call loadSavedMode when DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadSavedMode);