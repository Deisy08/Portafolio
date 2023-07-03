const skillsContainer = document.querySelector('.skills-line');
const skillsData = [
    { iconSrc: 'assets/htlm.png', name: 'HTML 5' },
    { iconSrc: 'assets/js_icon.png', name: 'Javascript' },
    { iconSrc: 'assets/git_icon.png', name: 'Git' },
    { iconSrc: 'assets/nodejs_icon.png', name: 'Node JS' },
    { iconSrc: 'assets/figma_icon.png', name: 'Figma' },
    { iconSrc: 'assets/css_icon.png', name: 'CSS' },
    { iconSrc: 'assets/css_icon.png', name: 'React' },
    { iconSrc: 'assets/css_icon.png', name: 'SQL' }
];

// Recorre los datos de habilidades y crea los elementos HTML
skillsData.forEach(skill => {
    // Crea los elementos HTML
    const skillsBox = document.createElement('div');
    skillsBox.classList.add('box');
  
    const ul = document.createElement('ul');
  
    const iconLi = document.createElement('li');
    const iconImg = document.createElement('img');
    iconImg.src = skill.iconSrc;
    iconLi.appendChild(iconImg);
  
    const nameLi = document.createElement('li');
    nameLi.textContent = skill.name;
  
    // Agrega los elementos al árbol DOM
    ul.appendChild(iconLi);
    ul.appendChild(nameLi);
    skillsBox.appendChild(ul);
    skillsContainer.appendChild(skillsBox);
});