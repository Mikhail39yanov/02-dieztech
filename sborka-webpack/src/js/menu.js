import { closeMenu, openMenu } from './menu-functions/index.js'
const buttonMenu = document.querySelector('[data-open-menu]')

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.contains('_active') ? closeMenu() : openMenu()
})
