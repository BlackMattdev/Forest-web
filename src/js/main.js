const hamburger = document.querySelector('.navbar__desktop-hamburger');
const bars = document.querySelector('.navbar__desktop-hamburger i');
const navbarmob = document.querySelector('.navbarmob');
const allNavItems = document.querySelectorAll('.navbarmob__mobile-list-item');

const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	console.log(bars);
	bars.classList.toggle('fa-bars');
	bars.classList.toggle('fa-xmark');
	navbarmob.classList.toggle('navbarmob--active');
	document.body.classList.toggle('sticky-body');
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navbarmob.classList.remove('navbarmob--active');
			bars.classList.toggle('fa-xmark');
			bars.classList.toggle('fa-bars');
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
hamburger.addEventListener('click', handleNav);
