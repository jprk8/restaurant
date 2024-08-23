import hotwing from './img/hotwing.png';
export { showAbout };

function showAbout() {
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
    maintext.textContent = 'Rooster Boy voted as #1 Goodest Boy™ in the world!';

    const about = document.createElement('div');
    about.classList.add('about');
    about.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Exercitationem quasi accusantium ipsam. Totam eum rem velit. 
    Qui minus deleniti ipsum dolores cumque doloremque dolor, 
    aut doloribus laboriosam soluta ratione velit debitis nulla consequatur totam voluptatum, 
    enim officiis esse magnam voluptas, saepe veritatis quisquam. 
    Eum repudiandae saepe officia omnis eveniet voluptatem.`;

    const bottomText= document.createElement('div');
    bottomText.classList.add('maintext');
    bottomText.textContent = 'All thanks to you!'

    content.appendChild(maintext);
    content.appendChild(about);
    content.appendChild(bottomText);
    content.appendChild(logo);
}