import './style.css';
import { showHome } from './home.js';
import { showMenu } from './menu.js';

console.log('cock-a-doodle-doo');
showHome();

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');

function refreshContent() {
    const body = document.querySelector('body');
    const oldContent = document.getElementById('content');
    body.removeChild(oldContent);
    const newContent = document.createElement('div');
    newContent.id = 'content';
    const footer = document.querySelector('.footer');
    body.insertBefore(newContent, footer);
}

homeBtn.addEventListener('click', () => {
    refreshContent();
    showHome();
});

menuBtn.addEventListener('click', () => {
    refreshContent();
    showMenu();
});