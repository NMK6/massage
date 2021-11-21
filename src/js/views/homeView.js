import { elements } from './base';
import * as utils from './utils';
export function addMarkup(arr) {
	const yearContainer = document.querySelector('.footer__year');
	const backgroundVideo = document.querySelector('.background');
	backgroundVideo.style.height = elements.rootWidth / 1.82 + 'px';
	yearContainer.textContent = arr.year;

	setTimeout(function () {
		const logo = `<img
    src="/img/logo.svg"
    alt="logo"
    class="nav__logo"
    width="100"
  />`;
		utils.addExtraHtml(document.querySelector('.nav__logo-container'), logo);

		const videoElement = `<video
    playsinline
    autoplay
    muted
    loop
    poster="/img/cover.jpg"
    class="background__video"
  >
    <source src="/video/background.mp4" type="video/mp4" />
  </video>`;
		utils.addExtraHtml(
			document.querySelector('.background__video-container'),
			videoElement
		);
		utils.addNewClass(
			document.querySelector('.background__video-container'),
			'add-opacity'
		);
		const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Eagle+Lake&family=Raleway&display=swap"
			rel="stylesheet"
		/>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
			integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		/>`;
		utils.addExtraHtml(document.querySelector('head'), fonts);
	}, 100);
	setTimeout(function () {
		const aboutVideo = `<video
    width="560"
    height="400"
    controls
    poster="/img/cover.jpg"
    class="about__video"
  >
    <source src="/video/massage.mp4" type="video/mp4" />
  </video>`;
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
		const educationVideo = `		<video
    width="560"
    height="400"
    controls
    poster="/img/video.jpg"
    class="education__video"
  >
    <source src="/video/education.mp4" type="video/mp4" />
  </video>`;
		utils.addToBeginningExtraHtml(
			document.querySelector('.education__video-container'),
			educationVideo
		);
		const footerLogo = `
			<img
				src='/img/logo.svg'
				alt='logo of Massage by Tatyana'
				class='nav__logo nav__logo--footer'
				width='100'
			/>`;
		utils.addExtraHtml(
			document.querySelector('.nav__logo-container--footer'),
			footerLogo
		);
	}, 200);
}
