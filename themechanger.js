const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const body = document.body;

const darkEnabled = document.getElementById('darkEnabled');
const theme = localStorage.getItem('theme');

const button = document.getElementById('backToTop');
const logo = document.getElementById('logo');

localStorage.setItem('theme', 'dark');

if (theme) {
    body.classList.add(theme);
}

if (theme === 'dark') {
    body.classList.replace('light', 'dark');
    logo.classList.add('rev');
    button.classList.add('btn-dark');
    darkButton.classList.add('theme-changer-dark');
    lightButton.classList.add('theme-changer-dark');

    localStorage.setItem('theme', 'dark');
    console.log(`Theme set to dark.`);    
} else {
    body.classList.replace('dark', 'light');
    logo.classList.add('inv');
    button.classList.add('btn-light');
    lightButton.classList.add('theme-changer-light');
    darkButton.classList.add('theme-changer-light');

    localStorage.setItem('theme', 'light');
    console.log(`Theme set to light.`);  
}

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    logo.classList.replace('inv', 'rev');
    button.classList.replace('btn-light', 'btn-dark');
    darkButton.classList.replace('theme-changer-light', 'theme-changer-dark');
    lightButton.classList.replace('theme-changer-light', 'theme-changer-dark');

    localStorage.setItem('theme', 'dark');
    console.log(`Theme set to dark.`);
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    logo.classList.replace('rev', 'inv');
    button.classList.replace('btn-dark', 'btn-light');
    lightButton.classList.replace('theme-changer-dark', 'theme-changer-light');
    darkButton.classList.replace('theme-changer-dark', 'theme-changer-light');

    localStorage.setItem('theme', 'light');
    console.log(`Theme set to light.`);
};