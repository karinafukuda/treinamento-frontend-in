let buttonEvt = document.getElementById('sidebar__button');
let sidebar = document.querySelector('.sidebar__menu');

buttonEvt.addEventListener('click', () => {
  buttonEvt.classList.add('sidebar__button--selected');

  //adicionar lógica para todos os links
});

function openNav() {
  document.getElementById('mySidebar').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginLeft = '250px';
}
