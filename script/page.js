const cards = document.querySelectorAll('.card');

window.addEventListener('load', () => {
    cards.forEach(card => {
        card.style.transform = 'translateX(0)';
        card.style.transition = `${Math.random() + 0.2}s ease-in-out`
    })
})


const burger_menu = document.querySelector('.burger_menu_items');

const burger_menu_toggle = () => {
    burger_menu.classList.toggle('active');
}