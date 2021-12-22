import { elements } from './base';
import * as utils from './utils';
export function addMarkup(arr) {
	const yearContainer = document.querySelector('.footer__year');
	const backgroundVideo = document.querySelector('.background');
	const newWidth = elements.rootWidth;
	const newHeight = Math.round(newWidth / 1.82);
	backgroundVideo.style.height = newHeight + 'px';
	yearContainer.textContent = arr.year;
	function toggleMenu(e) {
		const background = document.querySelector('.background__second-menu');
		background.classList.toggle('background__second-menu--color');
		document.querySelector('body').classList.toggle('hide-scroll');
		document.querySelector('.nav__ul').classList.toggle('visually-hidden');
		document
			.querySelector('.nav__a-navigation')
			.classList.toggle('nav__a-navigation--close');
	}
	function openSection(event, e) {
		event.preventDefault();
		if (event.target.dataset.link) {
			toggleMenu(e);
			const section = event.target.dataset.link;
			document.querySelector(`#${section}`).scrollIntoView();
			document
				.querySelector('.nav__ul')
				.removeEventListener('touchstart', openSection);
		}
	}
	function openCloseMob(e) {
		e.preventDefault();

		toggleMenu(e);
		document
			.querySelector('.nav__ul')
			.addEventListener('touchstart', openSection);
	}
	const device = navigator.platform;
	function mobMenu() {
		if (elements.rootWidth < 700 || device == 'iPhone') {
			const ul = document.querySelector('.nav__ul');
			if (!ul.classList.contains('visually - hidden')) {
				ul.classList.add('visually-hidden');
			}
			const navContainer = document.querySelector('.nav__nav');
			if (!document.querySelector('.nav__a-navigation')) {
				const mobButton = `<div class='nav__mobile'><span class='nav__a-navigation'></span></div>`;
				navContainer.insertAdjacentHTML('afterbegin', mobButton);
			}

			document
				.querySelector('.nav__mobile')
				.addEventListener('touchstart', openCloseMob);
		} else {
			const secondMenuRoot = document.querySelector('.nav__a--massage');
			const secondMenu = document.querySelector('.nav__about-ul');
			secondMenuRoot.addEventListener('click', openSecondMenu);
			function openSecondMenu() {
				const lis = document.querySelectorAll('.nav__a-sub');
				hideCover();
				lis.forEach((l, key) => {
					setTimeout(function () {
						l.classList.toggle('nav__opacity');
					}, (key + 1) * 30);
				});

				setTimeout(function () {
					secondMenu.classList.toggle('visually-hidden');
				}, 10);
			}
		}
	}
	mobMenu();
	window.addEventListener('resize', mobMenu);
	setTimeout(function () {
		const logo = `<a href='/'><img src="/img/logo.svg" alt="logo" loading='lazy' class="nav__logo" width="80" height='27'/></a>`;
		utils.addExtraHtml(document.querySelector('.nav__logo-container'), logo);
		let videoElement;
		device == 'iPhone'
			? (videoElement = `<video playsinline autoplay muted loop width=${newWidth} height=${newHeight} class="background__video"><source src="/video/background.mp4" type="video/mp4" /></video>`)
			: (videoElement = `<video playsinline autoplay muted loop width=${newWidth} height=${newHeight} poster="/img/cover.jpg" class="background__video"><source src="/video/background.mp4" type="video/mp4" /></video>`);
		// const videoElement = `<video playsinline autoplay muted loop width=${newWidth} height=${newHeight} poster="/img/cover.jpg" class="background__video"><source src="/video/background.mp4" type="video/mp4" /></video>`;
		utils.addExtraHtml(
			document.querySelector('.background__video-container'),
			videoElement
		);
		utils.addNewClass(
			document.querySelector('.background__video-container'),
			'add-opacity'
		);
		const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Eagle+Lake&family=Raleway&display=swap" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />`;
		utils.addExtraHtml(document.querySelector('head'), fonts);

		const h = document.querySelectorAll('.headings');
		setTimeout(function () {
			h.forEach((one, key) => {
				setTimeout(function () {
					one.classList.add('new-heading');
				}, key * 70);
			});
		}, 1900);

		const p = document.querySelectorAll('.text');
		p.forEach((t, key) => {
			setTimeout(function () {
				t.classList.add('new-p');
			}, key * key * 20);
		});
	}, 100);

	setTimeout(function () {
		let aboutVideo;
		device == 'iPhone'
			? (aboutVideo = `<video controls autoplay loop muted playsinline width="560" height="400" class="about__video"><source src="/video/massage.mp4" type="video/mp4" /></video>`)
			: (aboutVideo = `<video controls autoplay loop muted playsinline width="560" height="400" poster="/img/cover.jpg" class="about__video"><source src="/video/massage.mp4" type="video/mp4" /></video>`);
		// const aboutVideo = `<video controls autoplay loop muted playsinline width="560" height="400" poster="/img/cover.jpg" class="about__video"><source src="/video/massage.mp4" type="video/mp4" /></video>`;
		utils.addToBeginningExtraHtml(
			document.querySelector('.about__video-container'),
			aboutVideo
		);
		utils.addNewClass(document.querySelector('.one__ul--js'), 'one__ul');
		utils.addNewClass(
			document.querySelector('.one__image-container--js'),
			'one__image-container'
		);
		utils.addNewClass(document.querySelector('.about--js'), 'about');
		utils.addNewClass(
			document.querySelector('.benefits__photos-container--js'),
			'benefits__photos-container'
		);
		utils.addNewClass(document.querySelector('.contact--js'), 'contact');
		utils.addNewClass(
			document.querySelector('.contact__img-container--js'),
			'contact__img-container'
		);
		utils.addNewClass(document.querySelector('.education--js'), 'education');
		utils.addNewClass(document.querySelector('.effect--js'), 'effect');
		utils.addNewClass(document.querySelector('.price--js'), 'price');
		utils.addNewClass(
			document.querySelector('.price__card-background--one-js'),
			'price__card-background--one'
		);
		utils.addNewClass(
			document.querySelector('.price__card-background--two-js'),
			'price__card-background--two'
		);
		utils.addNewClass(
			document.querySelector('.price__card-background--three-js'),
			'price__card-background--three'
		);
		let educationVideo;
		device == 'iPhone'
			? (educationVideo = `<video controls autoplay loop muted playsinline width="560" height="400"  class="education__video"><source src="/video/education.mp4" type="video/mp4" /></video>`)
			: (educationVideo = `<video controls autoplay loop muted playsinline width="560" height="400" poster="/img/video.jpg" class="education__video"><source src="/video/education.mp4" type="video/mp4" /></video>`);
		// const educationVideo = `<video controls autoplay loop muted playsinline width="560" height="400" poster="/img/video.jpg" class="education__video"><source src="/video/education.mp4" type="video/mp4" /></video>`;
		utils.addToBeginningExtraHtml(
			document.querySelector('.education__video-container'),
			educationVideo
		);
		const footerLogo = `<a href="/"><img src='/img/logo.svg' alt='logo of Massage by Tatyana' class='nav__logo nav__logo--footer' width="80" height='27'/></a>`;
		utils.addExtraHtml(
			document.querySelector('.nav__logo-container--footer'),
			footerLogo
		);
		const icons = [
			'<i class="fas fa-child"></i>',
			'<i class="fas fa-feather"></i>',
			'<i class="fas fa-spa"></i>',
			'<i class="fab fa-whatsapp"></i>',
			'<i class="fab fa-instagram-square"></i>',
			'<i class="fab fa-facebook-square"></i>',
			'<i class="fab fa-telegram-plane"></i>',
		];
		const iconsContainers = document.querySelectorAll('.icons__container');
		iconsContainers.forEach((one, key) => {
			one.insertAdjacentHTML('beforeend', icons[key]);
		});
	}, 200);
	function hideCover() {
		const background = document.querySelector('.background__second-menu');
		background.classList.add('background__second-menu--color');
		document.querySelector('body').classList.add('hide-scroll');
	}
}
