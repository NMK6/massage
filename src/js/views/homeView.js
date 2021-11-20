import { elements } from './base';
// import * as utils from './utils';
export function addMarkup(arr) {
	const yearContainer = document.querySelector('.footer__year');
	const backgroundVideo = document.querySelector('.background');
	backgroundVideo.style.height = elements.rootWidth / 1.82 + 'px';
	yearContainer.textContent = arr.year;

	setTimeout(function () {
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
		const videoContainer = document.querySelector(
			'.background__video-container'
		);
		videoContainer.insertAdjacentHTML('beforeend', videoElement);
		videoContainer.classList.add('add-opacity');
	}, 100);

	//   const container = utils.createNewElement('div', 'home', elements.root);
	//   const firstHalf = utils.createNewElement(
	//     'section',
	//     'home__half main about contact',
	//     container
	//   );
	//   const secondHalf = utils.createNewElement(
	//     'section',
	//     'home__half map',
	//     container
	//   );
	//   const containers = [firstHalf, secondHalf];
	//   return containers;
}
