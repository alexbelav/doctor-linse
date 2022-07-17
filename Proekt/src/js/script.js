"use strict"
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/EIMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('touch');

	let menuArrows = document.querySelectorAll('._icon-arrow_bottom');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function(e) {
				menuArrow.parentElement.classList.toggle('active');
			});
		}
	}


} else {
	document.body.classList.add('pc');
}
//Выпадающий список локаций 1-ый
const localHeader = document.querySelectorAll('.body-top-header__title')
localHeader.forEach(function(item) {
	item.addEventListener('click', function() {
		let currentLocal = item;
		currentLocal.classList.toggle('title-body-header__active')
	});
});
//Выпадающий список локаций 2-ый
const localBurger = document.querySelectorAll('.catalog-header__local')
localBurger.forEach(function(item) {
	item.addEventListener('click', function() {
		let currentLocal = item;
		currentLocal.classList.toggle('title-body-header__active')
	});
});
//Выпадающий список поиска
const localSearch = document.querySelectorAll('.search-catalog__icon')
localSearch.forEach(function(item) {
	item.addEventListener('click', function() {
		let currentLocal = item;
		currentLocal.parentElement.classList.toggle('search-active');
	});
});

//burger
const menu = document.querySelector('.catalog-header__menu');
const burger = document.querySelector('.catalog-header__burger');
const mobileBack = document.querySelector('.item-back');
//блокируем скролл 
const lockScroll = () => {
	document.body.classList.toggle('lock');
}
//анблок скролл
const unlockScroll = () => {
	document.body.classList.remove('lock');
}
//по клику на бургер добавляем и убираем класс open
burger.addEventListener('click', () => {
	menu.classList.toggle('open');
	burger.classList.toggle('active');
	lockScroll();
});

menu.addEventListener('click', (e) => {
	if (e.target.classList.contains('menu-catalog__link-arrow')) {
		e.preventDefault();
		e.target.closest('.menu-catalog__list').classList.add('transformation');
		e.target.closest('.menu-catalog__item').querySelector('.menu-catalog__list-drop').classList.add('transformation');
	} 
	if (e.target.classList.contains('item-back__link')) {
		e.preventDefault();
		e.target.closest('.menu-catalog__list-drop').classList.remove('transformation');
		e.target.closest('.catalog-header__menu').querySelector('.menu-catalog__list').classList.remove('transformation');
	}
	if (e.target.classList.contains('menu-catalog__link') && !e.target.classList.contains('menu-catalog__link-arrow')) {
		menu.classList.remove('open');
		unlockScroll();
	}
});

//Swiper Main
const sliderMain = document.querySelector('.main-block__swiper');
let mySwiperMain = new Swiper(sliderMain , {
	//Arrows
	navigation: {
		nextEl: '.custom-next',
		prevEl: '.custom-prev'
	},
	//Pagination
	pagination: {
		el: '.swiper-pagination',
		//Bullets
		clickable: true,
	},
	simulateTouch: false,
	slidesPerView: 1,
	spaceBetween: 315,
	speed: 800,
	loop: true,
	autoplay: {
		delay: 3000,
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
});
//Swiper Doctors
const slider = document.querySelector('.doctors-block__swiper-container');
const sliderNav = document.querySelector('.doctors-scroll__swiper-container');
const sliderMobile = document.querySelector('.doctors-scroll-mob__swiper-container');
//swiper left
let mySwiperNav = new Swiper(sliderNav, {
	slidesPerView: 3,
	spaceBetween: 10,
	loopedSlides: 3,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	loop: true,
	direction: 'vertical',
	pagination: {
		//el: '.swiper-pagination',
		//clickable: true,
	},
	navigation: {
		nextEl: '.button-doctors-next',
		prevEl: '.button-doctors-prev',
	},
	mousewheel: {
		sensitivity: 1,
	},
})
//swiper right
let mySwiper = new Swiper(slider, {
	spaceBetween: 300,
	loop: true,
	loopedSlides: 3,
	pagination: {
		el: '.slider-doctors-pagination',
		type: 'fraction',
		//clickable: true,
	},
	navigation: {
		nextEl: '.button-doctors-next',
		prevEl: '.button-doctors-prev',
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	thumbs: {
		swipers: mySwiperNav,
	},
});
//swiper mob 
let mySwiperMob = new Swiper(sliderMobile, {
	slidesPerView: 3,
	spaceBetween: 10,
	loopedSlides: 3,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	loop: true,
	direction: 'horizontal',
	pagination: {
		//el: '.swiper-pagination',
		//clickable: true,
	},
	navigation: {
		nextEl: '.button-doctors-next',
		prevEl: '.button-doctors-prev',
	},
	mousewheel: {
		sensitivity: 1,
	},
});

//Swiper About
const sliderAbout = document.querySelector('.media-tabs__container');
let swiperAbout = new Swiper(sliderAbout,{
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	loop: true,
	navigation: {
		nextEl: '.media-tabs__button-next',
	},
	pagination: {
		//el: '.media-tabs-pagination',
		//clickable: true,
	},
})



//form selected
const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');

const optionsList = document.querySelectorAll('.option');

selected.addEventListener('click', () => {
  optionsContainer.classList.toggle('active');
});

optionsList.forEach(o => {
  o.addEventListener('click', () => {
    selected.innerHTML = o.querySelector('label').innerHTML;
    optionsContainer.classList.remove('active');
  });
});
//Tabs About
const aboutButton = document.querySelectorAll('.tabs-about-body__btn');
const aboutTabs = document.querySelectorAll('.about-item');

aboutButton.forEach(function(item) {
	item.addEventListener('click', function() {
		let currentButton = item;
		let buttonId = currentButton.getAttribute('data-tab');
		let currentNav = document.querySelector(buttonId);

		if ( ! currentButton.classList.contains('active-tab') ) {
			
		aboutButton.forEach(function(item) {
			item.classList.remove('active-tab');
		});

		aboutTabs.forEach(function(item) {
			item.classList.remove('active-tab');
		});

		currentButton.classList.add('active-tab');
		currentNav.classList.add('active-tab');
		}
	});
});
document.querySelector('.tabs-about-body__btn:nth-child(2)').click();