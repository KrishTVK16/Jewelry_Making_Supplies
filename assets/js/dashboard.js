/**
 * JEWELORA SUPPLIES - Dashboard Script
 * Handles admin specific interactions and chart placeholders.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard initialized');

    // Simulate Chart initialization if Chart.js was present
    // For now we just handle specific dashboard UX

    // Active link handling
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Mock Data Updates (Optional visual effect)
    const stats = document.querySelectorAll('.stat-value');
    stats.forEach(stat => {
        // Just a simple animation effect placeholder
        stat.style.transition = "color 0.5s ease";
    });
});
