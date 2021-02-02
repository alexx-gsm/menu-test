console.log('hello')

const buttonMenu = document.getElementById('dropdown-link')
const dropdownMenu = document.getElementById('dropdown')

buttonMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('is-open')
})