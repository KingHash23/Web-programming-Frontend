
// Track current mode (start with dark mode)
let darkMode = true;

// Function to switch between dark and light modes
function switchMode() {
    // Toggle mode
    darkMode = !darkMode;
    
    // Get button
    const toggleButton = document.getElementById('toggleMode');
    
    if (darkMode) {
        // Dark Mode
        document.body.style.backgroundColor = '#1E1E1E';
        document.querySelector('.navbar').style.backgroundColor = '#121212';
        
        // Text colors
        document.querySelectorAll('h1, h2, h3, h4, h5, h6, .navbar-brand, .nav-link').forEach(el => {
            el.style.color = 'white';
        });
        
        // Button text
        toggleButton.textContent = 'Light Mode';
        toggleButton.className = 'btn btn-light';
        
    } else {
        // Light Mode
        document.body.style.backgroundColor = '#f8f9fa';
        document.querySelector('.navbar').style.backgroundColor = '#ffffff';
        
        // Text colors
        document.querySelectorAll('h1, h2, h3, h4, h5, h6, .navbar-brand, .nav-link').forEach(el => {
            el.style.color = '#2c3e50';
        });
        
        // Button text
        toggleButton.textContent = 'Dark Mode';
        toggleButton.className = 'btn btn-dark';
    }
    
    // Save preference
    localStorage.setItem('darkMode', darkMode);
}

// Load saved preference when page loads
window.onload = function() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
        darkMode = savedMode !== 'true';
        switchMode();
    }
};