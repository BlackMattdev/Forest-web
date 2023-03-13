const hamburger = document.querySelector('.navbar__desktop-hamburger');
const navbarmob = document.querySelector('.navbarmob');
const allNavItems = document.querySelectorAll('.navbarmob__mobile-list-item');

const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	const bars = document.querySelector('.navbar__desktop-hamburger i');
	console.log(bars);
	bars.classList.toggle('fa-bars');
	bars.classList.toggle('fa-xmark');
	navbarmob.classList.toggle('navbarmob--active');
	document.body.classList.toggle('sticky-body');
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			bars.classList.add('fa-bars');
			bars.classList.remove('fa-xmark');
			navbarmob.classList.remove('navbarmob--active');
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
hamburger.addEventListener('click', handleNav);
