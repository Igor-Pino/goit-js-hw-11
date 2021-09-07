import templetConstructor from '../templates/template.hbs';
import menuItem from '../../menu.json';


const menuRef = document.querySelector('.js-menu')

const markup = templetConstructor(menuItem)

menuRef.insertAdjacentHTML('afterbegin', markup)