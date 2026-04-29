document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeIcon.textContent = '☀️'; 
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        let theme = 'light-mode'; 
        if (body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
            themeIcon.textContent = '☀️'; 
        } else {
            themeIcon.textContent = '🌙'; 
        }
        localStorage.setItem('theme', theme);
    });
});
