const darkButton = document.getElementById('dark');

const body = document.body;

const darkEnabled = document.getElementById('darkEnabled');
const theme = localStorage.getItem('theme');

const button = document.getElementById('backToTop');
const logo = document.getElementById('logo');

let isDarkTrue;

if (theme) {
    body.classList.add(theme);
}

const toDark = () => {
    body.classList.replace('light', 'dark');
    logo.classList.replace('inv', 'rev');
    button.classList.replace('btn-light', 'btn-dark');
    darkButton.classList.replace('theme-changer-light', 'theme-changer-dark');

    localStorage.setItem('theme', 'dark');
    console.log(`Theme set to dark.`);

    darkButton.textContent = 'Light Theme ☀️';
    isDarkTrue = true;
    return;
}

const toLight = () => {
    body.classList.replace('dark', 'light');
    logo.classList.replace('rev', 'inv');
    button.classList.replace('btn-dark', 'btn-light');
    darkButton.classList.replace('theme-changer-dark', 'theme-changer-light');

    localStorage.setItem('theme', 'light');
    console.log(`Theme set to light.`);

    darkButton.textContent = 'Dark Theme 🌙';
    isDarkTrue = false;
    return;
}

if (theme === 'light') {
    body.classList.replace('dark', 'light');
    logo.classList.add('inv');
    button.classList.add('btn-light');
    darkButton.classList.add('theme-changer-light');

    localStorage.setItem('theme', 'light');
    console.log(`Theme set to light.`);

    darkButton.textContent = 'Dark Theme 🌙';
    isDarkTrue = false;
} else {
    body.classList.replace('light', 'dark');
    logo.classList.add('rev');
    button.classList.add('btn-dark');
    darkButton.classList.add('theme-changer-dark');

    localStorage.setItem('theme', 'dark');
    console.log(`Theme set to dark.`);

    darkButton.textContent = 'Light Theme ☀️';
    isDarkTrue = true;
}

darkButton.onclick = () => {
    if (!isDarkTrue) {
        toDark();
    } else {
        toLight();
    }
};