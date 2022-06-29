
window.onload = () => loadMenuItems(navMenulist);

function loadMenuItems(list: MenuItem[]){
  const parent: HTMLElement = document.getElementById('navigation-menu');
  const menuArray = [];
  list.forEach(item => {
    menuArray.push(`<li class="nav__item"><a href="${item.link}" class="nav__link">${item.title}</a></li>`);
  });
  parent.innerHTML = menuArray.join();
}

const navMenulist: MenuItem[] = [
  {title: 'Home', link: 'home', index: 0},
  {title: 'Portofoliu', link: 'portfolio', index: 1},
  {title: 'Magazine', link: 'stores', index: 2},
  {title: 'Contact', link: 'contact'},
]

interface MenuItem {
    title: string,
    link: string,
    index?: number
}