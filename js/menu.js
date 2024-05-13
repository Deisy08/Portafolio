const barraMenu = document.querySelector(".menuBarra")


document.addEventListener('DOMContentLoaded', function() {
    let links = document.querySelectorAll('.cont-menu nav a');
    let checkbox = document.getElementById('btn-menu');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            checkbox.checked = false;
        });
    }
});
document.addEventListener('scroll', function() {
    const body = document.body;
    if (window.scrollY > 0) {
      body.classList.add('scrolled');
    } else {
      body.classList.remove('scrolled');
    }
  });
  