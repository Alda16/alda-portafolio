document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // 1. Comprobar si hay una preferencia guardada en localStorage
    const currentTheme = localStorage.getItem('theme');

    // 2. Si hay una preferencia guardada, aplicarla
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeIcon.textContent = '☀️'; 
        }
    }
    // 3. Escuchar el evento de clic en el botón
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        let theme = 'light-mode'; 
        if (body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
            themeIcon.textContent = '☀️'; 
        } else {
            themeIcon.textContent = '🌙'; 
        }
        // 4. Guardar la preferencia en localStorage
        localStorage.setItem('theme', theme);
    });
});