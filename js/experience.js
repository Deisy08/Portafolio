const experienciaContenedor = document.querySelector('.experiencia-contenedor');

const experienciaData = [
  {
    imageSrc: 'assets/encriptador.png',
    title: 'Encriptador de texto',
    challenge: 'Challenge Alura Codificador',
    repoLink: 'https://github.com/Deisy08/encriptadorAlura',
    demoLink: 'https://deisy08.github.io/encriptadorAlura/'
  },
  {
    imageSrc: 'assets/blog.png',
    title: 'Mi primer blog',
    challenge: 'Challenge blog',
    repoLink: 'https://github.com/Deisy08/Blog_BTS',
    demoLink: 'https://deisy08.github.io/Blog_BTS/'
  },
  {
    imageSrc: 'assets/astromeliageek.png',
    title: 'AstromeliaGreek',
    challenge: 'Challenge Oracle',
    repoLink: 'https://github.com/Deisy08/AstromeliaGeek',
    demoLink: '#'
  },
  {
    imageSrc: 'assets/heflix.png',
    title: 'Heflix',
    challenge: 'Challenge Oracle',
    repoLink: 'https://github.com/Deisy08/heflix',
    demoLink: 'https://heflix-lac.vercel.app/'
  },
  {
    imageSrc: 'assets/forca2_print.png',
    title: 'Mi Portafolio',
    challenge: 'Challenge Oracle',
    repoLink: 'https://github.com/Deisy08/Portafolio'
  }
  
];

// Recorre los datos de la experiencia y crea los elementos HTML
experienciaData.forEach(experiencia => {
  const experienciaBox = document.createElement('div');
  experienciaBox.classList.add('experiencia-box');

  const img = document.createElement('img');
  img.src = experiencia.imageSrc;

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');

  const h2 = document.createElement('h2');
  h2.textContent = experiencia.title;

  const h3 = document.createElement('h3');
  h3.textContent = experiencia.challenge;

  const experienceDescription = document.createElement('div');
  experienceDescription.classList.add('experience-description');

  const repoLink = document.createElement('span');
  repoLink.classList.add('experience-repo');
  const repoBtn = document.createElement('button');
  repoBtn.textContent = 'Repositório';
  repoBtn.addEventListener('click', function() {
    window.open(experiencia.repoLink);
  });
  repoLink.appendChild(repoBtn);

  const demoLink = document.createElement('span');
  demoLink.classList.add('experience-demo');
  const demoBtn = document.createElement('button');
  demoBtn.textContent = 'Ver demo';
  demoBtn.addEventListener('click', function() {
    window.open(experiencia.demoLink);
  });
  demoLink.appendChild(demoBtn);

  // Agrega los elementos al árbol DOM
  experienceDescription.appendChild(repoLink);
  if (experiencia.demoLink) {
    experienceDescription.appendChild(demoLink);
  }
  infoContainer.appendChild(h2);
  infoContainer.appendChild(h3);
  infoContainer.appendChild(experienceDescription);
  experienciaBox.appendChild(img);
  experienciaBox.appendChild(infoContainer);
  experienciaContenedor.appendChild(experienciaBox);
});
