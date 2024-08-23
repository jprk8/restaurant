import hotwing from './img/hotwing.png';
export { showHome };

function showHome() {
    const content = document.getElementById('content');

    const title = document.createElement('div');
    const subtitle = document.createElement('div');
    title.classList.add('title');
    subtitle.classList.add('subtitle');
    title.textContent = 'ROOSTERBILT';
    subtitle.textContent = 'THE IMPOSSIBLE CHICKEN';

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = hotwing;
    logo.alt = 'muscular chicken';

    const subtext1 = document.createElement('div');
    const subtext2 = document.createElement('div');
    const subtext3 = document.createElement('div');
    subtext1.classList.add('subtext1');
    subtext2.classList.add('subtext2');
    subtext3.classList.add('subtext3');
    subtext1.textContent = 'much spicy';
    subtext2.textContent = 'many sauces';
    subtext3.textContent = 'wow';

    const maintext = document.createElement('div');
    maintext.classList.add('maintext');
    maintext.textContent = 'Taste the healthiest chicken in the world!';

    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(logo);
    content.appendChild(subtext1);
    content.appendChild(subtext2);
    content.appendChild(subtext3);
    content.appendChild(maintext);
}