document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        themeToggle.innerHTML = currentMode === 'dark' 
            ? '<img src="https://img.icons8.com/ios-filled/50/ffffff/sun.png" alt="Toggle Icon"/>'
            : '<img src="https://img.icons8.com/ios-filled/50/ffffff/moon.png" alt="Toggle Icon"/>';
    });
});
