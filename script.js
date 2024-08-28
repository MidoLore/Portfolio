function toggleMode() {
    const body = document.body;
    const icon = document.getElementById('toggle-icon');

    // Toggle dark mode class on the body
    body.classList.toggle('dark-mode');

    // Toggle the icon between light_mode and dark_mode
    if (icon.textContent === 'light_mode') {
        icon.textContent = 'dark_mode';
    } else {
        icon.textContent = 'light_mode';
    }
}