document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const navToggle = document.getElementById('navToggle');
    const navWrapper = document.getElementById('navWrapper');
    
    if (navToggle && navWrapper) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navWrapper.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Dropdown Logic
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = document.querySelector('.dropdown-toggle');
    
    if (dropdown && dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            // Close dropdown if clicked outside
            if (dropdown && !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
            
            // Close mobile menu if clicked outside
            if (navWrapper && navWrapper.classList.contains('active') && !navWrapper.contains(e.target) && !navToggle.contains(e.target)) {
                navWrapper.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
        
        const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Close dropdown & mobile menu when a dropdown link is clicked
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                dropdown.classList.remove('active');
                if (navWrapper) {
                    navWrapper.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });
        
        // Close mobile menu when a standard link is clicked
        navLinks.forEach(item => {
            item.addEventListener('click', () => {
                if (navWrapper) {
                    navWrapper.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });
    }
});
