const hobbiesContainer = document.querySelector('.hobbies-line');
const hobbiesData = [
    { iconSrc: 'assets/buceo_icon.png', name: 'Bucear' },
    { iconSrc: 'assets/guitar_icon.png', name: 'Tocar guitarra' },
    { iconSrc: 'assets/headphones_icon.png', name: 'Escuchar música' },
    { iconSrc: 'assets/tv_icon.png', name: 'Ver series y peliculas' },
    { iconSrc: 'assets/forkspoon_icon.png', name: 'Preparar postres' },
    { iconSrc: 'assets/camera_icon.png', name: 'Tomar fotos y grabar' }
];

// Recorre los datos de habilidades y crea los elementos HTML
hobbiesData.forEach(hobbie => {
    // Crea los elementos HTML
    const hobiesBox = document.createElement('div');
    hobiesBox.classList.add('box');
  
    const ul = document.createElement('ul');
  
    const iconLi = document.createElement('li');
    const iconImg = document.createElement('img');
    iconImg.src = hobbie.iconSrc;
    iconLi.appendChild(iconImg);
  
    const nameLi = document.createElement('li');
    nameLi.textContent = hobbie.name;
  
    // Agrega los elementos al árbol DOM
    ul.appendChild(iconLi);
    ul.appendChild(nameLi);
    hobiesBox.appendChild(ul);
    hobbiesContainer.appendChild(hobiesBox);
  });