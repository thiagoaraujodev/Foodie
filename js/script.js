window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');
	const p = document.querySelector('.section-hero');
	const posicoes = p.getBoundingClientRect();

	if (window.scrollY > posicoes.bottom - posicoes.top) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
});

const btnNavEl = document.querySelector('.btn-mobile-nav');
const mainEl = document.querySelectorAll('.main-nav-link');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', () => {
	headerEl.classList.toggle('nav-open');
});

mainEl.forEach(n => n.addEventListener('click', closeMenu));
function closeMenu() {
	headerEl.classList.remove('nav-open');
}

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
