/**
 * JEWELORA SUPPLIES - Usage Script
 * Handles global interactions, navigation, and theme toggling.
 */

document.addEventListener('DOMContentLoaded', () => {

    // Header Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Check local storage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            updateToggleIcon(currentTheme);
        }

        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                theme = 'light';
            } else {
                theme = 'dark';
            }
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateToggleIcon(theme);
        });
    }

    function updateToggleIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('bi-moon');
            icon.classList.add('bi-sun');
        } else {
            icon.classList.remove('bi-sun');
            icon.classList.add('bi-moon');
        }
    }

    // Auto-initialize Bootstrap tooltips if any
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Dynamic Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Sidebar Toggle (Dashboard)
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (sidebarToggle && sidebar) {
        // Function to toggle sidebar logic
        const toggleSidebar = () => {
            sidebar.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
        };

        const closeSidebar = () => {
            sidebar.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        };

        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate closing
            toggleSidebar();
        });

        // Close when clicking overlay (Preferred method)
        if (overlay) {
            overlay.addEventListener('click', closeSidebar);
        }

        // Close sidebar when clicking outside (Fallback logic)
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 1200 && sidebar.classList.contains('active')) {
                // If checking overlay didn't work, check targets
                if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                    closeSidebar();
                }
            }
        });
    }
});
